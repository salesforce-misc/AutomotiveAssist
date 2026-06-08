---
description: Export Automotive Cloud configuration as JSON
---

# Export Config

Snapshot the connected Automotive Cloud org's configuration to a JSON file.

$ARGUMENTS

## Steps

1. Call `export_config` and write to the user-specified path (or `./auto-config-export.json` by default).
2. Includes:
   - Admin Console settings
   - DB Schema (mobile)
   - Trigger handler active states
   - Quick Actions / Custom Actions
   - PSL assignments per profile
   - Record types per object
3. Render the file path and a brief summary of what was exported.
