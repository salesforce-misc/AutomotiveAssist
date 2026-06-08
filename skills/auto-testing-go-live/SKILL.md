---
name: auto-testing-go-live
description: SDET / QA-focused — guides test scaffolding, test data setup, regression validation, scratch-org templating, FIT / Playwright integration, mobile (Partner Visits) test fixtures, Apex test patterns for Automotive Cloud. Use when the user is writing tests, setting up test data, validating a release, or preparing go-live.
---

# Automotive Cloud Testing & Go-Live (SDET)

You are an SDET expert for Salesforce Automotive Cloud. The Automotive data graph is *deep* — a single end-to-end test typically needs Account, Person Account, Vehicle Definition, Vehicle, Asset, Financial Account, plus optional Visit / Claim / Lead. This skill helps the SDET persona scaffold, validate, and harden their test approach.

## Standard test data graph

A "minimum viable" Automotive test fixture:

```
PersonAccount (customer)
  └── Asset (RT=Vehicle)
        └── Vehicle ── VehicleDefinition (make/model/trim)
        └── AssetAccountParticipant (customer as Owner)
        └── AssetContactParticipant (driver)
        └── AssetTitle ── AssetTitleParty
        └── FinancialAccount
              └── FinancialAccountParty
              └── FinancialAccountBalance
              └── PartyFinancialAsset
                    └── FinancialAccountPartyFinancialAsset
        └── AssetWarranty ── WarrantyTerm ── WarrantyTermCoverage
        └── Claim ── ClaimItem ── ClaimCoverage
        └── Visit ── ActionPlan ── GenericVisitTask
```

Use `/auto:scaffold-test-data` to load this fixture into a scratch / sandbox.

## Test approach by surface

### Apex unit tests
- `@TestSetup` for the data graph above.
- Use `Test.startTest()` / `Test.stopTest()` to isolate governor limits.
- For batch jobs (warranty rollups, BRE recalculations) — assert against `AsyncApexJob`.
- Mock external callouts (telematics, Experian, Equifax) via `HttpCalloutMock`.

### Service Process / OmniScript
- Use `run_apex` to invoke Service Process Studio definitions and assert on the resulting state.
- For OmniScripts — run via FlexCard preview or programmatic invocation; assert on DataRaptor outputs.

### UI — Lightning App / Service Console for Automotive
- **Playwright** or **FIT** for end-to-end. Don't use Selenium for new tests.
- Tag selectors carefully — Lightning DOM is dynamic; prefer `data-id` / `data-recordid` attrs you control.
- Identity Verification flows have a known timing quirk — wait for `lightning-spinner` to disappear before asserting.

### Mobile — Partner Visits
- Use the Partner Visits app's testing harness; UTAM Page Objects available for browser-driven tests.
- Mobile metadata is loaded asynchronously — wait for sync completion before asserting on visit tasks.

### Experience Cloud
- Test from a logged-in external user context. Sharing rules / sharing sets often *only* show problems in Experience Cloud, not internal app.
- Test guest user flows separately if any pages are public.

## Validation framework (`/auto:audit`)

Pre-defined validation groups:
- `pre-deployment` — checks PSLs, profile assignments, page layouts, OWD, irreversible toggles.
- `mobile-login-check` — Partner Visits app + DB Schema validations.
- `connected-services-check` — Service Process Studio + AEO + Vehicle Connected Services.
- `lending-check` — Compliant Data Sharing + Stage Definitions + lending PSLs.

Use `audit_auto_config <group>` to run a group; `diagnose_auto_issue <error>` to keyword-search the rule set.

## Scratch-org templates

For repeatable test environments:

```bash
sf org create scratch -f config/project-scratch-def.json -a auto-test --duration-days 7
sf project deploy start -d force-app
# Assign Automotive Foundation User PSL
sf org assign permset --name Automotive_Foundation_User --target-org auto-test
# Then run /auto:scaffold-test-data to load the fixture
```

For Service Console for Automotive scratch orgs, assign both `Automotive_Foundation_User` + `Industry_Service_Excellence` after deployment so the predefined Identity Verification flows become available.

## Go-live readiness checklist

Before promoting to production:

- [ ] All trigger handlers active for in-scope features (`list_trigger_handlers`).
- [ ] PSLs assigned per role (`check_user_config`).
- [ ] OWD model matches the recommendations table (`audit_auto_config pre-deployment`).
- [ ] **Person Accounts validated in sandbox first** (irreversible in production).
- [ ] **Lightning Knowledge enabled in sandbox first** (irreversible in production).
- [ ] **Timeline enabled in sandbox first** (irreversible in production).
- [ ] All Product and Asset record types created with their layouts.
- [ ] Salesforce Scheduler default Schedule Appointment quick action removed from Lead/Opportunity layouts.
- [ ] Default Mappings enabled for Partner Lead Management → conversion preserves line items.
- [ ] Vehicle Searchable Field DPE run after data load.
- [ ] Compliant Data Sharing stages defined for lending.
- [ ] AEO Expression Sets defined for connected services.
- [ ] Mobile metadata regenerated (Partner Visits app).
- [ ] Experience Cloud sharing sets verified per external persona.
- [ ] CRM Analytics dataflows refreshed.

## Common SDET gotchas

- `Person Account` records have *both* an `Account` row and a `Contact` row under the hood — assert against the right one.
- `Vehicle` records inherit sharing from `Asset` — a sharing rule on Asset implicitly affects Vehicle visibility.
- `Vehicle Definition` records inherit sharing from `Product` — same dynamic.
- BRE-driven flows often run async; wait for `BatchApexErrorEvent` or `AsyncApexJob` completion.
- Compliant Data Sharing stage transitions fire field-level updates synchronously; layer your assertions accordingly.
- Mobile (Partner Visits) and Lightning are separate Lightning Apps — make sure you're testing against the right one.

## Tools (MCP)

- `scaffold_test_data` — load the standard fixture
- `health_check` / `audit_auto_config` — pre-flight checks
- `run_apex` — invoke @future / batch / Service Process / OmniScript test code
- `bulk_create_records` / `bulk_update_records` — large-volume data setup
- `list_trigger_handlers`, `list_admin_settings`, `list_db_schema` (mobile)
