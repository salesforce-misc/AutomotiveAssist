---
name: auto-data-migration
description: Guides Automotive Cloud data load and migration — load order (Person Account first), Vehicle Definition before Vehicle, Vehicle before Asset, Asset Title before financial flows, dealer hierarchy and household setup, migration patterns from external systems and competing CRMs. Use when loading initial data, refreshing sandboxes, or migrating from another system.
---

# Automotive Cloud Data Migration

Automotive's data has cross-object dependencies — load in the right order to avoid orphaned records.

## Recommended load order

1. **Users + profiles + permission set assignments** (must exist before owners are referenced).
2. **Account record types and Person Account enable** (irreversible — verify in lower envs first).
3. **Account** (Business Accounts first; dealer hierarchy via Account-Account Relationship).
4. **Contact** (linked to Business Accounts).
5. **Account Contact Relationship** (multi-account contacts).
6. **Person Account** (after Account RTs and Contact OWD set).
7. **Party Relationship Group** (households + dealer groups).
8. **Business Profile** (one per dealer / OEM partner Account).
9. **Internal Organization Unit + Supplier**.
10. **Business Brand + Catalog + Category**.
11. **Vehicle Definition** (the model template — load before any Vehicle).
12. **Product** with record type assignments (Vehicle and Parts).
13. **Vehicle** (refers Vehicle Definition).
14. **Asset** with record type assignments (refers Vehicle for Vehicle RT).
15. **Asset Account Participant + Asset Contact Participant** (multi-stakeholder).
16. **Asset Title + Asset Title Party** (legal ownership).
17. **Lead + Lead Line Item + Lead Preferred Seller**.
18. **Opportunity + Opportunity Product + Opportunity Preferred Seller**.
19. **Financial Account + family** (Balances, Transactions, Fees, Milestones, Statements, Addresses).
20. **Party Financial Asset + Additional Owner + Financial Account Party Financial Asset**.
21. **Inventory** — Product Item, Product Transfer, Serialized Product, Product Request, Shipment.
22. **Warranty stack** — Code Set, Warranty Term, Product Warranty Term, Asset Warranty.
23. **Claims** — Claim, Claim Item, Claim Coverage.
24. **Visit + Action Plan + Generic Visit Task** (and Assessment Indicator Definitions).
25. **Fleet + Fleet Asset + Fleet Participant**.
26. **Sales Agreement + Account Manager Target + Manufacturing Program**.
27. **Rebate Claim + Transaction Journal**.

## Tools

- `sf data import` / `sf data tree` — bulk data loads
- `bulk_create_records` / `bulk_update_records` — JSON-array uploads via the MCP
- Data Loader for very large loads
- MuleSoft for ongoing integrations (telematics, DMS, ERP)
- ETL via Apex Batch for in-org transformations

## Migration from competing systems

| Source | Mapping notes |
|---|---|
| Salesforce Sales/Service Cloud | Standard objects map directly; layer Auto-specific objects on top |
| Manufacturing Cloud | Sales Agreement, Account Manager Target, Manufacturing Program already present; supplier recovery objects shared |
| External DMS (CDK, Reynolds, Dealertrack) | Stream via MuleSoft / Heroku Connect; map to Vehicle, Asset, Account, Lead |
| Custom-built dealer portals | Replace with Experience Cloud Automotive template |

## Common pitfalls

- Loading Vehicle before Vehicle Definition → orphaned Vehicle records.
- Loading Asset before record types are configured → all assets land on the default RT.
- Loading Financial Account before Asset Title → Party Financial Asset can't link.
- Skipping `Update Vehicle Searchable Field Values` DPE after loading vehicles → vehicle inventory search returns empty.
- Loading Person Accounts in production before testing in sandbox → irreversible toggle in production!
