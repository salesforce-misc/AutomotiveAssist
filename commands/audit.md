---
description: Run validation rules against the connected Automotive Cloud org
---

# Audit Automotive Cloud Org

Run the validation framework against the connected org.

$ARGUMENTS

## Steps

1. If a validation group was provided in arguments → run `audit_auto_config <group>`.
2. If no group → call `list_validation_groups` and offer **only the groups it returns**. Today that's just `pre-deployment` (PSLs, record types, layouts, admin toggles). Groups such as `mobile-login-check`, `connected-services-check`, `lending-check` and `inventory-check` are planned but have no rules yet.
3. Render results: ✓ passed / ✗ failed / ⚠ warning / ⊘ skipped. For each failure, show the rule and its remediation step. For each skipped rule, show the reason (unsupported check type, or the check couldn't run) and tell the user to verify it manually. A skip is not a pass.
4. Suggest follow-up commands (`/auto:configure-*`) for failed checks.
