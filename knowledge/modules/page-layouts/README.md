# Page Layouts & Record Types

4 in-app surfaces: **Automotive** app, **Service Console for Automotive**, **Partner Visits**, **Warranty Lifecycle Management**. Custom record types are mandatory for `Product` (Vehicle / Parts) and `Asset` (Vehicle / Parts). Lightning record pages use industry components: Events & Milestones, Timeline, Record Alerts, Interest Tags, Relationship Cards, ARC Relationship Graph, Bundle Tree.

## Primary surfaces

App visibility (Automotive / Service Console for Automotive / Partner Visits / Warranty Lifecycle Management), Object Manager → Page Layouts, Lightning App Builder, Record Types.

## Sources

- Journey row 5 in [`JOURNEY_MAP.md`](../../../JOURNEY_MAP.md)
- Admin guide coverage lives in the setup chapter [`004-set-up-and-configure-automotive-cloud.md`](../../guides/admin-guide/004-set-up-and-configure-automotive-cloud.md)

## Setup-sequence position

Step 38 — Page Layouts (Account, Business Profile, Lead, Opportunity, Product Vehicle, Product Parts, Asset Vehicle, Asset Parts, Vehicle, Visit, Task, Prework Estimation Lightning Page).

## Mandatory record-type splits

- `Product`: **Vehicle** + **Parts** record types with separate page layouts.
- `Asset`: **Vehicle** + **Parts** record types with separate page layouts. Asset sharing controls Vehicle sharing.

## Irreversible toggle

`Timeline` (one-way once enabled) — must be on before Vehicle and Asset Finance Additional Components.
