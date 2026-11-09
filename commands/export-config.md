---
description: Export Automotive Cloud configuration (JSON summary + retrieved metadata)
---

# Export Config

Snapshot the connected org's configuration.

$ARGUMENTS

## Steps

1. Confirm the target org alias. It's shown at the top of every org-tool response.
2. Collect a JSON summary with `run_soql`:
   - Record types: `SELECT SobjectType, DeveloperName, Name, IsActive FROM RecordType ORDER BY SobjectType`
   - Permission set assignments per profile: `SELECT PermissionSet.Name permSet, Assignee.Profile.Name profile, COUNT(Id) n FROM PermissionSetAssignment WHERE PermissionSet.IsOwnedByProfile = false GROUP BY PermissionSet.Name, Assignee.Profile.Name`
   - OWD: `SELECT QualifiedApiName, InternalSharingModel, ExternalSharingModel FROM EntityDefinition WHERE QualifiedApiName IN ('Account','Contact','Asset','Lead','Opportunity')`
   - PSL capacity: `list_permission_sets`
3. Write the summary to the user-specified path, or `./auto-config-export.json` by default.
4. Metadata (layouts, quick actions, Lightning pages, permission sets): write a `package.xml` with `Layout`, `QuickAction`, `FlexiPage` and `PermissionSet` (members `*`). Then call `retrieve_metadata` with that manifest and a `targetDir` such as `./auto-config-export/`.
   `retrieve_metadata` needs an sfdx project (`sfdx-project.json`) in the working directory. If there isn't one, tell the user and skip this step.
5. Render the file paths and a brief summary of what was exported.
