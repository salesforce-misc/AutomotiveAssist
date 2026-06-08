---
name: auto-finance-lending
description: Guides Automotive Cloud captive finance and lending — Financial Account, Financial Account Party / Balance / Transaction / Fee / Milestone / Statement / Address, Party Financial Asset, Asset Title, Vehicle and Asset Lending Underwriter Console, Compliant Data Sharing, fair-lending compliance. Use when configuring loans, leases, captive finance ops, or the Vehicle and Asset Lending Console.
---

# Automotive Cloud Finance & Lending

Two related capabilities:

1. **Captive Finance** — service captive finance customers via the **Finance Console for Automotive** app.
2. **Vehicle and Asset Lending** — origination flow (intake → underwriting → decisioning → proposal) via the **Vehicle and Asset Lending Console**, with Compliant Data Sharing.

## Captive Finance setup

1. PSL: `Vehicle and Asset Finance` (internal), `Vehicle and Asset Finance Foundation for Experience Cloud` (external).
2. **Timeline must be enabled first** (irreversible org-wide toggle). Setup → Timeline → Enable Timeline. Without this, step 4 ("Additional Components" with the predefined Account + Financial Account console timelines) is greyed out. See [`knowledge/modules/page-layouts/timeline-configuration.md`](../../knowledge/modules/page-layouts/timeline-configuration.md) for the full Timeline authoring + activation flow.
3. Setup → Vehicle and Asset → **Vehicle and Asset Finance Settings** → Enable Vehicle and Asset Finance. Automotive must already be enabled.
4. Enable **Vehicle and Asset Finance Additional Components** — adds predefined Timelines on Account and Financial Account pages. Requires Timeline already on.
5. Configure Financial Account model: Financial Account, Financial Account Party, Financial Account Balance, Financial Account Transaction, Financial Account Fee, Financial Account Milestone, Financial Account Statement, Financial Account Address.
6. Configure Party Financial Asset family: Party Financial Asset, Party Financial Asset Additional Owner, Financial Account Party Financial Asset.
7. Configure Asset Title + Asset Title Party for ownership transfer.

## Vehicle and Asset Lending setup

1. PSLs: `Vehicle and Asset Lending` (underwriters), `Vehicle and Asset Lending for Agents` (agent-assisted), `Vehicle And Asset Lending Edit Read-Only Party Related Records` (override read-only).
2. From Setup → see "Enable Features for Vehicle and Asset Lending" topic.
3. Configure **Compliant Data Sharing** — required for stage-based access control on lending data:
   - Stage Management Design User PSL
   - Define Stage Definitions
   - Define Stage Transitions
4. Configure intake forms (OmniScript-based) and Unified Catalog flows.
5. Integrate Experian + Equifax for creditworthiness data.
6. Set up Identity Verification flows (Service Console for Automotive must be enabled).

## Object roles

| Object | Role |
|---|---|
| Financial Account | The loan / lease / financial product itself |
| Financial Account Party | Beneficiary / trustee / co-signer roles on the account |
| Financial Account Balance | Total / principal / available credit balances |
| Financial Account Transaction | Each debit / credit |
| Financial Account Fee | Processing / late / wear-and-tear fees |
| Financial Account Milestone | Title transfer / deferred payment / delinquency events |
| Financial Account Statement | Periodic / closure statements |
| Financial Account Address | Communication / billing / statement addresses |
| Party Financial Asset | Account/Contact ↔ covered Asset |
| Party Financial Asset Additional Owner | Secondary people related to a covered asset |
| Financial Account Party Financial Asset | Trade-in collateral ↔ Financial Account |
| Asset Title | Legal ownership of a vehicle/asset |
| Asset Title Party | Account/Contact/User ↔ Asset Title |

## Page layouts

Add **Action Launcher** to Financial Account page → reverse a fee, change an address, etc.
Add **Timeline** + **Record Alerts** to Account and Financial Account pages.
Add **ARC Relationship Graph** to surface relationships across financial accounts.

## Compliance

Vehicle and Asset Lending flows must respect fair-lending regulations. Compliant Data Sharing controls who can see what at each origination stage. Identity Verification flows are part of the Service Console for Automotive package.

## Common pitfalls

- Enabling Vehicle and Asset Finance Additional Components without Timeline → toggle disabled.
- Skipping Stage Management Design User PSL → can't author Compliant Data Sharing stages.
- Not assigning `Vehicle and Asset Lending Underwriter Console` permission to underwriters → underwriter console fails to load.
- Setting Sales Agreement OWD wrong → external dealers can't see proposals.

## Tools

- `describe_sobject` for FinancialAccount and family
- `run_soql` for balance / transaction / milestone reporting
- `run_apex` for batch milestone/balance recalculation

## Field reference — `FinancialAccount.Type` values

Verified picklist values across demo orgs: `Automotive Loan`, `Automotive Lease`, `Asset Loan`, `Asset Lease`. The non-`Automotive`-prefixed values are used for non-vehicle finance (Asset Lending generic).

Each Financial Account typically carries: `Term` (months), `PrincipalAmount`, `InterestRate`, `InterestType` (`Fixed` / `Variable`), `OpeningDate`, `MaturityDate`, `AmountPastDue`, `AmountDue`, plus `*PaidYearToDate` aggregates for principal / interest / insurance.

## Vehicle and Asset Lending — intake schema

The OmniScript intake flow writes records into the **`ApplicationForm`** chain:

```
ApplicationForm
  ├─ ApplicationFormProduct
  │    └─ ApplicationFormProductProposal
  ├─ ApplicationFormTerm
  └─ ApplicationFormSellerItem
```

This chain is what the `AppChangeLog` ARC graph visualizes. Use `describe_sobject` to verify the link fields per release. Compliant Data Sharing stages (`StageDefinition`, `StageTransition`) gate which underwriter sees which `ApplicationForm` at each step.

## PartyFinancialAsset — collateral / trade-in junction

`PartyFinancialAsset` links a Party (Account/Contact) to a covered Asset. `PartyFinancialAssetAdditionalOwner` adds secondary owners. `FinancialAccountPartyFinancialAsset` ties the collateral to a specific Financial Account (e.g., a trade-in vehicle credited against a lease). Verify with `SELECT COUNT(Id) FROM PartyFinancialAsset` — it stays empty in orgs that haven't loaded trade-in data even when `FinancialAccount` is populated.
