# Automotive Cloud — Automotive Foundation Journeys

> **Agent:** `auto-sdet-architect`
> **Scope:** Automotive Foundation — the cross-cutting baseline every persona depends on.
> **Maps to:** `JOURNEY_MAP.md` Part 2 steps 1–11 (PSLs → Profiles → Person Accounts → Account RTs → Contact → ACR → AAR → CCR/PRR → Party Relationship Group → Business Profile/IOU/Supplier → Product Record Types).
> **Connected org:** `autodemoNag` is **READ-ONLY** for this project. No inserts/updates/deletes/deploys/anonymous Apex against any connected org. SOQL/describes/metadata reads only.
> **Author:** auto-sdet-architect · **Last revised:** 2026-06-05.

---

## 0. Scope assumptions

The user asked for "Automotive Foundation" with no further qualifiers. Treating Foundation as the gating layer underneath all 26 journey-map modules. The following assumptions apply unless the sponsor overrides:

- A1. **Both OEM and Dealer flavors are in scope.** Foundation must support all 11 Salesforce-defined personas (`PERSONA_JOURNEYS.md`).
- A2. **Person Accounts WILL be enabled** — every customer journey downstream assumes it. Treated as in-scope-but-irreversible. Sandbox-first gate is mandatory.
- A3. **Knowledge and Timeline are NOT enabled at the Foundation tier.** They surface in §13 Service Console (Knowledge) and §11/§37 Captive Finance (Timeline). Foundation must verify they are *flippable* (i.e., not blocked by missing OWD/PSL prerequisites) but does not flip them.
- A4. **ARC is in scope only minimally** — Foundation must not author any ARC graph definitions. ARC Relationship Graph component placement is deferred to step 43 after every relationship object exists.
- A5. **No Experience Cloud external users at Foundation.** Internal users only at this tier.
- A6. **Org is read-only.** All "validation checks" are read-only (`run_soql`, `describe_sobject`, `list_admin_settings`, `list_permission_sets`, `retrieve_metadata`, `health_check`). Any write is handed off to `auto-sdet` running against a non-read-only sandbox.

---

## 1. Requirement Validation Report

