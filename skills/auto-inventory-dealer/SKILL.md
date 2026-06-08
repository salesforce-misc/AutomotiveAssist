---
name: auto-inventory-dealer
description: Guides Automotive Cloud inventory + dealer performance — Product Item, Product Transfer, Product Request, Serialized Product, Shipment, Return Order, Vehicle Searchable Field, Criteria-Based Search and Filter, Partner Performance Management, Sales Agreement, Account Manager Target, Retail Delivery Reporting (RDR Header / RDR Line Item via Rebate Claims), Aggregate KPI cluster, Generic Visits + Action Plans for dealer outlets, Branch Management. Use when configuring vehicle/parts inventory, dealer KPIs, RDR ingestion, dealer visits, or pre-computed analytics.
---

# Automotive Cloud Inventory & Dealer Performance

Inventory uses the **Field Service Inventory** data model. Dealer performance uses Partner Performance Management on top of Account / Asset / Sales Agreement, augmented with **Retail Delivery Reports** (RDR) for retail-sale signals, **Aggregate KPI** entities for pre-computed metrics, and **Generic Visits + Action Plans** for field-sales-manager dealer reviews.

## Inventory model

Standard Field Service objects:
- `Product Item` — stock of a product at a location
- `Product Item Transaction` — auto-generated audit
- `Product Request` + `Product Request Line Item` — orders / requests for parts
- `Product Transfer` — movement between locations
- `Product Transfer State` — state of an action on a serialized product (within a transfer)
- `Shipment` + `Shipment Line Item`
- `Serialized Product` + `Serialized Product Transaction`
- `Product Required` / `Product Consumed` / `Product Consumed State`
- `Return Order` + `Return Order Line Item` + `Return Order Item Adjustment`

## Vehicle inventory search setup

1. PSLs: `Criteria-Based Search and Filter`, `Data Pipelines Add On User Settings`, `Data Pipelines Base User`.
2. Setup → **Criteria-Based Search and Filter** → Enable. **Automotive must be enabled first** so the Data Processing Engine template for inventory search becomes available.
3. Setup → **Data Pipelines** → Get Started → Enable Data Pipelines.
4. Configure `Vehicle Searchable Field` records — define which fields users can query, view in results, group by, sort by.
5. Run the **Update Vehicle Searchable Field Values** Data Processing Engine template (requires `Criteria-Based Search and Filter` + `Automotive Foundation User` PSLs).
6. (External dealers) PSL: `Criteria Based Search and Filter for Experience Cloud`.

## Visit Inventory Management

- Setup → **Inventory Settings** → Enable Visit Inventory Management.
- Lets reps record samples / parts consumed during dealer visits.

## Partner Performance Management

1. PSL: `Partner Performance Management` (internal), `Partner Performance Management for Experience Cloud` (external).
2. Setup → Partner Performance Management → Enable.
3. Submit retail delivery reports + parts sale reports → `Rebate Claim` + `Transaction Journal` records.
4. Optional: Rebate Management add-on for incentive payouts.

### Personas + areas evaluated

Dealer performance is evaluated by three personas across four KPI areas:

| Persona | Looks at |
|---|---|
| OEM field sales / field service / spares manager | Sales + after-sales revenue across all dealers in the region. |
| Dealer franchise / dealer-group manager | Each dealer outlet's performance, plus performance broken out by OEM business in multi-brand showrooms. |
| Dealer outlet manager | Their own outlet's performance vs targets. |

Four KPI areas:

1. **Wholesale sales** (dealer purchases from OEM) → leveraged from Manufacturing Cloud (Sales Agreements, Rebates, Programs, Forecasts). No new MFG-Cloud capability needed in 240; existing Einstein capabilities apply.
2. **Retail sales** (what the dealer actually sold to its customers — vehicles, spares, parts, services, extended warranties) → captured via the new RDR pattern (below).
3. **Customer satisfaction** → typically pre-computed externally and uploaded as Aggregate KPI.
4. **Lead performance and pipelines** → reused from `auto-leads-opportunities` (no enhancement here in 240).

## Retail Delivery Reporting (RDR)

RDR is the auto-industry-standard document a dealer files for each vehicle retail sale, sent back to the OEM. It drives:

1. Sales communication from dealer → OEM.
2. Dealer + consumer **incentive computation**.
3. Dealer performance analytics (retail sales).
4. Activation of ownership-community access + activate services on the sold vehicle (RDR is the trigger).

### Shipping pattern in 240 EE — RDR rides on `RebateClaim`

