---
description: Wizard — configure permission set licenses, profiles, and OWD recommendations for Automotive Cloud
---

# Configure Permissions

Interactive wizard to provision PSLs, clone profiles, and verify OWD against the recommended baseline.

## Steps

1. Run `check_user_config` to assess current state.
2. List available PSLs via `list_permission_sets` (highlight capacity).
3. Ask which personas the user wants to provision: internal vs external; OEM vs dealer; SDET test users.
4. Per persona, recommend the PSL stack (see `auto-user-management` skill).
5. Use `assign_permission_set` to apply.
6. Compare current OWD model to the recommended baseline (PDF p. 59-62). Flag gaps.
7. For Person Accounts toggle: confirm OWD prerequisite (Contact = Controlled By Parent OR both Account/Contact = Private) before recommending the support ticket.
