---
description: Run validation rules against the connected Automotive Cloud org
---

# Audit Automotive Cloud Org

Run the validation framework against the connected org.

$ARGUMENTS

## Steps

1. If a validation group was provided in arguments → run `audit_auto_config <group>`.
2. If no group → call `list_validation_groups` and ask which to run. Standard groups:
   - `pre-deployment` — PSLs, profile assignments, page layouts, OWD, irreversible toggles.
   - `mobile-login-check` — Partner Visits app + DB Schema validations.
   - `connected-services-check` — Service Process Studio + AEO + Vehicle Connected Services.
   - `lending-check` — Compliant Data Sharing + Stage Definitions + lending PSLs.
   - `inventory-check` — Vehicle Searchable Field DPE + Criteria-Based Search.
3. Render results: ✓ passed / ✗ failed / ⚠ warning. For each failure, show the rule + the remediation step.
4. Suggest follow-up commands (`/auto:configure-*`) for failed checks.