```
Feature: Automotive Cloud — Automotive Foundation (cross-cutting baseline)
Sponsor / Persona: Implementation team (auto-consultant + auto-admin); gates all 11 Salesforce-defined business personas
Modules touched: §1 Org & License Setup, §2 Permissions & Access, §3 Data Model, §5 App & Page Layouts (foundation slice only),
                 §6 Stakeholders & Households, §7 Product & Vehicle Definition (record-type slice only)
                 — i.e., JOURNEY_MAP Part 2 steps 1–11
Irreversibility flags: 🔒 Person Accounts (in scope, sandbox-first gate)
                       🔒 Lightning Knowledge (out of scope at Foundation; verify flippable only)
                       🔒 Timeline (out of scope at Foundation; verify flippable only)
                       🔒 V&A Finance Additional Components (out of scope; depends on Timeline)
Cross-cloud deps: Sales Cloud (Account/Contact/Lead/Opportunity baseline), Service Cloud (Case baseline) — present by license,
                  no integration wiring at Foundation tier.

Gaps & Ambiguities
- [G1] OEM-vs-Dealer split for Account Record Types — sponsor has not specified whether dealer-group RTs are
       Foundation or deferred to §32 Partner Performance Mgmt. Default: include `Business Account` + `Person Account` only;
       any Dealer / Household / Supplier RT additions are flagged as "next-tier" and called out in step 4.
- [G2] OWD baseline for Contact — Foundation requires `Controlled By Parent` OR both Account & Contact `Private`
       so the Person Accounts toggle is not greyed out. Sponsor has not declared a preference. Default: `Controlled By Parent`.
- [G3] No acceptance criteria provided per persona. The Transaction User Journey below provides representative flows;
       full per-persona AC must be authored before scenario expansion.
- [G4] PSL capacity — Foundation assumes the org has enough `Automotive Foundation User` PSL seats for the test population.
       SDET must confirm via read-only `list_permission_sets` before scaling test users.
- [G5] Group Membership PSL is named in step 9 but its companion `Group Membership Settings` admin toggle has no
       sponsor-confirmed enable date. Default: enable in step 9.

Dependency Violations vs. JOURNEY_MAP
- [D1] None known. Configuration Journey strictly mirrors Part 2 steps 1–11.
       Reminder: Person Accounts (step 3) cannot be flipped until Contact OWD (step 5) is `Controlled By Parent` OR both Private.
       JOURNEY_MAP lists Contact at step 5, but the OWD prerequisite is enforced *before* the Person Accounts toggle in Setup.
       This is a Setup-UI ordering nuance, not a model violation. Steps 4 (Account RTs) and 5 (Contact OWD) execute logically
       before step 3 (Person Accounts toggle) even though JOURNEY_MAP lists 3 first. We honour Part 2 numbering and call
       out the inversion explicitly in the Configuration Journey.

Risks
- [R1] 🔒 Person Accounts is irreversible — must be validated in a throwaway sandbox before prod-like.
- [R2] OWD downgrades (e.g., Contact → Private later) require manual sharing rule re-creation; Foundation should
       lock the OWD baseline before any module-specific OWD overlays.
- [R3] Forgetting Group Membership PSL on a user breaks the Party Relationship Group page → silent UX failure.
- [R4] Profiles ship none — every cloned profile must mark Automotive / Service Console for Automotive / Partner Visits /
       Warranty Lifecycle Management apps as Visible. Easy to miss.
- [R5] Mandatory record-type splits — Product (Vehicle / Parts) is required at Foundation step 11. Asset (Vehicle / Parts)
       follows in step 13 (out of Foundation scope) but Foundation must not block the future Asset RT split.
- [R6] Read-only org constraint: Foundation cannot be *executed* by the SDET-architect. The plan/journey is the deliverable;
       execution is handed to `auto-sdet` against a non-read-only sandbox.

Open Questions for Product
- [Q1] Confirm dealer / household / supplier Account record types: Foundation or deferred?
- [Q2] Confirm Contact OWD baseline: `Controlled By Parent` (recommended) vs both Private?
- [Q3] Is `Automotive Foundation for Experience Cloud` PSL in scope at Foundation tier or deferred to §19 Experience Cloud?
- [Q4] What is the sandbox-first validation cadence for the 🔒 Person Accounts toggle (one sandbox? scratch-org template?)
- [Q5] Foundation does not configure Asset record types — confirm SDET tier accepts that the Vehicle/Parts Asset split
       is owned by the next tier (`auto-vehicle-asset-fleet` / step 13).
```

---

## 2. Setup Journey

### 2a. Configuration Journey

Steps mirror `JOURNEY_MAP.md` Part 2 numbering 1–11. Each step lists: **Step name · Plugin skill / `/auto:` command · Object/setting · Owner persona · Validation check (read-only) · Irreversibility flag**.

