---
description: View a dashboard of the connected Automotive Cloud org
---

# Automotive Cloud Org Status

Show a single dashboard view of the connected Automotive Cloud org.

## Steps

Call `get_org_status` and render:

- Org info (instance, edition, namespace, API version, last refresh)
- Automotive Cloud package version
- Enabled feature flags (Automotive, Service Console for Automotive, Vehicle Connected Services, Vehicle and Asset Finance, Partner Lead/Visit/Performance Management, Fleet Management, Warranty Lifecycle Management, Automotive Scheduler, Person Accounts, Lightning Knowledge, Timeline)
- Active user count + license usage (Automotive Foundation User PSL capacity)
- Counts of key objects: Account, Contact, Vehicle, Asset, Vehicle Definition, Lead, Opportunity, Financial Account, Claim, Visit, Fleet
- Active territory model (if any) — name, hierarchy depth, count of territories
- Latest mobile metadata cache timestamp (if Partner Visits app deployed)

Present as a compact ASCII dashboard.
