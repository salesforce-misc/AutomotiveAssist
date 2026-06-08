# Captive Finance — Finance Console

Finance Console for Automotive surfaces balances, transactions, fees, milestones, statements, addresses, parties, and title transfers for `Financial Account` records. Used by captive finance arms (e.g. OEM finance subsidiary).

## Primary objects

`Financial Account`, `Financial Account Party`, `Financial Account Balance`, `Financial Account Transaction`, `Financial Account Fee`, `Financial Account Milestone`, `Financial Account Statement`, `Financial Account Address`.

## Sources

- Journey row 11 in [`JOURNEY_MAP.md`](../../../JOURNEY_MAP.md)
- Admin guide: [`013-deliver-proactive-service-for-financial-customers-in-automotive-cloud.md`](../../guides/admin-guide/013-deliver-proactive-service-for-financial-customers-in-automotive-cloud.md)
- PDF pages: 608-631

## Setup-sequence position

Step 23 — Financial Account model. **Timeline must be enabled before** the Vehicle and Asset Finance *Additional Components* flag is flipped (Timeline enable is irreversible).

## Related module

[`vehicle-asset-lending/`](../vehicle-asset-lending/README.md) — the underwriting/decisioning side of the same data model.
