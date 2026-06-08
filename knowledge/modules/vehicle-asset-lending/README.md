# Vehicle and Asset Lending

Lending Console (intake → underwriting → decisioning → proposal). Experian/Equifax integration, OmniScript flows, Unified Catalog, Compliant Data Sharing for stage-based access.

## Primary objects

`Financial Account`, `Financial Account Party`, `Party Financial Asset`, `Party Financial Asset Additional Owner`, `Financial Account Party Financial Asset`, `Asset Title`, `Asset Title Party`, plus Stage Definitions / Transitions for CDS.

## Sources

- Journey row 11 in [`JOURNEY_MAP.md`](../../../JOURNEY_MAP.md)
- Admin guide: [`012-manage-vehicle-loans-and-leases.md`](../../guides/admin-guide/012-manage-vehicle-loans-and-leases.md)
- PDF pages: 501-607

## Setup-sequence position

Step 25 — Vehicle and Asset Lending. Requires Stage Management Design User PSL and Compliant Data Sharing pre-configured.

## Related module

[`captive-finance/`](../captive-finance/README.md) — the post-origination servicing side.
