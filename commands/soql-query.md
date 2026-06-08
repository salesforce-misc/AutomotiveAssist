---
description: Run a SOQL query against your connected Automotive Cloud org
---

# Run SOQL Query

Execute a SOQL query against the connected Automotive Cloud Salesforce org.

$ARGUMENTS

## Steps

1. Verify org connection with `check_auto_setup`.
2. If a query was provided in arguments → execute with `run_soql`. Format as a readable table.
3. If no query → ask what data, then suggest using `describe_sobject` first to discover field names.
4. If user describes intent (e.g., "show me vehicles") → use `describe_sobject` to find actual fields, build the query, run it.

Common starters: `auto-data-model` skill has the canonical Automotive Cloud queries.

**Reminder**: Automotive Cloud object/field names can vary by package version — always verify with `describe_sobject` before constructing complex queries.
