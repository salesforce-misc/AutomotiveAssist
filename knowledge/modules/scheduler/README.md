# Scheduler — Test Drives & Service Appointments

Salesforce Scheduler with Multi-Resource Scheduling (agent + asset). Predefined Automotive Scheduler guided flows. Schedule Test Drive button replaces the default Schedule Appointment quick action on Lead/Opportunity.

## Primary settings / objects

`Automotive Scheduler` setting, `Salesforce Scheduler` settings (Multi-Resource Scheduling, Operating Hours for Service Territory Members for Work Type Groups), Omnistudio Settings (Standard Omnistudio Runtime). Objects: `ServiceResource` (Technician + Asset types), `ServiceTerritory` + `ServiceTerritoryMember` + `ServiceTerritoryWorkType`, `WorkType` + `WorkTypeGroup` (`Category` = `Test Drive` / `Vehicle Service`) + `WorkTypeGroupMember`, `OperatingHours` + `TimeSlot` + Holidays, `Skill` + `ServiceResourceSkill` + `SkillRequirement`, `BusinessProfile.ServiceTerritory` (Experience Cloud routing), `ServiceAppointment`, `Location`. Named Credential **`AUTOSCHEDULER`** is mandatory and must use the literal API name.

For end-to-end setup, considerations, troubleshooting matrix, OmniStudio assets, and live-org verification queries, see the [`auto-scheduler` skill](../../../skills/auto-scheduler/SKILL.md).

## Sources

- Journey row 12 in [`JOURNEY_MAP.md`](../../../JOURNEY_MAP.md)
- Admin guide: [`014-schedule-appointments-in-automotive-cloud.md`](../../guides/admin-guide/014-schedule-appointments-in-automotive-cloud.md)
- PDF pages: 632-667

## Setup-sequence position

Steps 19-20 — Salesforce Scheduler + Automotive Scheduler → Service Resource / Service Territory / Work Type / Work Type Group / Operating Hours. Two service resources (agent + asset/vehicle) are required per test drive.
