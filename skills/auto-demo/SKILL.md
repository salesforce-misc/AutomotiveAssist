---
name: auto-demo
description: End-to-end demo and QA run of the plugin. Creates a fresh Automotive Cloud scratch org, shows that nothing is configured, then runs the basic setup features one by one and opens the org after each one. Only run when the user invokes it.
argument-hint: "[qa] [dev-hub-alias]"
disable-model-invocation: true
---

# Automotive Cloud demo + QA run

$ARGUMENTS

This run is a live demo and a QA pass over the plugin's tools and commands. Every step has a **Pass when** check.
Record each result as you go; the final reply is the QA table (step 8).

- **Paths.** `SKILL_DIR` is the base directory shown when this skill loaded. `PROJECT` is `SKILL_DIR/project`, a small sfdx
  project holding the scratch-org definition and the metadata for each step. The plugin root is `SKILL_DIR/../..`. "Follow
  `commands/x.md`" means read that file under the plugin root and run its steps as written, because that's what is being tested.
- **Modes.** By default, after each "Open" pause with `AskUserQuestion` ("Continue to step N: …?") so the presenter can show the org.
  If the arguments contain `qa`, don't pause.
- **Failures.** Show the exact error, mark the step `FAIL`, and mark the steps that depend on it `BLOCKED`. In demo mode, ask
  whether to continue. In `qa` mode, carry on with any step that isn't blocked.
- **Opening the org.** Use the `open_org` tool with the path given. It opens the system browser through `sf org open`.
- Run every `sf` command from `PROJECT` and pass `--json`.

## 1. Create the scratch org

1. Run `check_auto_setup`. If the CLI or the MCP server isn't ready, stop and tell the user to run `/auto:setup-plugin`.
2. Dev Hub: use the alias from the arguments. Otherwise use `sf config get target-dev-hub`. If neither gives one, list the
   Dev Hubs with `sf org list` and ask the user once.
3. Alias: `auto-demo`. If an org with that alias already exists, ask whether to reuse it (the baseline in step 2 won't be clean) or
   use `auto-demo-2`, `auto-demo-3`, and so on.
4. `sf org create scratch -f config/auto-demo-scratch-def.json -a <alias> -v <devhub> -d 1 -w 15 --json`.
   The definition grants the `IndustriesAutomotive` license and Person Accounts but turns on **no** Automotive settings.
5. `set_target_org <alias>`, then get the admin user Id with `run_soql`
   `SELECT Id, Username FROM User WHERE Username = '<username from step 4>'`.

**Pass when** the create result has status 0 and `run_soql` `SELECT IsSandbox, OrganizationType FROM Organization` answers from the new org.

## 2. Baseline: nothing is configured

1. Follow `commands/status.md`. Save the dashboard as the **baseline**.
2. `describe_sobject Vehicle` and `describe_sobject VehicleDefinition`. Note whether each call returns `INVALID_TYPE`.
3. Open `/lightning/setup/SetupOneHome/home`. Tell the presenter to Quick Find **Automotive Settings** and show that the toggle is off.

**Pass when** the status dashboard renders. Note it as a finding if Automotive objects are already enabled before step 3, because the
story changes. It's not a failure.

## 3. Enable Automotive Cloud

1. QA probe: call `deploy_metadata` with `sourceDir: "<PROJECT>/demo/enable-automotive"` and `dryRun: true`. Record whether it works.
   It runs `sf` from the MCP server's working directory, which usually isn't an sfdx project. That makes it a known risk.
2. Deploy for real from `PROJECT`: `sf project deploy start -d demo/enable-automotive -o <alias> -w 30 --json`
   (`IndustriesAutomotiveSettings.enableAutomotiveCloud = true`).
3. Repeat the two `describe_sobject` calls from step 2.
4. Open `/lightning/o/Vehicle/list`. If Vehicle still doesn't describe, open Setup home again instead.

**Pass when** the deploy succeeds and `describe_sobject Vehicle` works.

## 4. Permissions (Automotive Foundation User)

1. `list_permission_sets`. Find the Automotive Foundation permission set and check its PSL capacity.
2. `assign_permission_set` with that permission set and the admin user Id. Name any other Automotive permission sets you see, but
   don't assign them; the demo stays small.
3. Verify with `run_soql`
   `SELECT PermissionSet.Name FROM PermissionSetAssignment WHERE AssigneeId = '<admin Id>' AND PermissionSet.IsOwnedByProfile = false`.
4. Open `/lightning/setup/PermSets/home`.

**Pass when** the Foundation permission set shows up in the verification query.

## 5. Mandatory record types (Product + Asset → Vehicle / Parts)

This is `commands/configure-record-types.md` steps 1–4 without the page layouts.

1. `sf project deploy start -d demo/record-types -o <alias> -w 30 --json`. This deploys the four record types and makes them visible
   to the System Administrator profile, with Vehicle as the default.
2. Verify with `run_soql`
   `SELECT SobjectType, DeveloperName, IsActive FROM RecordType WHERE SobjectType IN ('Product2','Asset')`.
3. Open `/lightning/setup/ObjectManager/Product2/RecordTypes/view`, then `/lightning/setup/ObjectManager/Asset/RecordTypes/view`.

**Pass when** all four record types come back active.

## 6. Test data

1. Follow `commands/scaffold-test-data.md` with the `default` profile. Step 1 of that command (the sandbox check) has to pass, because
   scratch orgs report `IsSandbox = true`. Create Asset with the `Vehicle` record type.
2. Keep the Ids it returns, and the list of objects it skipped as not enabled.
3. Open the new Vehicle at `/lightning/r/Vehicle/<Id>/view` (or the Asset, if Vehicle was skipped).

**Pass when** a Person Account, VehicleDefinition, Asset (Vehicle record type) and Vehicle are created. Skipped objects are expected,
because their features are off. List them, but they don't fail the step.

## 7. Health check: before vs. after

1. Follow `commands/health-check.md`, then follow `commands/status.md` again.
2. Show a short before/after table against the baseline from step 2 (objects enabled, record counts, permission sets).
3. Open `/lightning/page/home`.

**Pass when** both commands run to the end. Every check they couldn't run should be listed with its reason.

## 8. QA report and teardown

Reply with one table:

| # | Step | Plugin piece tested | Result | Notes |
|---|------|---------------------|--------|-------|

Results are `PASS`, `FAIL`, `BLOCKED` or `SKIP`. Put the exact error in Notes for every `FAIL`. Include the `deploy_metadata`
probe from step 3. After the table, list findings: anything in a command file that was wrong, unclear or had to be worked around.

Then ask whether to delete the scratch org. Run `sf org delete scratch -o <alias> -p --json` only if the user says yes. If they
keep it, tell them it expires in 1 day.
