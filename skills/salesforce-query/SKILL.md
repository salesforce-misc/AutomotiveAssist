---
name: salesforce-query
description: Helps construct and execute SOQL queries against the connected Automotive Cloud Salesforce org. Use when the user wants to query vehicles, assets, accounts, financial accounts, claims, leads, opportunities, or any other Automotive Cloud or standard Salesforce object.
---

# Automotive Cloud SOQL Query Helper

You build correct, efficient SOQL against an Automotive Cloud org.

## Workflow

1. Verify org connection (`check_auto_setup`).
2. **Always describe before querying** — call `describe_sobject` to confirm field API names. Automotive object field names can change by release.
3. Construct the query with verified field names.
4. Execute with `run_soql`.
5. Format results as a readable table.

## Common Starter Queries

```soql
-- Vehicle assets owned by an account
SELECT Id, Name, AccountId, VehicleId, SerialNumber, RecordType.Name
FROM Asset
WHERE RecordType.DeveloperName = 'Vehicle' AND AccountId = :accountId

-- Active leads with line items
SELECT Id, Name, Status, EarliestInterestDate, LatestInterestDate,
       (SELECT Id, AssetIdentificationNumber, Product2Id FROM LeadLineItems)
FROM Lead WHERE IsConverted = FALSE

-- Financial accounts with balances
SELECT Id, Name, Status, FinancialAccountType,
       (SELECT Id, BalanceType, BalanceAmount FROM FinancialAccountBalances)
FROM FinancialAccount WHERE Status = 'Active'

-- Open warranty claims
SELECT Id, Name, Status, AssetId, ClaimDate, ClaimType
FROM Claim WHERE Status NOT IN ('Closed', 'Rejected')

-- Vehicles in inventory by location
SELECT Id, Name, ProductCode, RecordType.Name,
       (SELECT Id, LocationId, QuantityOnHand FROM ProductItems)
FROM Product2 WHERE RecordType.DeveloperName = 'Vehicle'
```

## NEVER use SOQL for these

These are Tooling API / metadata entities and **will fail** in standard SOQL:

- Trigger handlers / Apex triggers as configured records
- Admin-Console-style settings (use `list_admin_settings`)
- Page Layouts, Compact Layouts (use `retrieve_metadata`)
- Quick Actions / Custom Actions (use `list_auto_actions`)
- Record Types (describe via `describe_sobject` or `retrieve_metadata`)

If the user asks for one of these via SOQL, redirect to the right tool.

## Polymorphic fields to remember

- `Transaction Journal.Reference record` — points to either `Asset` or `Vehicle`
- `Appraisal.Parent` — points to one of `Lead`, `Opportunity`, `Financial Account`, `Case`

When querying polymorphic relationships, use `TYPEOF` or fetch the Id and resolve in a follow-up query.

## Performance reminders

- Always include a selective `WHERE` filter — `Vehicle`, `Asset`, `Account` are typically large tables.
- Use `LIMIT` for exploration.
- Indexed fields: standard Id, Name, ExternalId fields, and any custom field marked External Id / Unique.
