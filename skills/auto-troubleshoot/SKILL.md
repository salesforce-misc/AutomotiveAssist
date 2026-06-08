---
name: auto-troubleshoot
description: Diagnoses and resolves common Salesforce Automotive Cloud configuration and runtime issues. Use when the user reports an error, missing data, broken layout, failed flow, or unexpected behavior in Automotive Cloud.
---

# Automotive Cloud Troubleshooter

Diagnose Automotive Cloud issues by checking the most common root causes in dependency order.

## Diagnostic checklist

1. **License & PSL**
   - Confirm `Automotive Foundation User` PSL is assigned. Without it, no Auto objects load.
   - Confirm the feature-specific PSL is assigned (e.g., `Vehicle Connected Services` for telematics).
2. **Feature toggles**
   - `list_admin_settings` and confirm Automotive Settings, Service Console for Automotive, Vehicle and Asset Finance, Partner Visit/Lead/Performance Management, Fleet Management, Warranty Lifecycle Management, Automotive Scheduler are enabled as needed.
3. **Trigger handlers**
   - `list_trigger_handlers` to see active/inactive. Disabled triggers are a frequent source of "data didn't roll up" symptoms.
4. **Record types**
   - Are Product and Asset record types created (`Vehicle`, `Parts`)? Is the user's profile assigned the right RT default?
5. **Page layouts**
   - Did the user enable Salesforce Scheduler but forget to remove the default Schedule Appointment quick action? That stops the predefined Test Drive flow.
6. **Sharing model**
   - Compare current OWDs to the recommended minimums (PDF p. 59-62). External users that can't see records → almost always sharing.
7. **Mobile / Partner Visits**
   - Did Partner Visit Management get enabled before its dependencies (Action Plans PSL, Industries Visit PSL, Account RTs)?
8. **Person Accounts**
   - If person account flows fail, confirm OWD on Contact is Controlled By Parent or both Account/Contact are Private. Person Accounts cannot be enabled otherwise.
9. **Lightning Knowledge**
   - One-way enable. If Knowledge in Service Console is missing, check Knowledge Settings.
10. **Connected Services / AEO**
    - Confirm Service Process Studio, Context Service, Omnistudio, MuleSoft Anypoint Platform PSLs are all on. Missing any of these breaks predefined components.

## Frequent symptoms

| Symptom | Likely cause |
|---|---|
| "Test Drive scheduling falls back to default flow" | Default Schedule Appointment quick action not removed; Schedule Test Drive button not added to Lead/Opportunity layout |
| "Test drive flow shows no time slots" | Multi-Resource Scheduling not enabled; OR Asset-type ServiceResource missing on the dealer's Service Territory; OR Test Drive `Skill` not assigned to BOTH the Technician + the Asset resource AND set as a `SkillRequirement` on the Test Drive `WorkType`; OR resource has no availability in the next 30 days |
| "Experience Cloud partner sees wrong / no dealer" | Account's `BusinessProfile.ServiceTerritory` not populated, or Service Territory field missing from Business Profile page layout |
| "Scheduler flow can't authenticate / 401" | `AUTOSCHEDULER` Named Credential not created with the exact label/API name, or auth provider configured with Lightning URLs instead of Salesforce Classic URLs |
| "GetServiceTerritories only returns 25 dealers" | Predefined `AutomotiveSchedulerGetLocations` Integration Procedure caps at 25; bump the limit param (recommended ceiling 1000) |
| "External user can't see Vehicle data" | Asset OWD too restrictive (Asset controls Vehicle sharing); also check Experience Cloud sharing sets |
| "Vehicle Definition records not appearing" | Product OWD too restrictive (Vehicle Definition inherits from Product) |
| "Captive Finance Additional Components disabled in Setup" | Timeline not enabled — irreversible enable required first |
| "Timeline component shows nothing on a record page" | Timeline feature not enabled, OR no active `TimelineObjectDefinition` selected on the page (up to 5), OR filters in the definition exclude all records, OR user lacks read access on a referenced object/field. Verify with Tooling SOQL on `TimelineObjectDefinition` and run **Preview Timeline** in Setup. See `knowledge/modules/page-layouts/timeline-configuration.md` |
| "Can't find / select Automotive objects in Sandbox Template" | Sandbox Template UI groups objects by license name, not product brand. Automotive-specific objects live under **Industries Automotive**; many "Automotive" features also need objects from Industries Common, Financial Services Cloud, Field Service, Salesforce Scheduler, plus Standard objects. Tick all groups corresponding to features the customer has licensed |
| "Person Account toggle disabled" | OWD on Contact not Controlled By Parent / both not Private; or no Account record types created |
| "Vehicle inventory search returns empty" | Criteria-Based Search and Filter not enabled; or Data Pipelines DPE template not installed; or Vehicle Searchable Field not configured |
| "Action Plans missing on Visit" | Action Plans PSL not assigned, or Industries Visit / Partner Visit Management PSL missing |
| "Warranty Claim adjudication fails" | Warranty Term Coverage missing for the related Code Set / Product; check Codeset Relationship |
| "Telematics events not creating Record Alerts" | Actionable Event Orchestration not configured, or Expression Sets disabled, or AEO Designer/Runtime PSLs missing |

## Tools to use

- `health_check` — runs the full org diagnostic
- `audit_auto_config` — runs validation rules against the org
- `diagnose_auto_issue <error message>` — keyword search across the validation rule set
- `list_trigger_handlers`, `list_admin_settings`, `list_db_schema` (mobile)
- `run_soql` to confirm data, `describe_sobject` to confirm fields

## Output

When troubleshooting, return:

1. The most likely cause first.
2. The diagnostic command run.
3. The exact remediation step (Setup path, PSL to assign, OWD to change).
4. Any irreversible warnings before applying.
