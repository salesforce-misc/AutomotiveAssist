---
description: Wizard — create Product (Vehicle / Parts) and Asset (Vehicle / Parts) record types
---

# Configure Record Types

Mandatory record-type splits for Automotive Cloud.

## Steps

1. **Product** record types:
   - Vehicle
   - Parts
   - Per-RT page layouts with the right field set (see `auto-product-management`).
2. **Asset** record types:
   - Vehicle
   - Parts
   - Per-RT page layouts with the right field set (see `auto-vehicle-asset-fleet`).
3. Make each record type available to the relevant profiles.
4. Configure default record type per profile.
5. Use `retrieve_metadata` / `deploy_metadata` for batch operations. Write the source inside an sfdx project (a folder with
   `sfdx-project.json`, source under `force-app/main/default/`). If the user isn't in one, create a temporary project. Run
   `deploy_metadata` with `dryRun: true` first.
