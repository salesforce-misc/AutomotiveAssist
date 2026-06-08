# Warranties & Claims

Warranty Lifecycle Management (terms, code sets, fault/labor codes, asset warranties) → Claims Management Foundation (adjudication) → Warranty Supplier Recovery (recover from suppliers via Contracts and Sales Contract Lines).

## Primary objects

`Warranty Term`, `Product Warranty Term`, `Asset Warranty`, `Warranty Term Coverage`, `Code Set`, `Codeset Relationship`, `Product Fault Code`, `Product Labor Code`, `Claim`, `Claim Item`, `Claim Coverage`, `Claim Coverage Payment Detail`, `Claim Participant`, `Supplier`, `Supplier Product`, `Contract`, `Sales Contract Line`.

## Sources

- Journey row 15 in [`JOURNEY_MAP.md`](../../../JOURNEY_MAP.md)
- Admin guide: [`018-manage-warranties-and-claims-in-automotive-cloud.md`](../../guides/admin-guide/018-manage-warranties-and-claims-in-automotive-cloud.md)
- PDF pages: 770-817

## Setup-sequence position

Steps 26-28 — Warranty Lifecycle Management → Claims Management Foundation → Warranty Supplier Recovery. Strict order: terms exist before claims reference them; claims model exists before supplier recovery.