| # | Step | Plugin surface | Object / setting | Owner persona | Validation check (read-only) | Irrev. |
|---|---|---|---|---|---|:---:|
| 1 | **Permission Set Licenses** — assign mandatory `Automotive Foundation User`. Layer per-feature PSLs only as the downstream module is configured. At Foundation tier ensure: `Automotive Foundation User`, `Group Membership` (for step 9), and (optional) `ARC Access` reserved for step 43. | `auto-user-management` skill · `/auto:configure-permissions` | Permission Set Licenses, Permission Set assignments | `auto-admin` | `list_permission_sets` — confirm seat count per PSL ≥ test population; `run_soql` on `PermissionSetLicenseAssign` to verify assignment. | — |
| 2 | **Profiles** — clone Standard User; grant Read on every Auto object the persona touches; mark **Automotive**, **Service Console for Automotive**, **Partner Visits**, **Warranty Lifecycle Management** apps Visible. Auto ships **no default profiles** — never assume one exists. | `auto-user-management` skill · `/auto:configure-permissions` | Profile (cloned), App Visibility, Object Permissions | `auto-admin` | `retrieve_metadata` Profile — confirm `customApplications` Visible flags; `run_soql` on `Profile` for cloned profile names. | — |
| **OWD pre-gate for step 3** | Set Contact OWD to `Controlled By Parent` (or both Account + Contact = Private) **before** attempting the Person Accounts toggle. UI will grey out the toggle otherwise. | `/auto:configure-permissions` (OWD section) | Sharing Settings → Organization-Wide Defaults | `auto-admin` | `list_admin_settings` → OWD; `describe_sobject Contact` → `controllingFieldName`. | — |
| 3 | 🔒 **Person Accounts** — file support ticket; from Setup → Person Accounts, acknowledge org implications, then enable. **One-way.** Validate in a throwaway sandbox first. | `auto-stakeholder-management` skill · (no command — manual Setup step) | Person Account org-wide enablement | `auto-admin` (with sponsor sign-off) | `describe_sobject Account` → `IsPersonAccount` field present + queryable; `run_soql` `SELECT IsPersonAccount FROM Account LIMIT 1`. | 🔒 |
| 4 | **Account Record Types** — `Business Account` (default) + `Person Account` (default after step 3). Defer dealer / household RTs to module tier unless sponsor confirms otherwise (G1). | `auto-stakeholder-management` skill · `/auto:configure-stakeholders` | RecordType on Account; Page Layout assignments per RT | `auto-admin` | `describe_sobject Account` → `recordTypeInfos`; `retrieve_metadata` RecordType for layout assignments. | — |
| 5 | **Contact** — page layout tweaks (Controlled By Parent recommended; G2). Confirm `Person Contact` layout exists post step 3. | `auto-stakeholder-management` skill | Contact page layout, sharing setting | `auto-admin` | `retrieve_metadata` Layout `Contact-*`; `list_admin_settings` OWD Contact = `ControlledByParent`. | — |
| 6 | **Account Contact Relationship (ACR)** — enable multi-account contacts so a customer can sit in multiple households / a salesperson can serve multiple dealers. | `auto-stakeholder-management` skill · `/auto:configure-stakeholders` | `AccountContactRelation` enable, page layout | `auto-admin` | `describe_sobject AccountContactRelation`; `run_soql` count to confirm not blocked by license. | — |
| 7 | **Account Account Relationship (AAR)** — household ↔ preferred dealership; dealer ↔ dealer group. Depends on Account RTs (step 4) + ACR (step 6). | `auto-stakeholder-management` skill · `/auto:configure-stakeholders` | `AccountAccountRelation`, RT-aware page layout | `auto-admin` | `describe_sobject AccountAccountRelation`; OWD = Private (recommended). | — |
| 8 | **Contact Contact Relationship (CCR) + Party Role Relationship (PRR)** — spouse / partner / lawyer / accountant; underlies ARC's relationship graph. | `auto-stakeholder-management` skill · `/auto:configure-stakeholders` | `ContactContactRelation`, `PartyRoleRelation`; reference picklists | `auto-admin` | `describe_sobject ContactContactRelation` + `PartyRoleRelation`; OWD `PartyRoleRelation` = Private. | — |
| 9 | **Party Relationship Group (PRG)** — households + dealer groups + supplier groups. Requires the `Group Membership` PSL (step 1) AND the `Group Membership Settings` admin toggle. | `auto-stakeholder-management` skill | `PartyRelationshipGroup`, `Group Membership Settings` | `auto-admin` | `list_admin_settings` → `GroupMembershipSettings.IsEnabled = true`; `describe_sobject PartyRelationshipGroup`. | — |
| 10 | **Business Profile + Internal Organization Unit + Supplier** — dealer/distributor accounts, internal departments, supplier shells (Supplier surfaces fully in §28 Warranty Supplier Recovery; only the object exists at Foundation). Add picklist values for Business Partner Type, Service Type, Region. | `auto-stakeholder-management` skill (Business Profile section) | `BusinessProfile`, `InternalOrganizationUnit`, `Supplier`; picklists | `auto-admin` | `describe_sobject BusinessProfile` → `BusinessPartnerType`, `ServiceType`, `Region` picklists populated; `run_soql` count of `InternalOrganizationUnit`. | — |
| 11 | **Product Record Types — `Vehicle` + `Parts`** + Product page layouts per RT. **Mandatory split** for the entire Auto data model. Without this, all inventory + vehicle management downstream breaks. | `auto-product-management` skill · `/auto:configure-record-types` · `/auto:configure-page-layouts` | `Product2` RecordType (`Vehicle`, `Parts`); Page Layout per RT | `auto-admin` | `describe_sobject Product2` → `recordTypeInfos` includes `Vehicle` + `Parts`; `retrieve_metadata` Layout `Product2-Vehicle Layout` + `Product2-Parts Layout`. | — |
| **Out-of-scope at Foundation (called out for ordering)** | Asset record types (Vehicle / Parts) — step 13 in JOURNEY_MAP Part 2; owned by `auto-vehicle-asset-fleet`. ARC graph definitions — step 43; owned by `auto-arc`. Lightning Knowledge — step 35; owned by `auto-service-console`. Timeline — step 37; owned by `auto-page-layouts` / `auto-finance-lending`. V&A Finance Additional Components — step 23; depends on Timeline. | — | — | — | Verified flippable only — no enable. | 🔒 each |