> **Shipping reality check (autodemoNag inspected):** there is **no separate `RetailDeliveryReport` header entity** in 240 EE. The design doc proposes one; what actually ships is RDR data carried directly on `RebateClaim`. Don't advise creating a new RDR header object — `RebateClaim` already has the vehicle-delivery columns.

`RebateClaim` standard fields specific to RDR / vehicle delivery:

| Field | Type | Purpose |
|---|---|---|
| `VehicleId` | reference → Vehicle | The delivered vehicle. |
| `VehicleDlvrOdometerReading` | int | Odometer reading at retail delivery. |
| `VehicleDeliveryStatus` | picklist | Delivery state. |
| `AccountId` (and standard rebate-claim fields) | reference → Account | The customer / receiving party. |

For non-vehicle line items on the same claim, use `RebateClaim` line-level rows + `TransactionJournal` for sales detail (see next section).

### When customers want a richer RDR header

If a customer needs a stand-alone RDR header (multi-line RDRs, separate sharing model, custom RDR-only workflow), implement as a **custom object** with a lookup to `RebateClaim` rather than fighting the standard model. Loose coupling — keep the relationship as a lookup, not master-detail — so future `RebateClaim` evolutions don't break the custom RDR object.

### Sample RDR fields (when customer designs a custom header)

| Field | Notes |
|---|---|
| Account (customer) | Person Account or Business Account. |
| VIN Number | `Vehicle.VehicleIdentificationNumber`. |
| Date of Sale | Required. |
| Sold by Dealer | Account (dealer outlet). |
| Price | TBD / optional column. |
| Odometer Reading | Use `RebateClaim.VehicleDlvrOdometerReading` directly when possible. |

> RDR is the **Mandatory Document** the dealer must produce per vehicle sale. In 240 EE, plan for `RebateClaim` (with the vehicle-delivery fields above) as the system-of-record — analytics + rebate engines feed off it natively.

## Non-vehicle sales (parts / accessories / services)

Use **`Transaction Journal`** to capture non-vehicle dealer-to-customer sales. Add new attributes specific to Auto Sales (behind the Auto perm). Key fields:

1. Dealer
2. Sales Rep
3. Customer
4. Customer Contact
5. Product / Service
6. Serial Number (where applicable)
7. Date of Purchase
8. Price / Revenue
9. Quantity
10. Category (spares / service / warranty / repair)
11. Sale Type (retail / fleet / inter-dealer)

A separate Sales History view can be built on Transaction Journal for retail/non-retail visibility.

## Aggregate KPI cluster (pre-computed external KPIs)

> **Shipping reality check (240 EE):** the design doc names `AggregateKPI`, `AggregateKPIMeasurement`, `AggregateKPIContext`. These **do not ship** as standard entities in autodemoNag (240 EE). Treat the cluster as design / future.

For metrics computed outside Salesforce — CSAT, conversion ratio, footfalls into the store, service appointment counts, etc. — until the Aggregate KPI cluster ships, use one of:

| Today's option | What it covers |
|---|---|
| **`AssessmentIndicatorDefinition`** + Action Plans | Visit-scoped KPIs assessed by a field manager during a dealer visit. Already shipping. |
| **CRM Analytics** (Tableau CRM) | Aggregate KPI rollups computed in dashboards from raw CRM data. |
| **Custom object** (e.g. `Aggregate_KPI__c`) loaded by integration | When the KPI is computed in an external warehouse and only the value is loaded. |

When a customer asks specifically for "Aggregate KPI" / "Aggregate KPI Measurement" / "Aggregate KPI Context", confirm with `describe_sobject` whether those entities have landed in their org before recommending them. Otherwise propose the table above.

## Generic Visits + Action Plans (field manager visits to dealer outlets)

Field sales / field service / parts managers visit dealer outlets periodically or on a need basis (sales dropping, CSAT concerns). Implement using the **Generic Visits** framework + **Action Plans**.

Standard entities shipping in 240 EE (verified on autodemoNag):

| Entity | Purpose |
|---|---|
| `Visit` | The visit record (linked to the dealer Account / VisitedParty). |
| `VisitedParty` / `Visitor` | Parties involved in the visit. |
| `GenericVisitTask` + `GenericVisitTaskContext` + `GenericVisitTaskContextRelation` | Tasks on the visit + context they apply to. |
| `AssessmentIndicatorDefinition` | KPI definitions captured during assessment. |
| `ActionPlan` + `ActionPlanItemDependency` + `ActionPlanTmplItmAssessmentInd` | Action plans + their indicator wiring. |

Visit lifecycle:

