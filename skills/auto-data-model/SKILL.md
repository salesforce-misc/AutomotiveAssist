---
name: auto-data-model
description: Expert knowledge of the Salesforce Automotive Cloud data model — 14 model clusters spanning vehicles, captive finance, warranties, claims, partner visits, fleets, inventory, leads, opportunities, retail sales, appraisals, stakeholders, supplier recovery. Use when user asks about Automotive Cloud objects, relationships, or data architecture. Always verify actual API names with `describe_sobject`.
---

# Automotive Cloud Data Model Expert

You are an expert on the Salesforce Automotive Cloud data model. Automotive Cloud is built on **Sales Cloud + Service Cloud** with industry-specific objects layered on top. Always verify API names with `describe_sobject` — labels can vary by org and release.

## Data Model Clusters (14 total — see `JOURNEY_MAP.md` §3)

### 1. Stakeholder Management
`Account`, `Contact`, `Business Profile`, `Internal Organization Unit`, `Supplier`, `Asset Account Participant`, `Asset Contact Participant`, `Party Relationship Group`.

### 2. Groups & Households
`Account Contact Relationship`, `Account Account Relationship`, `Contact Contact Relationship`, `Party Role Relationship`, `Party Relationship Group`, `Person Account`, `Business Account`.

### 3. Vehicle Information
`Vehicle`, `Vehicle Definition`, `Asset`, `Asset Title`, `Asset Title Party`, `Asset Milestone`, `Asset Relationship`, `Asset State Period`, `Business Brand`, `Account Brand`, `Asset Account Participant`, `Asset Contact Participant`, `Asset Data Sharing Participant`. Vehicle holds the unique vehicle instance; Vehicle Definition holds make/model/trim/fuel/battery specs; Asset is the customer-owned record. **Asset sharing controls Vehicle sharing.** Vehicle life events ride on **`AssetMilestone`** (with `AssetMilestone.VehicleId → Vehicle` and a `MilestoneType` picklist) — pair with `BusinessMilestone` + `PersonLifeEvent` for the customer-side timeline. The 240 design names a future `VehicleMilestone` BPO entity but it does not ship in 240 EE — verify with `describe_sobject` before using. `BusinessBrand` (with `AccountBrand` as the Account junction) is the shipping pattern for OEM brand tagging — the design-doc name `AccountBusinessBrand` is **not** a shipped entity. `AssetMedia` is design-only; today use `ProductMedia` (on the Vehicle Definition's Product) + `ContentDocument` for vehicle imagery / digital twin.

### 4. Captive Finance
`Financial Account`, `Financial Account Party`, `Financial Account Balance`, `Financial Account Transaction`, `Financial Account Fee`, `Financial Account Milestone`, `Financial Account Statement`, `Financial Account Address`, `Party Financial Asset`, `Party Financial Asset Additional Owner`, `Financial Account Party Financial Asset`.

### 5. Inventory Management *(uses Field Service Inventory data model)*
`Product Item`, `Product Item Transaction`, `Product Request`, `Product Request Line Item`, `Product Transfer`, `Product Transfer State`, `Shipment`, `Shipment Line Item`, `Serialized Product`, `Serialized Product Transaction`, `Product Required`, `Product Consumed`, `Product Consumed State`, `Return Order`, `Return Order Line Item`, `Return Order Item Adjustment`.

### 6. Leads & Opportunity Management (Enterprise Lead Management / Lead-with-Products)
**Shipping standard objects (240 EE, verified on autodemoNag):** `Lead`, `LeadLineItem`, `LeadPreferredSeller`, `Opportunity`, `OpportunityLineItem` (a.k.a. Opportunity Product), `OpportunityPreferredSeller`. Some orgs also ship a custom `LeadLineItem__c` alongside the standard `LeadLineItem` — both can co-exist; default to standard for new work.

*Notes:* `LeadLineItem.AssetIdentificationNumber` ties a line item to a specific Vehicle / Asset (used for trade-ins / used-car interest). Three OEM↔dealer share patterns are supported (Lead→Lead replicate, Lead→Test Drive→Opportunity, Lead→Opportunity-Opportunity); see `auto-leads-opportunities` for the routing logic and Honda/Daimler/VW/Ford/Stellantis variants. Volume planning baseline: ~40M leads/year with avg ~3 lead details per lead.

**Industry-pattern names that are NOT shipping standard objects in 240 EE** (treat as design / customer-implemented): `LeadDisposition`, `LeadDispositionActivity`, `LeadDevice`, `LeadDeviceSpecification`, `TestDrive`. These come from BMW/Honda industry star-data-model references; they don't appear in `describe_sobject` against autodemoNag. Use `Lead.Status` + Activities for disposition, `LeadLineItem` for device/spec, and `ServiceAppointment` (Salesforce Scheduler) for test-drive scheduling instead.

### 7. Partner Visit Management
`Visit`, `Action Plan`, `Action Plan Template`, `Action Plan Template Version`, `Generic Visit Task`, `Generic Visit Task Context`, `Generic Visit Task Context Relation`, `Assessment Indicator Definition`, `Generic Visit Key Performance Indicator`. *Note*: Action Plan Template and Action Plan can be used outside visits — e.g., on Asset Account Participant, Asset Milestone, Fleet, Vehicle.

### 8. Test Drive & Vehicle Service Appointments
Powered by Salesforce Scheduler — `Service Resource`, `Service Territory`, `Work Type`, `Work Type Group`, plus the Automotive Scheduler guided flows.

### 9. Fleet Management
`Fleet`, `Fleet Asset`, `Fleet Participant`. Fleet Participant joins Fleet ↔ Account/Contact/User.

### 10. Retail Sales Information
`RebateClaim` (carries `VehicleId`, `VehicleDlvrOdometerReading`, `VehicleDeliveryStatus` — **this is the shipping RDR surface in 240 EE, not a separate header entity**), `TransactionJournal` (`Reference record` field is polymorphic — can point to Asset or Vehicle).

> Design-only / not shipping in 240 EE (verified absent on autodemoNag): a stand-alone `RetailDeliveryReport` Header entity, plus the `AggregateKPI` / `AggregateKPIMeasurement` / `AggregateKPIContext` cluster. When customers need richer RDR or pre-computed KPIs, see `auto-inventory-dealer` for current shipping fallbacks (`AssessmentIndicatorDefinition` for visit KPIs, CRM Analytics for external rollups, custom objects for bespoke RDR headers).

RDR is the mandatory document filed by dealer per retail vehicle sale; it drives incentive computation, dealer-performance analytics, and ownership-community activation. Non-vehicle (parts / accessories / services) sales ride `TransactionJournal` with auto-specific attributes added behind the Auto perm. See `auto-inventory-dealer`.

### 11. Warranty Terms & Service Standards
`Warranty Term`, `Product Warranty Term`, `Asset Warranty`, `Warranty Term Coverage`, `Code Set`, `Codeset Relationship`, `Product Fault Code`, `Product Labor Code`.

### 12. Warranty Claims
`Claim`, `Claim Item`, `Claim Coverage`, `Claim Coverage Payment Detail`, `Claim Participant`.

### 13. Warranty Supplier Recovery
`Supplier`, `Supplier Product`, `Contract`, `Sales Contract Line` (note: Manufacturing Cloud objects).

### 14. Appraisal Management
`Appraisal`, `Appraisal Item`, `Appraisal Item Add On`, `Appraisal Item Provider Valuation`. Appraisal can be linked to `Lead`, `Opportunity`, `Financial Account`, or `Case`.

## Key Relationships and Gotchas

### Asset ↔ Vehicle (1:1 in practice)
- `Asset` is owned/instance record; `Vehicle` is the operational record.
- One Asset typically has one Vehicle. Vehicle has child relationships to Asset via the Vehicle lookup.
- **Asset's sharing model controls Vehicle's sharing.**

### Vehicle Definition ↔ Vehicle / Asset
- Vehicle Definition is the *catalog* level (make/model/trim/fuel/battery).
- Vehicle Definition sharing inherits from `Product`.

### Financial Account ↔ Asset
- `Party Financial Asset` is the junction between an Account/Contact and a covered Asset.
- `Financial Account Party Financial Asset` ties a Party Financial Asset to a specific Financial Account (e.g., a trade-in vehicle related to a customer's lease).

### Lead conversion preserves industry detail
- Partner Lead Management default mappings convert `Lead Line Item` → `Opportunity Product` and `Lead Preferred Seller` → `Opportunity Preferred Seller`.
- **Don't disable Partner Lead Management Default Mappings** — that's how the granular lead info survives conversion.
- For OEM↔dealer Lead→Lead replication (Daimler/Ford/Stellantis pattern), maintain a `Source Lead` / `Parent Lead` lookup so the OEM can roll up status across replicated leads.
- For Lead→Opportunity-Opportunity replication (Honda pattern), maintain a parent/source-Opportunity lookup so the OEM can track aggregate progress across dealer-shared opportunities.

### Polymorphic references
- `Transaction Journal.Reference record` → `Asset` or `Vehicle`.
- `Rebate Claim` has many-to-many with both `Asset` and `Vehicle`.

### RDR (shipping pattern)
- RDR rides on `RebateClaim` directly: `RebateClaim.VehicleId → Vehicle`, `RebateClaim.VehicleDlvrOdometerReading`, `RebateClaim.VehicleDeliveryStatus`.
- A separate `RetailDeliveryReport` header entity is **design-only** and does not ship in 240 EE. If a customer needs one, build a custom object with a lookup to `RebateClaim` (loose coupling — not master-detail).

### Aggregate KPI cluster (design-only)
- `AggregateKPI`, `AggregateKPIMeasurement`, `AggregateKPIContext` are named in the 240 design but do not ship in 240 EE.
- Today's options: `AssessmentIndicatorDefinition` for visit-scoped KPIs, CRM Analytics for external rollups, custom objects for bespoke pre-computed KPIs.

## Mandatory Record-Type Splits

- **Product** — *must* split into `Vehicle` and `Parts` record types with separate page layouts. Vehicle RT fields: Business Brand, Make Name, Model Name, Model Year, Version Name, Vehicle Trim Type. Parts RT fields: Harmonized System Code, Harmonized Tariff Schedule Code, Manufacturer Short Name, Manufacturer Part Number, Product Line Code, Product Category Code, Universal Product Code, Availability Date, Discontinued Date, Environmental Protection Regulation Compliant, Certified.
- **Asset** — *must* split into `Vehicle` and `Parts` record types. Vehicle RT fields: Vehicle, Asset Level. Parts RT fields: Asset Level, Serial Number, Root Asset, Parent Asset, Install Date.

## OWD Sharing — Recommended Minimums

The PDF (p. 59-62) lists ~30 objects with recommended internal/external defaults. Highlights:

- `Account`, `Asset`, `Opportunity`, `Product`, `Visit`, `Action Plan`, `Warranty Term`, `Serialized Product`, `Product Item` → typically Public Read/Write internal.
- `Contact`, `Order`, `Person Life Event`, `Business Milestone` → Controlled By Parent.
- `Account Account Relationship`, `Party Role Relationship`, `Sales Agreement`, `Rebate Claim`, `Record Alert`, `Product Request`, `Product Transfer` → Private.
- `User` → Public Read Only internal, Private external.

## Tools to Explore

- `describe_sobject` — get actual field API names for any object
- `run_soql` — query relationships and data
- `search_auto_knowledge` — find documentation
- `get_auto_module_docs` — module-specific guidance

## Objects That Require Tooling API or Metadata API (NOT SOQL)

Never use `run_soql` for:

| Feature | Correct approach |
|---|---|
| Trigger handlers | `list_trigger_handlers`, `toggle_trigger_handler` |
| Admin Console settings | `list_admin_settings`, `update_admin_setting`, `create_admin_setting` |
| Page Layouts / Compact Layouts | `retrieve_metadata` / `deploy_metadata` |
| Quick Actions / Custom Actions | `list_auto_actions`, `create_quick_action`, etc. |
| Record Types | `retrieve_metadata` |
| OmniStudio metadata | `retrieve_metadata` |

## Best Practice

1. Explain the conceptual model from documentation.
2. Use `describe_sobject` to find actual API names.
3. Help construct queries with verified field names.
4. Cite the specific Automotive Cloud feature/PSL that exposes the object.

## Tooling-API entity names worth knowing

| Capability | Entity (Tooling) | Metadata type |
|---|---|---|
| ARC graphs | `RelationshipGraphDefinition`, `RelationshipGraphDefVersion` | `RelationshipGraphDefinition` |
| Vehicle inventory search | `VehicleSearchableField`, `VehDefSearchableField`, `DealerVehDefSearchableField`, `DealerProdtSearchableField` | (DPE template) |
| Identity Verification | `IdentityVerificationProcDef`, `IdentityVerificationProcDtl`, `IdentityVerificationProcFld` | — |
| Connected Services orchestration | `ActionableEventType`, `ActionableEventSubtype`, `ActionableEventOrchestration`, `ActionableEventOrchDef`, `ActionableEventTypeDef` | — |
| Industries logic | `ExpressionSetDefinition`, `ExpressionSetDefinitionVersion`, `DecisionMatrixDefinition` | — |
| Timeline / Alerts | `TimelineObjectDefinition`, `RecordAlertCategory`, `RecordAlertTemplate` | — |

There is **no** `ArcGraph` or `IndustriesArcGraph` entity — those names will fail. Use `RelationshipGraphDefinition`.

## Asset ↔ Vehicle linkage in practice

- The lookup is `Asset.VehicleId → Vehicle`. Confirm with `SELECT COUNT(Id) FROM Asset WHERE VehicleId != null`.
- Well-seeded Auto Cloud orgs have **all auto-Asset rows linked to a Vehicle**; non-auto Assets (e.g., parts, equipment) carry `VehicleId = null`. Use this to separate vehicle vs. parts assets when no record-type split exists.
- `ProductFamily` / `Product2.Family` is the **fallback split** when an org has not implemented Asset / Product Vehicle/Parts record types. Common values seen: `Vehicle`, `Spares`, `Parts`, `EV`, `Sedan`, `Hatchback`, `Trucks`, `NeoSport`. Skills that depend on the RT split should also check `ProductFamily`.
- `AssetWarranty.WarrantyType` typically takes values like `Basic Warranty`, `Dealership Warranty`, `Extended Warranty`, `Powertrain Extended Warranty`, plus customer-defined codes.

## Lending intake schema (Vehicle and Asset Lending)

`ApplicationForm` chain (used by the Vehicle and Asset Lending Underwriter Console):
`ApplicationForm → ApplicationFormProduct → ApplicationFormProductProposal → ApplicationFormTerm → ApplicationFormSellerItem`. This chain backs the `AppChangeLog` ARC graph and the OmniScript-based intake flows.

## 240 entity-level changes — design vs shipping

Verify with `describe_sobject` against your target org. The "Shipping in 240 EE" column reflects what was observed on `autodemoNag` (June 2026).

| Entity | Design intent | Shipping in 240 EE |
|---|---|---|
| `Vehicle` | "7 new fields" + unique index on VIN, ChassisNumber + index on RegistrationNumber | **Partial** — `Vehicle` carries 92 fields; key built-ins include `VehicleIdentificationNumber`, `VehicleRegistrationNumber`, `ChassisNumber`, `EngineNumber`, `EngineName`, `Status`, `ConditionType`, `OdometerStatus`, `MarketPriceSource`, `CurrentOwnerId → Account`. Verify indexes per-org. |
| `VehicleDefinition` FK → `GeoCountry` | yes | **Not shipping**. Use `Vehicle.LocationCountry` (string) + `Vehicle.LocationCountryCode` (picklist) instead. |
| `Asset.VehicleId` lookup | read-only, behind Auto perm | confirm in target org. |
| `VehicleMilestone` (BPO, master-detail to Vehicle) | yes | **Not shipping**. Use `AssetMilestone` (which has `VehicleId → Vehicle` and `MilestoneType` picklist) for vehicle life events. |
| `AssetMedia` | yes (similar to ProductMedia) | **Not shipping**. Use `ProductMedia` + `ContentDocument` for vehicle imagery today. |
| `AccountBusinessBrand` | yes (entity-only) | **Not shipping under that name**. The shipping pattern is `BusinessBrand` + `AccountBrand` junction. |
| `RetailDeliveryReport` Header | yes (loosely coupled to RebateClaim) | **Not shipping**. RDR fields ride on `RebateClaim` directly: `VehicleId`, `VehicleDlvrOdometerReading`, `VehicleDeliveryStatus`. |
| Aggregate KPI cluster (`AggregateKPI`, `AggregateKPIMeasurement`, `AggregateKPIContext`) | yes (allowlisted entities) | **Not shipping**. Use `AssessmentIndicatorDefinition` (visit KPIs) + CRM Analytics + custom objects today. |
| `LeadDisposition`, `LeadDispositionActivity`, `LeadDevice`, `LeadDeviceSpecification`, `TestDrive` | industry star-data-model references | **Not shipping** as standard objects. Use `Lead.Status` + Activities, `LeadLineItem`, and `ServiceAppointment` instead. |
| `Lead` related rows (Lead Line Item, Lead Preferred Seller) | yes | **Shipping** — `LeadLineItem` (standard) + `LeadPreferredSeller` (standard) confirmed. Some orgs also ship `LeadLineItem__c` (custom) alongside the standard. |
| `Opportunity` source / parent tracking field | for OEM↔dealer replicated-Opportunity pattern (Honda) | customer-implemented (custom field today). |

### Fallback table — design name → today's shipping equivalent

| Design name | Use today |
|---|---|
| `VehicleMilestone` | `AssetMilestone` (filter `WHERE VehicleId != null`) |
| `AssetMedia` | `ProductMedia` (on Vehicle Definition's Product) + `ContentDocument` |
| `AccountBusinessBrand` | `BusinessBrand` + `AccountBrand` junction |
| `GeoCountry` FK on VehicleDefinition | `Vehicle.LocationCountry` / `LocationCountryCode` |
| `RetailDeliveryReport` Header | `RebateClaim` (with vehicle-delivery fields) |
| `AggregateKPI` cluster | `AssessmentIndicatorDefinition` + CRM Analytics + custom objects |
| `LeadDisposition` / `LeadDevice` / `TestDrive` | `Lead.Status` + Activities, `LeadLineItem`, `ServiceAppointment` |

## Cross-reference map

When a question spans multiple skills, route to:

| Topic | Skill |
|---|---|
| Vehicle 360 record page (Highlight Panel, Timeline, Profile Card, Alert Insights, Next Best Action, Parts & Accessories, Recall & Warranties tab, Market Value, Asset Media) | `auto-vehicle-asset-fleet` |
| Vehicle Life Events / Vehicle Milestone | `auto-vehicle-asset-fleet` |
| Person Life Event / Business Milestone | `auto-stakeholder-management` (existing capability), tied into `auto-vehicle-asset-fleet` for combined Vehicle 360 timeline |
| Lead with Products / Enterprise Lead Management / OEM↔dealer share patterns | `auto-leads-opportunities` |
| Honda passport-style Lead Insights / dealer assignment criteria / ADF 1.0/2.0 | `auto-leads-opportunities` |
| Retail Delivery Report (RDR) | `auto-inventory-dealer` |
| Aggregate KPI cluster / Pre-computed KPIs | `auto-inventory-dealer` |
| Generic Visits to dealer outlets / Action Plans / Contact Reports | `auto-inventory-dealer` (auto-specific framing); `auto-partner-visits` (framework) |
| Branch Management for dealer outlets | `auto-inventory-dealer` |