**Sandbox-first gate (mandatory):** The 🔒 Person Accounts toggle (step 3) must be exercised first in a throwaway sandbox or scratch org, with a full read-only `health_check` snapshot taken before and after. Only after the post-toggle snapshot passes (Account schema has `IsPersonAccount`, no profile breaks) is the toggle eligible for the prod-like sandbox.

**ARC reminder:** ARC is step 43 — never authored at Foundation. Foundation only ensures `ARC Access` PSL is reservable (step 1) and Account / Vehicle / Contact pages have a sidebar slot for the ARC Relationship Graph component to be added later.

### 2b. Setup Data Journey

Reference data and graphs that **must exist** before any persona-driven transaction can run. **Read-only** here — describe shape & source; do not load. Loading is handed off to `auto-sdet` running against a non-read-only sandbox.

| # | Graph | Shape | Source | Volume tier | Idempotency |
|---|---|---|---|---|---|
| F1 | **Reference picklists** — Business Partner Type, Service Type, Region (Business Profile); Account RT codes; Contact role codes; Party Role codes; Generic Visit Task context types (deferred). | Standard SF picklist values + Auto seed values listed in `auto-stakeholder-management` SKILL p. 46. | Org metadata (no insert needed — picklists are metadata). | n/a | n/a (metadata) |
| F2 | **PSL pool** — `Automotive Foundation User`, `Group Membership`, `ARC Access` (reserved). | Permission Set License records pre-provisioned by Salesforce on org creation. | Org provisioning. | smoke ≥ 5 seats per PSL · regression ≥ 25 · perf ≥ 200 | n/a (license-side) |
| F3 | **Profile inventory** — at minimum: `Auto Internal Admin`, `Auto Internal Standard`, `Auto Internal Sales`, `Auto Internal Service`, `Auto Internal Finance`. All cloned from Standard User. | Cloned profiles. | `auto-admin` clones per spec. | smoke 5 · regression 5 (same set) · perf 5 (with bulk PSA) | Idempotent — profile names are unique. |
| F4 | **Org graph** — 1 Internal Organization Unit (IOU) per business unit; 1 Business Profile per dealer/distributor; placeholder Supplier shell (deferred populate to §28). | `InternalOrganizationUnit`, `BusinessProfile`, `Supplier` records. | `/auto:scaffold-test-data` (handed to `auto-sdet`). | smoke 1 IOU + 1 BP · regression 5 IOU + 25 BP · perf 50 IOU + 500 BP | External keys via `External Reference Number` on Business Profile. |
| F5 | **Stakeholder graph (Foundation slice)** — Person Accounts (drivers/owners), Business Accounts (dealers/OEM divisions), Contacts (employees, dealer staff), ACR (multi-account contacts), AAR (household ↔ dealer), CCR + PRR (spouse, lawyer), PRG (households, dealer groups). | Eight related-object graph keyed on Person Account `Id`. | `/auto:scaffold-test-data` (Foundation slice). Standard SF data tree files (`sf data tree import`) — to be authored by `auto-sdet`. | smoke 5 households of 4 people · regression 50 households · perf 5,000 households | External-id strategy: `Account.PersonExternalId__c` (custom), `Contact.ExternalId__c`, `PartyRelationshipGroup.ExternalId__c`. |
| F6 | **Product Vehicle / Parts seed (RT-anchored)** — at least one `Product2` per RT so downstream Vehicle Definition + Asset can resolve. | `Product2` records with `RecordTypeId` set to the Vehicle or Parts RT. | `/auto:scaffold-test-data` (Foundation slice). | smoke 2 (1 Vehicle, 1 Parts) · regression 20 · perf 2,000 | External id via `Product2.ExternalId`. |
| F7 (deferred — flag-only) | Vehicle Definition, Asset (Vehicle/Parts), Vehicle, Asset Account/Contact Participants, Asset Title, Financial Account, Inventory, Lead/Opp, Warranty/Claims, Visits. | All deferred — owned by next-tier modules. | n/a | n/a | n/a |

