---
description: SDET — load a sample Automotive Cloud test fixture (PersonAccount + Vehicle + Asset + Financial Account + Claim graph)
---

# Scaffold Test Data

**SDET-focused.** Load the standard "minimum viable" Automotive test data graph into the connected scratch / sandbox.

## What gets loaded

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

## Steps

1. Verify org connection. Refuse to run against production by default — confirm the org alias before proceeding.
2. Call `scaffold_test_data` with the desired profile:
   - `default` — full graph (≈30 records)
   - `lead-only` — just PersonAccount + Lead + Lead Line Item + Lead Preferred Seller
   - `finance-only` — PersonAccount + Asset + Vehicle + FinancialAccount family
   - `warranty-only` — Asset + Asset Warranty + Claim graph
3. Return the IDs of every record created (so the SDET can pin assertions).
4. Offer a teardown: `/auto:scaffold-test-data --teardown <fixture-id>` removes the loaded records.

## Notes

- Vehicle Definition records are reused if they already exist — keyed by Make + Model + Year + Trim.
- The fixture sets `External Id` fields where applicable so re-running is idempotent.
- For BRE / AEO / Service Process tests, also call `run_apex` to invoke the relevant batch jobs after data load.
