---
description: Compare configuration between two connected Automotive Cloud orgs
---

# Diff Orgs

Compare configuration across two orgs to surface drift. Org tools work against one target org at a time, so switch between the two.

$ARGUMENTS

## Steps

1. Ask the user for the source and target org aliases, or take them from the arguments. Note which org is the current target so you can switch back at the end.
2. For each org in turn, call `set_target_org` and collect the same data with `run_soql`:
   - Record types: `SELECT SobjectType, DeveloperName, IsActive FROM RecordType ORDER BY SobjectType, DeveloperName`
   - Permission set assignments per profile: `SELECT PermissionSet.Name permSet, Assignee.Profile.Name profile, COUNT(Id) n FROM PermissionSetAssignment WHERE PermissionSet.IsOwnedByProfile = false GROUP BY PermissionSet.Name, Assignee.Profile.Name`
   - OWD: `SELECT QualifiedApiName, InternalSharingModel, ExternalSharingModel FROM EntityDefinition WHERE QualifiedApiName IN ('Account','Contact','Asset','Lead','Opportunity')`
   - PSL capacity: `list_permission_sets`
   - Optional, for page layouts: `retrieve_metadata` with a `Layout` manifest into a separate directory per org. This needs an sfdx project.
3. Call `set_target_org` to switch back to the org that was the target before, and tell the user you did.
4. Render a side-by-side diff with `+` for added, `-` for removed and `~` for changed.
5. If the user wants to sync, recommend `/auto:export-config` from the source and `/auto:import-config` to the target.