**Read-only verification at this tier (SDET-architect's hands-off check before handing to `auto-sdet`):**
- `run_soql` on each foundation object to confirm zero-row baseline or expected seed.
- `describe_sobject` on every Foundation object to confirm fields + RTs.
- `list_admin_settings` to confirm Person Accounts is on, Group Membership Settings is on.

### 2c. Integration Journey

At Foundation tier, **no live external integrations** are wired. Foundation is the substrate every later integration depends on. The journey is to verify the *integration surfaces are reachable but stubbed*.

| # | Integration | Status at Foundation | Stub vs. live | Async wait | Failure injection | Observability hook |
|---|---|---|---|---|---|---|
| I1 | MuleSoft Anypoint (Vehicle Connected Services upstream) | **Stub only** — PSL reservable, no flow wired. | Stub (mock endpoint). | n/a | n/a | Setup Audit Trail — confirm no rogue MuleSoft connected app provisioned. |
| I2 | Actionable Event Orchestration (AEO) | **Out of scope at Foundation** — surfaces in step 30. | n/a | n/a | n/a | Confirm no orchestration definitions exist (`run_soql ActionableEventOrchestration` empty). |
| I3 | Experian / Equifax (lending bureau) | **Out of scope at Foundation** — surfaces in step 25 (V&A Lending). | n/a | n/a | n/a | n/a |
| I4 | Data Cloud (Automotive Data Kit) | **Out of scope at Foundation** — surfaces in step 41. | n/a | n/a | n/a | n/a |
| I5 | CRM Analytics (Analytics for Automotive) | **Out of scope at Foundation** — surfaces in step 42. | n/a | n/a | n/a | n/a |
| I6 | Field Service Inventory model (upstream lineage) | **Verify present in org** — Foundation depends on Asset object/RT availability later. | Present-as-license. | n/a | n/a | `describe_sobject ProductItem` returns schema. |
| I7 | Identity Verification (Service Console) | **Out of scope at Foundation** — surfaces in step 35. | n/a | n/a | n/a | n/a |
| I8 | Document Generation / IDA | **Out of scope at Foundation** — surfaces in §22/§25. | n/a | n/a | n/a | n/a |
| I9 | Experience Cloud sharing sets | **Out of scope at Foundation.** | n/a | n/a | n/a | n/a |
| I10 | Mobile metadata cache (Partner Visits) | **Out of scope at Foundation** — surfaces in step 31. | n/a | n/a | n/a | n/a |
| I11 | **Salesforce platform identity (SSO / IdP)** | **Foundation requirement** — internal users must authenticate before anything works. | Live (org's existing IdP). | n/a | Disabled IdP → user lockout test (sandbox only). | Login History (`run_soql LoginHistory`). |
| I12 | **Setup Audit Trail** | **Foundation requirement** — must be enabled at the org tier so every step 1–11 toggle is auditable. | Live. | n/a | n/a | `SetupAuditTrail` query. |

The integration surface at Foundation is intentionally minimal. Every "out of scope at Foundation" entry is a **handoff line item** to the relevant module SDET when that module's tier is reached.

### 2d. Reporting Journey

What must be observable / auditable post-Foundation, even though full reporting lights up later.

| # | Report / observability artifact | Source object | Refresh cadence | Persona who consumes it | Expected baseline at Foundation |
|---|---|---|---|---|---|
| R1 | **Setup Audit Trail** — every Foundation toggle (Person Accounts, OWD changes, profile clones, PSL assignments, Group Membership Settings, Product RT additions) | `SetupAuditTrail` | Live | `auto-admin`, sponsor | Non-empty after each Configuration Journey step. Every 🔒 toggle leaves a row. |
| R2 | **PSL capacity report** | `PermissionSetLicenseAssign` + `PermissionSetLicense` | On demand | `auto-admin`, `auto-sdet` | `Automotive Foundation User` `UsedLicenses` ≥ test-population count. |
| R3 | **Profile inventory report** | `Profile` | On demand | `auto-admin`, sponsor | All cloned Auto profiles present; default Salesforce profiles unchanged. |
| R4 | **OWD baseline snapshot** | Sharing Settings (via `list_admin_settings`) | On demand | `auto-admin`, sponsor | Contact = `ControlledByParent`; AAR = `Private`; PRR = `Private`; Account = `PublicReadWrite`. |
| R5 | **Person Account flip evidence** | `SetupAuditTrail` + `Account.IsPersonAccount` | One-time | sponsor sign-off | A `SetupAuditTrail` row + at least one Person Account in test data. |
| R6 | **Stakeholder graph integrity report** (custom report; trivial) | `Account`, `Contact`, `AccountContactRelation`, `AccountAccountRelation`, `ContactContactRelation`, `PartyRoleRelation`, `PartyRelationshipGroup` | On demand | `auto-sdet` | Counts match test-data spec; orphan check (no Contact without Account, no PRG without members). |
| R7 | **Product RT coverage report** | `Product2` grouped by `RecordType.DeveloperName` | On demand | `auto-sdet`, `auto-admin` | Exactly two RTs visible: `Vehicle`, `Parts`. Each has ≥1 product. |
| R8 | **Audit Trail expectations** for Compliant Data Sharing, Identity Verification, fair-lending — **deferred** to module tiers (§25, §13, §11). At Foundation, verify CDS objects are *not yet* in use. | `ComplianceCaseClassification`, `StageDefinition`, etc. | n/a | sponsor | All zero rows at Foundation. |
| R9 | **CRM Analytics enablement check** — confirm the org has the `CRM Analytics Plus and Manufacturing Analytics Apps` PSL pool reserved (no dashboards yet). | `PermissionSetLicense` | On demand | `auto-admin` | Non-zero seat capacity. |
| R10 | **Data Cloud enablement check** — confirm Automotive Data Kit is *available* but not installed. | `list_admin_settings` Data Cloud | On demand | `auto-admin` | "Enabled but no kit installed" baseline. |

KPI rollups (Generic Visit KPIs, Assessment Indicator Definitions) are **deferred** to step 31 (Partner Visit Management). Forecasting (Advanced Account Forecasting) is **deferred** to step 24.

---

## 3. Transaction User Journey

Foundation only exercises Foundation objects. Picking **two** representative persona-driven flows that exercise *only* the step-1–11 model — no Vehicles, no Assets, no Leads, no Cases.

### Journey TUJ-1 — Dealer Representative onboards a household-of-four

> **Persona handoffs:** Dealer Representative (Persona #7) → `auto-admin` (PSA fix-up if needed) → Service Agent (Persona #10) for downstream lookup verification.

```
1. Dealer Representative logs into the org.
   - PSA: Auto Internal Sales profile + Automotive Foundation User PSL + Group Membership PSL.
   - Validation: Login succeeds; Lightning Experience renders Automotive app as default (App Visibility honoured).

2. Dealer Representative creates a Person Account "Aisha Khan" via the Automotive app's New Account → Person Account RT.
   - Foundation objects touched: Account (Person Account RT), Contact (auto-created via Person Account model).
   - Validation: `Account.IsPersonAccount = true`; matching Contact row; OWD honoured (Contact controlled by parent).

3. Dealer Representative captures Aisha's spouse "Rohan Khan" as a separate Person Account.
   - Foundation objects touched: second Person Account.
   - Validation: two distinct Person Accounts exist.

4. Dealer Representative links the two via Contact Contact Relationship "Spouse".
   - Foundation objects touched: ContactContactRelation, Party Role Relationship (PRR) record.
   - Validation: CCR row present; PRR row classified as `Spouse`; OWD = Private (Dealer Rep can see because record-creator).

5. Dealer Representative creates a Party Relationship Group "Khan Household" and adds both Person Accounts as members.
   - Foundation objects touched: PartyRelationshipGroup + PartyRelationshipGroupMember (or equivalent member object).
   - Validation: PRG record visible on each Person Account's "Party Relationship Groups" related list.

6. Dealer Representative links the household to the dealer's Business Profile via Account Account Relationship "Preferred Dealer".
   - Foundation objects touched: AccountAccountRelation (household Account ↔ dealer Account); ACR cross-link if the
     dealer's Sales Rep contact must be visible to the household.
   - Validation: AAR present, OWD = Private; Dealer Rep sees both sides; Service Agent (next persona) will see household
     side via record-sharing rule from step 9 of the Configuration Journey.

7. Handoff to Service Agent — they pull "Khan Household" via global search and confirm the household + spouse linkage
   surfaces on the Person Account page (preview of §13 Service Console behavior, verified at Foundation tier only as
   "data is queryable" not "Service Console is configured").
```

**Foundation-tier acceptance criteria (sample):**
- Positive: Steps 1–6 succeed end-to-end with zero validation errors.
- Negative: Attempting step 4 between two non-Person-Account Contacts must fail with the OOTB CCR validation (proves
  `ContactContactRelation` enabled).
- Boundary: A Person Account with a 100-character last name must not truncate (Foundation field-length check).
- Sharing: Service Agent (different profile, no record share except via OWD) can see household name (Account =
  PublicReadWrite) but not the PRR row (Private).

### Journey TUJ-2 — Service Agent looks up a household for an inbound call (Foundation slice only)

> **Persona handoffs:** Service Agent (Persona #10) → no handoff (single-step verification of Foundation visibility).

```
1. Service Agent logs in.
   - PSA: Auto Internal Service profile + Automotive Foundation User PSL + Group Membership PSL.
   - Validation: Login succeeds; Service Console for Automotive app *visible but not configured at Foundation* — Agent
     uses standard Lightning record pages.

2. Service Agent searches "Aisha Khan" → opens the Person Account.
   - Foundation objects touched: Account (read), Contact (read), AccountContactRelation (read).
   - Validation: Person Account loads; Contact controlled-by-parent shows aligned data.

3. Service Agent reviews related lists: Party Relationship Groups, Contacts, AAR, PRR.
   - Foundation objects touched: PartyRelationshipGroup, AccountAccountRelation, PartyRoleRelation.
   - Validation: PRG "Khan Household" visible; preferred dealer link visible on AAR list; spouse PRR visible.

4. Service Agent attempts to *edit* a PRR row.
   - OWD enforcement test: PRR is Private. If the agent has no record share, the edit should be blocked.
   - Validation: Edit action greyed out OR explicit "Insufficient Privileges" — proves OWD is correctly applied.

5. Service Agent escalates the call — but no escalation surface exists at Foundation tier (Case is owned by §13).
   - Verification of scope boundary: Agent cannot create a Case from this page until §13 is configured. Surface a
     "module not yet configured" message and mark this scenario as the explicit Foundation/Service-Console seam.
```

**Foundation-tier acceptance criteria (sample):**
- Positive: All four lookup steps succeed.
- Negative: PRR edit must be blocked for the Service Agent profile (sharing test).
- Boundary: A household with 0 members renders the PRG page with "no members" empty-state, not an error.

---

## 4. Quality bar self-check

| # | Check | Status | Note |
|---|---|:---:|---|
| 1 | Every requirement has at least one positive, one negative, one boundary scenario | ☑ | TUJ-1 + TUJ-2 each list positive/negative/boundary at the bottom; full per-persona scenarios are deferred to the **Test Scenarios** deliverable handed to `auto-sdet`. |
| 2 | Every irreversible toggle has a sandbox-first gate | ☑ | Person Accounts (step 3) explicitly gated. Knowledge / Timeline / V&A Finance Additional Components flagged as out-of-scope-but-verified-flippable. |
| 3 | Every persona referenced has its PSL stack named | ☑ | Dealer Rep (TUJ-1) and Service Agent (TUJ-2) PSL stacks named. Full 11-persona PSL matrix is in `auto-user-management` SKILL — not duplicated here. |
| 4 | Every async surface has an explicit wait strategy | ☑ N/A at Foundation | Foundation is synchronous (UI + DML). Async surfaces (BRE, AEO, DPE, mobile cache, CDS transitions) are *all* out of scope at Foundation. Documented as "n/a — surfaces in module tier X." |
| 5 | Every external integration has a stub vs. live decision and a failure-injection scenario | ☑ | Integration Journey table I1–I12. All "out of scope at Foundation" lines explicitly call out *no live integration*; only I11 (SSO) and I12 (Setup Audit Trail) are live at Foundation. |
| 6 | All four Setup Journeys + the Transaction User Journey are present (or marked N/A with reason) | ☑ | §2a, §2b, §2c, §2d, §3 all present. |
| 7 | Step ordering does not violate `JOURNEY_MAP.md` Part 2 | ☑ | Configuration Journey strictly mirrors steps 1–11. The Person Accounts/OWD ordering nuance is called out as a Setup-UI gate, not a model violation. |
| 8 | ARC, if in scope, is the last configuration step | ☑ | ARC is **out of scope** at Foundation. Reserved as step 43; `ARC Access` PSL pool only. |
| 9 | No write operations are recommended against a read-only org | ☑ | All validation checks are `run_soql` / `describe_sobject` / `list_admin_settings` / `list_permission_sets` / `retrieve_metadata` / `health_check`. Every write step (`/auto:scaffold-test-data`, profile clone, PSA assign, RT add, OWD change, Person Accounts toggle) is **handed off** to `auto-sdet` running against a non-read-only sandbox. |
| 10 | Mandatory record-type splits (Product, Asset → Vehicle / Parts) are honoured | ☑ Product splits in step 11 (Foundation). Asset split deferred to step 13 (next tier) and explicitly flagged. |

All boxes checked or explicitly marked N/A with reason. Deliverable is "done" per the agent spec.

---

## 5. Hand-offs

| Receiving agent | What you receive | What you do |
|---|---|---|
| **`auto-sdet`** *(primary)* | This journey doc + the (forthcoming) Foundation Test Plan + Test Scenario table. | Execute Configuration Journey steps 1–11 against a non-read-only sandbox: clone profiles, assign PSLs, flip Person Accounts (sandbox-first), set OWD, add Account RTs, enable PRG, add Product RTs. Author Playwright/FIT tests for TUJ-1 + TUJ-2. Scaffold the Foundation slice of the Setup Data Journey via `/auto:scaffold-test-data`. |
| **`auto-admin`** | The Configuration Journey (§2a) and OWD baseline (§2d R4). | Own day-to-day PSL maintenance, profile drift, OWD audits. Run `/auto:audit` on a cadence to keep Foundation clean. |
| **`auto-consultant`** | Open Questions Q1–Q5 + the OEM-vs-Dealer scoping. | Resolve sponsor open questions; sign off on dealer/household/supplier RT inclusion at Foundation vs. deferring. |
| **`auto-developer`** | None at Foundation tier. | Re-engage at step 22 (Industries Flows / OmniStudio) and step 29 (Connected Services / MuleSoft). |
| **`auto-vehicle-asset-fleet`** *(downstream skill, not an agent)* | Notification that Foundation is complete and Asset RT split (step 13) is the next tier's responsibility. | Author Asset Vehicle/Parts RT split + Vehicle/Asset graph in the next-tier journey doc. |
| **`auto-arc`** *(downstream skill, not an agent)* | Notification that ARC is reserved (PSL pool only) at Foundation. | Author ARC graph definitions in the step-43 journey doc once every relationship object has been built out by intervening tiers. |

---

## Appendix — Cross-references

- `JOURNEY_MAP.md` Part 2 — authoritative 43-step sequence; Foundation = steps 1–11.
- `PERSONA_JOURNEYS.md` — 11 Salesforce-defined personas; Foundation is the cross-cutting spine listed under "Cross-cutting setup spine (every persona depends on this)."
- `CLAUDE.md` — project conventions: irreversible toggles, mandatory record-type splits, read-only org rule.
- `skills/auto-user-management/SKILL.md` — full PSL inventory + OWD recommendations.
- `skills/auto-stakeholder-management/SKILL.md` — Person Account + ACR/AAR/CCR/PRR/PRG setup detail.
- `skills/auto-product-management/SKILL.md` — Product Vehicle/Parts RT split detail.
- `skills/auto-implementation/SKILL.md` — overarching implementation guardrails.
- `agents/auto-sdet-architect.md` — this agent's role spec and quality bar.
