---
description: Run a comprehensive Automotive Cloud org health check
---

# Health Check

Run the Automotive Cloud org health check using the generic org tools.

## Steps

1. Call `audit_auto_config` with group `pre-deployment` and keep its pass / fail / skip results.
2. PSL capacity and assignments: call `list_permission_sets`. Flag Automotive PSLs with `UsedLicenses` at or near `TotalLicenses`, and PSLs that should exist but are missing.
3. Toggles:
   - **Person Accounts**: `describe_sobject Account`. If there is an `IsPersonAccount` field, it's enabled.
   - **Lightning Knowledge**: `describe_sobject Knowledge__kav`. If the call succeeds, it's enabled.
   - **Timeline**: no tool can read this. Ask the user to check Setup.
4. OWD vs. the recommended baseline: `run_soql` with
   `SELECT QualifiedApiName, InternalSharingModel, ExternalSharingModel FROM EntityDefinition WHERE QualifiedApiName IN ('Account','Contact','Asset','Lead','Opportunity')`.
   Compare against the `auto-user-management` skill. For example, Asset should be Internal Public Read/Write and External Private, because Vehicle inherits Asset sharing.
5. Territory model: `run_soql` `SELECT Name, State FROM Territory2Model WHERE State = 'Active'`. An `INVALID_TYPE` error means Enterprise Territory Management is off.
6. Highlight blocking issues (failed `error` rules, missing toggles) separately from warnings. List every check that was skipped or couldn't run, with its reason.
7. Suggest the next 3 commands the user should run (`/auto:configure-*`).
