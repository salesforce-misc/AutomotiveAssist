---
name: auto-vehicle-asset-fleet
description: Guides Automotive Cloud vehicle, asset, and fleet configuration — Vehicle, Asset (Vehicle / Parts record types), Asset Account Participant, Asset Contact Participant, Asset Title, Asset Title Party, Fleet, Fleet Asset, Fleet Participant, Vehicle Milestone (Vehicle Life Events), Asset Media, Vehicle 360 record page. Use when modeling vehicle lifecycle, ownership, commercial fleets, or assembling the Vehicle 360 console/standalone experience.
---

# Automotive Cloud Vehicles, Assets & Fleets

Vehicle / Asset / Fleet form the core lifecycle stack. **Asset sharing controls Vehicle sharing.**

## Asset record-type split (mandatory)

- `Vehicle` RT — fields: Vehicle (lookup), Asset Level
- `Parts` RT — fields: Asset Level, Serial Number, Root Asset, Parent Asset, Install Date

Add related lists to both layouts: Primary Assets, Related Assets, Child Assets, Cases, Serialized Products (Parts only), Asset Warranties.

Add **View Asset Hierarchy** action to both layouts.

## Multi-stakeholder model

- `Asset Account Participant` — accounts related to an asset (with role).
- `Asset Contact Participant` — contacts related to an asset (with role).
- One Asset can have many of each. Enables modeling owner / co-owner / driver / dealer / financier / lien holder.

## Asset Title model (for finance / lease / loan flows)

- `Asset Title` — legal ownership of a vehicle or asset.
- `Asset Title Party` — relationship between Account/Contact/User and an Asset Title.

These are required for any flow that transfers ownership (Captive Finance, Vehicle and Asset Lending).

## Fleet model

- `Fleet` — group of vehicles for commercial / transport ops.
- `Fleet Asset` — junction between Fleet and Asset.
- `Fleet Participant` — junction between Fleet and Account/Contact/User (fleet manager, driver, etc.).

Enable via **Fleet Management Settings**. PSLs: `Fleet Management` (internal), `Fleet Management for Experience Cloud` (external).

## Setup order (from `JOURNEY_MAP.md` §2)

1. Asset record types (Vehicle, Parts) + page layouts.
2. Vehicle records (referencing Vehicle Definition).
3. Asset records (referencing Vehicle).
4. Asset Account Participant + Asset Contact Participant configuration.
5. Asset Title + Asset Title Party (only if Captive Finance / Lending in scope).
6. Fleet Management Settings → Fleet, Fleet Asset, Fleet Participant.

## OWD

- `Asset` → Internal Public Read/Write, External Private. Vehicle sharing inherits from Asset.
- `Account Account Relationship` → Private internal + external.

## Common pitfalls

- Forgetting record types → users see all Asset fields on every page, validation rules fire incorrectly.
- Setting Asset OWD too restrictive → external dealers can't see Vehicle data either (inheritance).
- Skipping Asset Account / Contact Participants → can't model multi-owner vehicles.

## Picklist fallbacks when record types aren't deployed

Many real Auto Cloud orgs (including some demo orgs) skip the Asset / Product record-type split and use **`ProductFamily`** instead. Treat both signals when reading data:

| Asset RT (canonical) | Common `ProductFamily` value(s) when no RT exists |
|---|---|
| Vehicle | `Vehicle`, `Sedan`, `Hatchback`, `EV`, `Trucks`, `NeoSport` |
| Parts | `Parts`, `Spares` |

Use `Asset.VehicleId IS NOT NULL` to identify vehicle-Assets when `ProductFamily` is also unreliable.

## AssetWarranty `WarrantyType` reference values

Commonly seen: `Basic Warranty`, `Dealership Warranty`, `Extended Warranty`, `Powertrain Extended Warranty`, plus org-defined codes (`Basic 1 Warranty`, `Repair`, `Loaner`, etc.).

## Asset.Status reference values

Real orgs use a mix of: `Purchased`, `Installed`, `Shipped`, `Registered`, `Active`, `Obsolete`. `Registered` is the Auto Cloud–specific status indicating the vehicle is registered to a customer.

## Vehicle 360 record page

