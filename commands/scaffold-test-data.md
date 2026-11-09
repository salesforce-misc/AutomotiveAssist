---
description: SDET — load a sample Automotive Cloud test fixture (PersonAccount + Vehicle + Asset + Financial Account + Claim graph)
---

# Scaffold Test Data

**SDET-focused.** Load a "minimum viable" Automotive test data graph into the connected scratch org or sandbox. Build the graph with the generic record tools.

## Target graph

```
PersonAccount (customer)
  └── Asset (RT=Vehicle)
        └── Vehicle ── VehicleDefinition
        └── AssetAccountParticipant (Owner)
        └── AssetContactParticipant (Driver)
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

Profiles:
- `default`: the full graph
- `lead-only`: PersonAccount + Lead + Lead Line Item + Lead Preferred Seller
- `finance-only`: PersonAccount + Asset + Vehicle + FinancialAccount family
- `warranty-only`: Asset + Asset Warranty + Claim graph

## Steps

1. Safety check: `run_soql` `SELECT IsSandbox, OrganizationType FROM Organization`. If `IsSandbox` is false, stop. Only continue if the user explicitly confirms the alias and agrees to load data into production.
2. For each object in the chosen profile, call `describe_sobject` to confirm it exists and to find its required fields and record types. Skip objects that aren't enabled and tell the user which ones.
3. Reuse an existing VehicleDefinition when one matches Make + Model + Year + Trim (check with `run_soql`). Otherwise create one.
4. Create the records parent-first with `create_record` (for single records) or `bulk_create_records` (for siblings), passing each new Id down to its children. Alternatively, write one `run_apex` script that inserts the whole graph and prints the Ids with `System.debug`.
5. Return every created Id grouped by object, so the SDET can pin assertions, and keep this list as the fixture.
6. Teardown on request: delete the fixture's records child-first with `delete_record`, or with one `run_apex` delete script.
7. For BRE / AEO / Service Process tests, use `run_apex` after the load to start the relevant batch jobs.
