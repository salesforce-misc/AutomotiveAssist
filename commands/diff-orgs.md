---
description: Compare configuration between two connected Automotive Cloud orgs
---

# Diff Orgs

Compare configuration across two orgs to surface drift.

$ARGUMENTS

## Steps

1. Ask the user for the source and target org aliases (or accept them in arguments).
2. Call `diff_orgs <source> <target>` to compare:
   - Trigger handler active states
   - Admin Console settings
   - PSL assignments per profile
   - Page layout differences (per object)
   - Record type differences
3. Render a side-by-side diff with `+` for added, `-` for removed, `~` for changed.
4. Recommend `/auto:export-config` from source + `/auto:import-config` to target if the user wants to sync.