Vehicle 360 is the OOTB Lightning record page for the Vehicle entity. It surfaces the full 360° of a single vehicle instance — details, stakeholders, timeline, alerts, parts/accessories, recalls/warranties, market value — and is reused as both a **stand-alone Vehicle record page** (for OEM technical service / recall managers searching by VIN) and as the **vehicle drill-down inside Service Excellence Console** (for OEM contact-center reps who land on a customer first, then click into a vehicle).

### Vehicle 360 component inventory (Auto Cloud 240 GA scope)

| Component | Type | Purpose |
|---|---|---|
| Vehicle Flexipage | Flexipage | The Lightning record page itself for the Vehicle entity. |
| Highlight Panel | SLDS Page Headers | VIN, engine #, chassis #, current owner, vehicle status, vehicle condition, odometer, MSRP across the top. |
| Profile Card | Custom (FSC profile-card-derived) | Owner / driver dossier on the left rail — uses `Vehicle.CurrentOwner` as the input and pulls fields from Business Profile + Account/Contact Stakeholder participants. Exposed via Setup feature flag (behind Auto perm). |
| Product Search Panel | Custom (List View) | "Car Owns (N)" search list for switching between vehicles owned by the customer (driven by OOTB List View component). |
| Card Details Tabs | SLDS Tabs | Overview / Details / Timeline / Parts & Accessories / Relations / Recalls & Warranties / Documents. |
| Details Card | SLDS Cards | Brand / Make Year / Mate Name / Vehicle Trim Type + Basic Information group. |
| Timeline | SLDS Activity Timeline | Vehicle Life Events + related-record activity timeline anchored on Asset (Vehicle as anchor object via wrapper). |
| Activity Card | SLDS Activity Timeline | Past / Today / Upcoming activities (open service appointments, completed services, etc.). |
| Knowledge Card | SLDS Cards | Knowledge articles relevant to the model — requires Lightning Knowledge enabled. |
| Action Recommendation Card | SLDS Cards | Einstein next-step recommendations. |
| Case Card | SLDS Cards | Open cases for the vehicle (OOTB tied to Account/Contact; reach via junction). |
| Alert Insights | SLDS Page Headers + Headless Tree Grid | Record alerts surfaced from Service Excellence — refer to Service Excellence to enable. |
| Next Best Action | SLDS Cards | Renew Vehicle Insurance / Follow up on case / Renew Engine Warranty etc. — OOTB card; rules configured by customer. |
| Parts & Accessories | Custom flexipage | Four flavors (one per layout): Basic Configurations (`ProductRelatedMaterial`), Compatible Accessories (`ProductRelatedComponent`), Asset Relationship (`AssetRelationship`), Asset Hierarchy (parent Asset). |
| All Warranties (Recall & Warranties tab) | Data Table (LWC + Connect API) | Vehicle + Parts warranties combined. Connect API queries Asset (root + relationships) → AssetWarranty, with pagination (100-record page), search-by-Asset-Name, sort by Asset Name / End Date, FLS-honoring. |
| Manufacturer Warranty Card | SLDS | Vehicle Manufacturer Warranty fields surfaced from the Vehicle entity. |
| Market Value | Custom (with progress bar) | Min / Max / Avg market price + Latest Residual Value (fixed fields on Vehicle, not customer-configurable in 240). |
| Asset Media | Custom | New entity (similar to Product Media) for vehicle imagery / digital twin asset. |
| Vehicles Owned | Custom | "Car Owns (N)" left-rail vehicle list. |
| Stakeholder Graph | Custom | Asset Account / Contact Stakeholders rendered (mocks pending — tracked separately). |
| Vehicle Life Events | Refactored Industries common Life Events component | See **Vehicle Life Events** below. |

> **240 OOTB testing-only components** (zero engineering effort, validated against Vehicle in 240): Product Search Panel, Timeline, Card Details Tabs, Activity Card, Knowledge Card, Action Recommendation Card, Alert Insights, Next Best Action.
> **Parked / deferred from 240**: Profile Card was parked behind a setup feature; rollout depends on FSC profile-card reuse + spike outcomes.

### Stand-alone vs Service-Excellence-Console embedding

| Use case | Entry point | Notes |
|---|---|---|
| Stand-alone Vehicle 360 | Search by VIN → Vehicle record home | OEM technical service / recall manager flow. |
| Embedded inside Service Excellence | Customer → list of customer's vehicles → drill into Vehicle | OEM contact-center employee flow. Vehicle 360 must remain navigable from the Service Excellence console — verify the Vehicle flexipage is exposed in the console app and that user PSLs cover both. |

