---
name: auto-demo
description: End-to-end demo and QA run of the plugin. Creates a fresh scratch org, shows that Automotive Cloud isn't configured, then runs the plugin's basic /auto commands one by one and opens the org after each one. Only run when the user invokes it.
argument-hint: "[qa] [dev-hub-alias]"
disable-model-invocation: true
---

# Automotive Cloud demo + QA run

$ARGUMENTS

This run is a live demo and a QA pass over the plugin's own commands. Every step runs one or more `/auto:*` commands and has a
**Pass when** check. Record each result as you go; the final reply is the QA table (step 9).

- **Commands only.** "Run `/auto:x`" means read `commands/x.md` under the plugin root (`SKILL_DIR/../..`, where `SKILL_DIR` is the
  base directory shown when this skill loaded) and follow its steps as written. Don't add metadata, settings or tools the command
  doesn't name. If a command can't do its job as written, that's a QA finding: record it and don't work around it.
- **Wizards.** For questions a command would ask the user, use the demo answers: internal SDET persona, the scratch-org admin
  user, and the `default` test-data profile. Say which answer you used.
- **Modes.** By default, pause with `AskUserQuestion` ("Continue to step N: …?") after each "Open" so the presenter can show the org.
  If the arguments contain `qa`, only pause in step 3, which needs a person.
- **Failures.** Show the exact error, mark the step `FAIL`, and mark the steps that depend on it `BLOCKED`. In demo mode, ask
  whether to continue. In `qa` mode, carry on with any step that isn't blocked.
- **Opening the org.** "Open X" means run `/auto:open-org X`.

## 1. Create the scratch org

1. Run `/auto:setup-plugin`. If the CLI or the MCP server isn't ready, stop.
2. Scratch-org definition: `SKILL_DIR/scratch-def.json`. If the file doesn't exist, stop and ask the user for their
   Automotive Cloud scratch-org definition file. Don't write one yourself.
3. Dev Hub: use the alias from the arguments. Otherwise use `sf config get target-dev-hub --json`. If neither gives one, list the
   Dev Hubs with `sf org list --json` and ask the user once.
4. Alias: `auto-demo`. If an org with that alias already exists, ask whether to reuse it (the baseline in step 2 won't be clean) or
   use `auto-demo-2`, `auto-demo-3`, and so on.
5. `sf org create scratch --definition-file <scratch-def.json> --alias <alias> --target-dev-hub <devhub> --duration-days 1 --wait 15 --json`,
   then `set_target_org <alias>`. Use the long flags: `-d` is `--set-default`, not the duration. The CLI may warn that the
   Automotive feature names are invalid input; its local schema doesn't know them, and the org still gets them.

**Pass when** the create result has status 0 and `/auto:setup-plugin` shows the new org as the target.

## 2. Baseline: nothing is configured

1. Run `/auto:status`. Save the dashboard as the **baseline**.
2. Open `/lightning/setup/SetupOneHome/home`. Tell the presenter to Quick Find **Automotive Settings** and show that it's off.

**Pass when** the dashboard renders and its Automotive objects show as "not enabled". If they're already enabled, record a
finding; the story changes, but the step still passes.

## 3. Enable Automotive Cloud (presenter)

No command turns this on. The presenter does it by hand.

1. Open `/lightning/setup/SetupOneHome/home`. Ask the presenter to enable Automotive Cloud in **Setup → Automotive Settings**.
   Pause until they confirm, in `qa` mode too.
2. Run `/auto:status` again.

**Pass when** Vehicle and VehicleDefinition no longer show as "not enabled". If they still do, the toggle usually didn't save,
or it was changed in another org: ask the presenter to check the org's username and retry once before marking it `FAIL`.

## 4. Permissions

1. Run `/auto:configure-permissions`. Provision the admin user with the Automotive Foundation User permission set it recommends.
2. Open `/lightning/setup/PermSets/home`.

**Pass when** the command's assignment succeeds and a second `list_permission_sets` shows the assignment.

## 5. Mandatory record types (Product + Asset → Vehicle / Parts)

1. Run `/auto:configure-record-types`.
2. Open `/lightning/setup/ObjectManager/Product2/RecordTypes/view`, then `/lightning/setup/ObjectManager/Asset/RecordTypes/view`.

**Pass when** `run_soql` `SELECT SobjectType, DeveloperName, IsActive FROM RecordType WHERE SobjectType IN ('Product2','Asset')`
returns all four record types as active.

## 5b. Person Accounts

1. Run `/auto:configure-person-accounts`. The bundled scratch definition has the `PersonAccounts` feature, so the command should
   only verify. If they're off (a custom definition file), it creates `Business_Account`, and enabling then means a new scratch
   org: record a finding and carry on with a business-Account customer. This is a scratch org the presenter asked for, so
   don't ask before enabling.
2. Open `/lightning/setup/ObjectManager/Account/RecordTypes/view`.

**Pass when** Account has an `IsPersonAccount` field and active `Business_Account` and `PersonAccount` record types.

## 6. Test data

1. Run `/auto:scaffold-test-data` with the `default` profile.
2. Open the new Vehicle at `/lightning/r/Vehicle/<Id>/view` (or the Asset, if Vehicle was skipped).

**Pass when** the command returns created Ids for at least a Person Account customer (a business Account + Contact if step 5b
failed), VehicleDefinition, Asset and Vehicle. Objects it skips as not enabled are expected. List them, but they don't fail
the step.

## 7. Audit

1. Run `/auto:audit pre-deployment`.

**Pass when** the audit runs to the end and `account-record-types-exist` passes. Report its pass / fail / skip counts.

## 8. Health check: before vs. after

1. Run `/auto:health-check`, then `/auto:status`.
2. Show a short before/after table against the baseline from step 2 (objects enabled, record counts, permission sets).
3. Open `/lightning/page/home`.

**Pass when** both commands run to the end. Every check they couldn't run should be listed with its reason.

## 9. QA report and teardown

Reply with one table:

| # | Step | Commands run | Result | Notes |
|---|------|--------------|--------|-------|

Results are `PASS`, `FAIL`, `BLOCKED` or `SKIP`. Put the exact error in Notes for every `FAIL`. After the table, list the findings
per command file: anything that was wrong, unclear, or that the command couldn't do as written.

Then ask whether to delete the scratch org. Run `sf org delete scratch -o <alias> -p --json` only if the user says yes. If they
keep it, tell them it expires in 1 day.
