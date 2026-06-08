---
name: auto-rebates
description: Guides retail sales reporting and rebates in Automotive Cloud — Rebate Claim, Transaction Journal, optional Rebate Management add-on. Use when configuring vehicle/parts retail delivery reporting or dealer incentive payouts.
---

# Automotive Cloud Retail Sales & Rebates

Streamline retail delivery reporting via Rebate Claims and Transaction Journals. Optional Rebate Management add-on for incentive programs.

## Object model

- `Rebate Claim` — vehicle a dealer sold (odometer reading, delivery status, processing status, sale approval date). Many-to-many with both `Asset` and `Vehicle`.
- `Transaction Journal` — product / category of parts sold by a dealer (`Reference record` polymorphic — Asset or Vehicle).

## Setup

1. PSL: `Partner Performance Management` (internal), `Partner Performance Management for Experience Cloud` (external).
2. Setup → Partner Performance Management → Enable.
3. (For incentive programs) Add Rebate Management add-on license.
4. (External users) PSL: `Rebate Management for Experience Cloud Users` — only available with Rebate Management add-on.

## OWD

- `Rebate Claim` → Private internal + external.
- `Transaction Journal` → typically Private. Use sharing rules for dealer-specific access.

## Common pitfalls

- Trying to use Rebate Management without the add-on license → menus missing.
- `Rebate Claim` shared too widely → dealers see other dealers' claims.

## Tools

- `describe_sobject` for RebateClaim, TransactionJournal
- `run_soql` for rebate aging / approval reporting

## Population signals

`TransactionJournal` is the most reliable indicator of whether dealer-incentive accounting is actually running. A loaded org typically has thousands of rows because every retail sale report writes one. `SalesAgreement` + `SalesAgreementProductSchedule` (an over-time amortization table) are the upstream contracts — verify both are populated before expecting `RebateClaim` to render meaningfully.

```sql
SELECT COUNT(Id) FROM TransactionJournal
SELECT COUNT(Id) FROM SalesAgreement
SELECT COUNT(Id) FROM SalesAgreementProduct
SELECT COUNT(Id) FROM SalesAgreementProductSchedule
SELECT COUNT(Id) FROM RebateClaim
```

A `RebateClaim` row references both `Asset` and `Vehicle` polymorphically; `TransactionJournal.Reference record` is also polymorphic to Asset or Vehicle. Always include both in any reporting query.