### Configurable variants

A single org may need **multiple Vehicle 360 layouts** because different personas care about different facets:

- OEM Recall Manager → make / model / year / trim / VIN, list of open recalls
- Vehicle Marketing Manager → accessories + add-ons installed
- Dealer Service rep → mileage, telematics, warranties, repair orders, recalls
- Captive Finance rep → financial account participants, balances, milestones

Implement these as different Lightning record-page assignments per profile/app, not as separate Vehicle objects. Field-level security and entity-level access (Asset OWD inheritance) carry over automatically.

> Customers extend Vehicle 360 with **custom entities and attributes** via page layout, compact layout, and related lists. Custom Lightning components may not be available everywhere — set expectations accordingly.

## Vehicle Life Events

Vehicle Life Events extend the Industries Person Life Event / Business Milestone framework with **vehicle-specific** milestones, anchored on the Vehicle record.

> **Shipping reality check (240 EE):** the design doc names a new `VehicleMilestone` entity (BPO, master-detail to Vehicle). In shipping 240 orgs (e.g., autodemoNag) **`VehicleMilestone` does not exist** as a separate object — vehicle life events are implemented today via **`AssetMilestone`** with `AssetMilestone.VehicleId → Vehicle` and an `AssetMilestone.MilestoneType` picklist. Pair with `BusinessMilestone` + `PersonLifeEvent` (both ship) for the customer-side timeline. Treat `VehicleMilestone` as a **design / future** entity until you confirm it in your target org via `describe_sobject`.

- Refactored from the existing `LifeEvents.cmp` / `LifeEvent.cmp` Aura components into a generic Life Events component on the flexipage.
- Icons configured via the generic icon Setup page (`UsageType` = Vehicle), behind the Auto perm.
- Renders inside Vehicle 360 → **Timeline** tab and as a stand-alone card.

### Event categories (canonical list — used to seed the dynamic enum)

| Category | Example events |
|---|---|
| Before Sales | Vehicle Manufactured, Vehicle Imported (Ported Date), Vehicle Allocated to Dealer, Vehicle at Dealer Lot, Vehicle Invoiced to Dealer |
| Promotion | Dealer Incentive Announced, Customer Incentives Added/Updated |
| Sales | Vehicle Sold (1st / subsequent), Vehicle Sales Reported to DMV / OEM, Accessories Installed, Factory Warranty Start/End, Insurance Sold/Effective Start/End, Vehicle Financed (Sales/Lease), Extended Warranty Start/End/Renew, Insurance Purchased Date |
| Service | First / Second Service Due / Performed, Periodic Maintenance Due / Performed, Inspection Due / Performed, Warranty Claim Made / Approved / Rejected, Insurance Claim Made / Approved / Rejected, Component Warranty Start/End, Mileage Milestones (5k / 10k / 100k), Repair Started / Ended, Service Appointment Requested / Confirmed / Performed, Accident, Lease/Loan/Subscription Start/End, Valuation, Ownership Change, Registration Number Change, Period Inspection, Recall Identified/Notified, Recall Completed |
| Services (subscription) | Service Purchased / Renewed, Service Expiry, Subscription Purchased / Renewed, Battery / Engine / Lubricant Change, Critical Event (telematics alert), Added to / Retired from Fleet |
| Misc | Drivers Added / Removed, Household Assigned / Updated, Marketing Campaign, Remarketing of the Vehicle, Contact Added / Updated, Vehicle Seized, Test Drive, Regulatory Lifetime Planned End, Fitness Certification, Extended Lifetime Start / End |

Each event row carries Category, Event name, Description, and `OEM/Dealer` ownership flag.

### Person + Vehicle Life Events together

Vehicle Life Events **complement** (do not replace) Person Life Event and Business Milestone. The combined timeline on Vehicle 360 should surface relevant Person Life Events (Marriage, Job Change, House Purchase, Kid Born, etc.) where they intersect with the vehicle owner — useful for Next Best Action recommendations (e.g., "Kid born → recommend SUV upgrade").

