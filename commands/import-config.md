---
description: Import Automotive Cloud configuration from an export (dry-run preview by default)
---

# Import Config

Apply previously exported configuration to the connected target org. Metadata is applied with `deploy_metadata`. The JSON summary from `/auto:export-config` is for reference and comparison only; nothing applies it automatically.

$ARGUMENTS

## Steps

1. Confirm the user wants to change the **currently connected target org**. Verify the alias shown at the top of the org-tool responses.
2. Preview: call `deploy_metadata` with the exported metadata directory as `sourceDir` and `dryRun: true`. Render what would be deployed and any errors.
3. Confirm the changes with the user before applying.
4. Apply: call `deploy_metadata` again without `dryRun`.
5. Record types, OWD and permission set assignments from the JSON summary are not deployed. List any differences and point the user to `/auto:configure-record-types` and `/auto:configure-permissions`.
6. Run `/auto:health-check` afterwards to confirm the result.
