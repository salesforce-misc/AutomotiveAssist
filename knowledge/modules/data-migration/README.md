# Data Migration

Strict load order:

1. Person Accounts must be enabled (irreversible) before customer data load.
2. Account hierarchy + dealer groups → households first.
3. Vehicles → assets → titles → financial accounts.
4. Leads / opportunities last.

## Primary tools

`sf data import`, `sf data tree`, MuleSoft ETL, Data Loader.

## Sources

- Journey row 23 in [`JOURNEY_MAP.md`](../../../JOURNEY_MAP.md)
- Admin guide coverage lives in the setup chapter [`004-set-up-and-configure-automotive-cloud.md`](../../guides/admin-guide/004-set-up-and-configure-automotive-cloud.md)

## Lineage note

Field Service Inventory model is the upstream source of the inventory objects (Product Item, Product Transfer, etc.) — respect that lineage when migrating inventory data.