Architecture: `Account / Contact → Location, Business Milestone, Person Life Event → Lead / Opportunity / Case / Action Plan`. The auto-specific events listed earlier (Identified as Lead, First Vehicle Sold, Accessory Sold, Vehicle Sold by the Customer, Loan Default, Bankruptcy Declared, etc.) ride this same chain.

## Ownership history

Auto Cloud's stakeholder participants don't natively capture **time-bounded ownership transitions** (license-plate changes, financial-owner changes, repaid-loan transitions). The product intent is to render an ownership history table on Vehicle 360. An average vehicle sees ~5 physical owners over its lifetime, so plan for the related-list pagination accordingly.

Minimal model (until the OOTB ownership-history entity ships):

| Field | Source |
|---|---|
| Vehicle ID (VIN) | `Vehicle.VIN` |
| Physical Owner | `AssetContactParticipant` (Role = Owner / Co-Owner) |
| Financial Owner | `AssetAccountParticipant` (Role = Financier / Lien Holder) — e.g. "TFS" while loan is open |
| License Plate Number / State | New custom fields on Vehicle (or extension entity) |
| Effective Start / End Date | New custom fields |
| Is Active | Boolean derived from end date |
| Note | Free text for narrative ("Stephan purchased on loan from TFS"; "Chris repaid the loan") |

When a customer asks about owner history without these custom fields, fall back to ordering `AssetContactParticipant` and `AssetAccountParticipant` records by `CreatedDate` and warn that effective-date and license-plate columns are not modeled OOTB.

## New Vehicle entity changes (Auto Cloud 240) — design vs shipping

> Always verify with `describe_sobject` against your target org. The list below distinguishes 240 design intent from what ships in 240 EE today (autodemoNag inspected).

| Item | Design intent | 240 EE shipping (autodemoNag) |
|---|---|---|
| New Vehicle fields | "7 new fields" | `Vehicle` carries 92 fields total; key built-ins include `VehicleIdentificationNumber`, `VehicleRegistrationNumber`, `ChassisNumber`, `EngineNumber`, `EngineName`, `Status`, `ConditionType`, `OdometerStatus`, `MarketPriceSource`, `CurrentOwnerId → Account`, `VehicleDefinitionId`, `LocationCountry`/`LocationCountryCode`. Custom-org fields (e.g., `Estimated_Premium__c`, `Speed__c`, `Pressure__c`) appear on top. |
| Unique index on `VIN`, `ChassisNumber` | yes | confirm in your org. |
| Index on `RegistrationNumber` | yes | confirm in your org. |
| `VehicleDefinition` FK → `GeoCountry` | yes (with FLS, no validations) | **not shipping** in this org. Country is captured today via `Vehicle.LocationCountry` (string) + `Vehicle.LocationCountryCode` (picklist). |
| Read-only `VehicleId` lookup on `Asset` | yes (behind Auto perm) | confirm; `AssetMilestone` already has `VehicleId → Vehicle`. |
| `AssetMedia` (similar to `ProductMedia`) | yes | **not shipping**. For Vehicle 360 imagery / digital twin today, use `ProductMedia` (on the Vehicle Definition's Product record) + `ContentDocument` attachments. |
| `AccountBusinessBrand` (new entity) | yes | **not shipping under that name**. The shipping entity is `BusinessBrand`; the junction to Account is `AccountBrand`. Use those instead. |

When a design-doc name doesn't resolve in `describe_sobject`, fall back to:

- `VehicleMilestone` → `AssetMilestone` (with `VehicleId`).
- `AssetMedia` → `ProductMedia` + `ContentDocument`.
- `AccountBusinessBrand` → `BusinessBrand` + `AccountBrand` junction.
- `GeoCountry` FK → `Vehicle.LocationCountry` / `Vehicle.LocationCountryCode`.

## Tools

- `describe_sobject` for `Asset`, `Vehicle`, `AssetAccountParticipant`, `AssetContactParticipant`, `AssetMilestone`, `BusinessBrand`, `AccountBrand`, `ProductMedia` (and `VehicleMilestone` / `AssetMedia` when checking whether a future-design entity has landed in your org)
- `run_soql` to verify multi-participant setups and ownership-history reconstructions; e.g. `SELECT VehicleId, MilestoneType, MilestoneDate FROM AssetMilestone WHERE VehicleId != null`
- `retrieve_metadata` for record types, page layouts, and the Vehicle flexipage / Vehicle 360 record page