| Capability | Notes |
|---|---|
| Rules to generate a visit | Triggered by KPI breach or schedule. |
| Generate a visit | `Visit` record on the dealer Account. |
| Schedule a visit | Lightning Scheduler / Connect API. |
| Perform visit (mobile / desktop) | Surveys, KPI capture via `GenericVisitTask`. |
| Perform assessment of dealer | `AssessmentIndicatorDefinition` rows + Generic Visit KPIs. |
| Capture Action Plans + KPIs | Action Plan Template attached to the Visit. |

The Visit framework is **shared with Manufacturing Cloud** — same generic visit, same Lightning App Builder page hosts the visit. Configure **Visit Inventory Management** (Setup → Inventory Settings) so reps can record samples / parts consumed during the visit.

> Confirm the data model in your org supports the auto use case — Generic Visits is industries-common but its allow-list of related entities is fronted by approval.

## Contact Reports / Action Plans (dealer feedback loop)

A "Contact Report" is the report a field manager files on improvements a dealer needs and is then **shared with the dealer**. It is also used as legal tracking of communications. Implement via Action Plans on the Visit, with the KPI list the dealer must improve plus narrative notes and dates.

## Branch Management (dealer outlets, nice-to-have)

Customers can model dealer outlets and track performance per branch using **Branch Management** + Record Association Builder. Standard entities shipping in 240 EE (verified on autodemoNag):

| Entity | Purpose |
|---|---|
| `BranchUnit` | The branch / outlet record. |
| `BranchUnitBusinessMember` | Internal members of the branch. |
| `BranchUnitCustomer` | Customers associated with the branch. |
| `BranchUnitRelatedRecord` | Generic association bridge between BranchUnit and any record. |

Records associate to branches via `BranchUnitRelatedRecord`; reporting rolls up per-branch and per-region. Include this as the common component it already is — no auto-specific enhancement.

## Sales Agreements + Account Manager Targets + Programs

PSLs: `Manufacturing Sales Agreements Psl`, `Manufacturing Account Manager Targets Psl`, `Program Based Business Psl for Manufacturing Cloud`.

- `Sales Agreement` + `Sales Agreement Product` + `Sales Agreement Schedule` — long-term dealer commitments.
- `Account Manager Target` + `Account Manager Target Distribution` — sales targets distributed across dealers.
- `Manufacturing Program` + `Manufacturing Program Forecast Fact` — new car model programs.

## OWD

- `Product Item` → Public Read/Write internal + external.
- `Product Request` → Private internal + external.
- `Product Transfer` → Private internal + external.
- `Serialized Product` → Public Read/Write internal + external.
- `Sales Agreement` → Public Read/Write internal, Private external.
- `Rebate Claim` → Private internal + external.

## Priority of requirements (per 240 design)

1. Capture vehicle retail sales (RDR) — primary 240 deliverable.
2. Generic visits for dealer outlets.
3. Model non-vehicle sales and generate analytics on them.
4. Model pre-computed KPIs (Aggregate KPI cluster).

Branch management and dealer-rep-level lead routing are explicit *nice-to-haves* in 240.

## Common pitfalls

- Enabling Criteria-Based Search before Automotive → DPE template not available.
- Forgetting to run the Update Vehicle Searchable Field Values DPE → search returns empty.
- Visit Inventory Management not enabled → reps can't record samples on visits.
- Sales Agreement OWD too open externally → dealers see other dealers' commitments.
- Treating RDR as just a Rebate Claim — keep the new RDR Header entity loosely coupled (lookup, not master-detail) so Rebate Claims can evolve without breaking RDR.
- Loading Aggregate KPI rows without an Aggregate KPI Context → rollups can't tell whether the value applies to a customer / device / business operation / user.
- Standing up Generic Visits before confirming the auto entity allow-list is approved → visit-related queries fail.

## Tools

- `describe_sobject` for `ProductItem`, `ProductTransfer`, `RebateClaim` (incl. `VehicleId`, `VehicleDlvrOdometerReading`, `VehicleDeliveryStatus` for RDR), `TransactionJournal`, `Visit`, `GenericVisitTask`, `AssessmentIndicatorDefinition`, `ActionPlan`, `BranchUnit`, `BusinessBrand`, `AccountBrand`. Probe `AggregateKPI` / `AggregateKPIMeasurement` / `AggregateKPIContext` only to confirm whether they have landed in the target org — they don't ship in 240 EE.
- `run_apex` for batch inventory recalculation and KPI rollup jobs
- `run_soql` for inventory / KPI reporting; for RDR-driven retail-sales analytics: `SELECT VehicleId, VehicleDeliveryStatus, VehicleDlvrOdometerReading FROM RebateClaim WHERE VehicleId != null`
