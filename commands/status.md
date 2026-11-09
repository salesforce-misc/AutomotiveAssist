---
description: View a dashboard of the connected Automotive Cloud org
---

# Automotive Cloud Org Status

Show a single dashboard view of the connected Automotive Cloud org, built from the generic org tools.

## Steps

1. Org info: `run_soql` `SELECT Name, OrganizationType, InstanceName, IsSandbox, NamespacePrefix FROM Organization`. The target org alias is shown at the top of every org-tool response.
2. Licenses: `list_permission_sets`. Show Automotive PSL capacity (Total / Used), including the Automotive Foundation User PSL.
3. Key object counts: one `run_soql` `SELECT COUNT() FROM <Object>` per object: Account, Contact, Vehicle, Asset, VehicleDefinition, Lead, Opportunity, FinancialAccount, Claim, Visit, Fleet.
   An `INVALID_TYPE` error means the object isn't enabled in this org. Show it as "not enabled", which doubles as the feature-flag view.
4. Person Accounts: `describe_sobject Account`. It's enabled if there is an `IsPersonAccount` field.
5. Active territory model: `run_soql` `SELECT Name, State FROM Territory2Model WHERE State = 'Active'` (`INVALID_TYPE` means Territory Management is off).

Present it as a compact ASCII dashboard. Say plainly which items couldn't be read.
