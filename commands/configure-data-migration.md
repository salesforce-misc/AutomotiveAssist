---
description: Wizard — plan and validate data migration order for Automotive Cloud
---

# Configure Data Migration

Interactive wizard for the data load journey. Order matters.

## Steps

1. Walk through the 27-step load order (see `auto-data-migration` skill).
2. Highlight irreversible toggles (Person Accounts, Lightning Knowledge, Timeline) — must be tested in sandbox before production.
3. For each phase:
   - Confirm the source format (CSV, sf data tree, MuleSoft).
   - Identify which `External Id` fields will key cross-object references.
   - Recommend the right tool: `bulk_create_records`, `sf data import`, Data Loader, or MuleSoft.
4. After Vehicle load → recommend running the **Update Vehicle Searchable Field Values** DPE.
5. After all loads → run `health_check` and `audit_auto_config pre-deployment`.
