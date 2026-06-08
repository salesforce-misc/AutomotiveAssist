---
description: Import Automotive Cloud configuration from a JSON export (preview by default)
---

# Import Config

Apply a previously exported JSON config to the connected target org.

$ARGUMENTS

## Steps

1. Confirm the user wants to apply config to the **currently connected target org** (verify alias).
2. Call `import_config <path>` with `--preview` first → render the diff.
3. Confirm changes with the user before applying.
4. Re-run with `--apply` after confirmation.
5. Run `/auto:health-check` after import to confirm successful application.
