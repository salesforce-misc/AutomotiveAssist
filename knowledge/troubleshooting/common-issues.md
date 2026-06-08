# Automotive Cloud — Common Issues

| Issue | Likely cause | Fix |
|---|---|---|
| Test Drive flow falls back to default scheduler | Default Schedule Appointment quick action wasn't removed; Schedule Test Drive button not added | Edit Lead/Opportunity layouts |
| Test drive flow shows no time slots | Multi-Resource Scheduling off; OR no Asset-type ServiceResource on the dealer's ServiceTerritory; OR Test Drive Skill not aligned across Technician + Asset + WorkType.SkillRequirement; OR no availability in next 30 days | Enable Multi-Resource Scheduling; create Asset ServiceResource and add via ServiceTerritoryMember; align Skill / SkillRequirement / ServiceResourceSkill |
| Experience Cloud partner sees wrong / no dealer | `BusinessProfile.ServiceTerritory` not set, or field missing from layout | Add Service Territory field to Business Profile layout; populate it on the dealer's BP |
| Scheduler flow auth fails | `AUTOSCHEDULER` Named Credential missing or named differently; auth provider used Lightning URLs | Recreate Named Credential with exact label `AUTOSCHEDULER`; use Salesforce Classic URLs |
| External user can't see Vehicle data | Asset OWD too restrictive (Asset controls Vehicle sharing) | Adjust Asset OWD or Experience Cloud sharing sets |
| Vehicle Definition records invisible | Product OWD too restrictive (Vehicle Definition inherits Product sharing) | Adjust Product OWD |
| Captive Finance Additional Components disabled | Timeline not enabled — irreversible toggle required first | Enable Timeline (irreversible) |
| Timeline component on a record page renders empty | Timeline feature not enabled; no active `TimelineObjectDefinition` selected; filters exclude all records; missing read access on a referenced object/field | Setup → Timeline → Enable; on the record page, drag Timeline component → Select up to 5 active configurations; run **Preview Timeline** in Setup. See `knowledge/modules/page-layouts/timeline-configuration.md` |
| Person Account toggle disabled | OWD on Contact not Controlled By Parent / both not Private; or no Account record types | Set OWD; create Account RTs |
| Vehicle inventory search returns empty | Criteria-Based Search not enabled, DPE template not run, Vehicle Searchable Field not configured | Enable Criteria-Based Search; run Update Vehicle Searchable Field Values DPE |
| Action Plans missing on Visit | Action Plans / Industries Visit / Partner Visit Management PSLs missing | Assign all three PSLs |
| Warranty Claim adjudication fails | Warranty Term Coverage missing for the related Code Set | Configure Warranty Term Coverage |
| Telematics events not firing Record Alerts | AEO Expression Sets missing or AEO Designer/Runtime PSLs missing | Define Expression Sets; assign PSLs |
| ARC Relationship Graph renders empty | Graph definition not selected on the component, or upstream relationship objects don't exist yet | Verify graph definition; ensure Person Account / Asset Participants / Party Relationship Group set up first |
| Mobile Partner Visits app missing tasks | Mobile metadata cache stale; DB Schema not enabled for the task object | Regenerate mobile metadata cache; verify DB Schema |
