---
name: auto-scheduler
description: Guides test drive and vehicle service appointment scheduling in Automotive Cloud — Salesforce Scheduler, Automotive Scheduler guided flows, Multi-Resource Scheduling (agent + asset/vehicle), Service Resource, Service Territory, Service Territory Member, Work Type, Work Type Group, Work Type Group Member, Operating Hours, Time Slot, Skill, Service Resource Skill, Skill Requirement, Business Profile ↔ Service Territory linkage, Location, Holidays, Named Credentials. Use when configuring, customizing, or troubleshooting any appointment-scheduling flow.
---

# Automotive Cloud Scheduler

Test drives and vehicle service appointments use **Salesforce Scheduler** with the **Automotive Scheduler** predefined OmniScript-based guided flows. Internal users + dealers schedule via the standard app; customers schedule via Experience Cloud.

Source: PDF pp. 632–667 (`Schedule Appointments in Automotive Cloud`), pp. 30–32 (data model), pp. 65–67 (Lead / Opportunity / Business Profile customization), p. 44 (enable steps).

## Required edition

Enterprise, Unlimited, Developer.

## Permission Set Licenses (PSLs)

| User | PSL |
|---|---|
| Internal user scheduling test drives / vehicle services | `Automotive Scheduler` |
| Dealer / partner user scheduling from Experience Cloud | `Automotive Scheduler for Experience Cloud` |
| Service-resource user (technician / sales rep being booked) | `Salesforce Scheduler` (custom permission set with **Let a user be included in appointments in Salesforce Scheduler** enabled) |
| External users running OmniScripts in Experience Cloud | Custom permission set on `OmniStudio Runtime for Communities` license with **Enables consumers and partners to execute OmniScripts, DRs, and Cards through a Community or off platform** enabled |

**Considerations** (PDF p. 657):
- Grant `Automotive Scheduler` / `Automotive Scheduler for Experience Cloud` users **Read-only** on `ServiceAppointment`. Edit access lets users mutate `ArrivalWindowStart/End` or `ScheduledStart/End` without availability validation → corrupted / conflicting appointments.
- Service-resource users (technicians) also need Read-only on `ServiceAppointment`.

## Setup steps (org-level, dependency-ordered)

1. Setup → Automotive Settings → **Enable Automotive Scheduler**.
2. Setup → Omnistudio Settings → **Enable Standard Omnistudio Runtime** (the predefined flows are OmniScript-based).
3. Setup → Salesforce Scheduler Settings → **Enable Multi-Resource Scheduling**. Test drives require **two** service resources per appointment: one Technician (the agent) + one Asset (the vehicle).
4. Setup → Salesforce Scheduler Settings → **Enable Operating Hours for Service Territory Members for Work Type Groups**.
5. Configure data: Skills → Operating Hours (with Time Slots + Holidays) → Service Territories → Service Resources → Service Territory Members → Work Type Groups → Work Types → Skill Requirements & Service Resource Skills → Business Profile ↔ Service Territory linkage.
6. Create the **`AUTOSCHEDULER`** Named Credential — Label and API name **must** be exactly `AUTOSCHEDULER` because the predefined OmniScripts pass it as a parameter (PDF p. 657).

## Data model (Salesforce Scheduler objects)

```
Skill ─────┐
           ├─ ServiceResourceSkill ─→ ServiceResource ─┐
           └─ SkillRequirement ─→ WorkType             │
                                                       ├─ ServiceTerritoryMember ─→ ServiceTerritory
ServiceTerritory ─→ OperatingHours ─→ TimeSlot         │                                    │
ServiceTerritory ─→ Holidays                           │                                    │
ServiceTerritory ─→ ServiceTerritoryWorkType ─→ WorkType                                    │
WorkType ─→ WorkTypeGroupMember ─→ WorkTypeGroup       │                                    │
                                                                                            │
Account ─→ BusinessProfile.ServiceTerritory ────────────────────────────────────────────────┘
Lead / Opportunity ─→ ServiceAppointment ←─ WorkType
Vehicle (Asset) ─→ ServiceAppointment
```

Object roles (PDF pp. 30–32):

| Object | Role |
|---|---|
| `ServiceTerritory` | A dealer's geographical / operational location. Hierarchical (parent ↔ child territories). |
| `ServiceResource` | A user (Technician) or an Asset (vehicle) bookable into appointments. Multi-resource scheduling required for Asset type. |
| `ServiceTerritoryMember` | The join: which Service Resource works in which Service Territory, with optional start/end dates and a primary flag. |
| `WorkType` | The appointment template — duration, before/after buffers, appointment category (scheduled / drop-in / both), allowed time intervals, timeframe start/end. Maps a Work Type Group to a Service Territory. |
| `WorkTypeGroup` | The user-facing service catalogue entry. **`Category`** picklist drives flow routing — `Test Drive` vs. `Vehicle Service`. Exactly **one active** Work Type Group of category `Test Drive` per Service Territory. |
| `WorkTypeGroupMember` | Joins a Work Type to a Work Type Group. |
| `OperatingHours` | Time-zone-aware availability template. Attached to a Service Territory (default), to a Service Territory Member (override), and optionally to a Work Type. |
| `TimeSlot` | Day-of-week + start/end inside an Operating Hours record. |
| `Skill` | Org-wide list of skills (Setup → Skills). |
| `ServiceResourceSkill` | Resource ↔ Skill, with skill level (0–99.99) and start/end dates. |
| `SkillRequirement` | Work Type ↔ Skill, with required level. |
| `ServiceAppointment` | The actual booking. Auto-populated by predefined flows: AppointmentNumber, EarliestStartPermitted, DueDate, Parent Record + Type, Duration, DurationType, Subject, WorkType, Address, Status, StatusCategory, ArrivalWindowStart/End, ScheduledStart/End. |
| `Location` | Optional dealer location records used by inventory + scheduler. |
| `BusinessProfile` | Dealer account profile. **`ServiceTerritory`** field is the linkage that drives Experience-Cloud auto-detection of partner location. |

### Skill / Skill Requirement matching

The flow only shows resources whose Service Resource Skills are a superset of the selected Work Type's Skill Requirements. **Test drive gotcha:** assign the same Test Drive skill to BOTH the Asset-type service resource AND the Technician-type service resource — otherwise time slots will be empty even when both look available.

## Page-layout updates (mandatory)

### Lead + Opportunity (PDF pp. 65–67)
- Add the **Schedule Test Drive** standard button.
- **Remove the Schedule Appointment quick action** that auto-appears when Salesforce Scheduler is enabled. Leaving it triggers the default Salesforce Scheduler flow and bypasses the Automotive guided flow.
- Add Products, Preferred Sellers, Service Appointments related lists.
- Add Earliest Interest Date / Latest Interest Date fields (Lead only).

### Business Profile (PDF p. 65)
- Add the **Service Territory** field to the page layout. Without this, the Experience-Cloud partner-user flow can't auto-detect the dealer's territory.
- Also add: Business Partner Type, External Reference Number, Business Partner Registered Name, Service Type, Business Partner Code, Region Name (with org-specific picklist values).

### Vehicle
- Add the Service Appointments (Test Drive Appointments) related list to surface scheduled appointments.

## Multi-Resource on test drives — how it really works

For a test drive, the predefined flow (`AutomotiveScheduler/TestDriveAppointment`) requires **two** ServiceResource selections:

1. **Asset service resource** — represents the test-drive vehicle. Must be linked to a Vehicle/Asset record.
2. **Technician service resource** — the salesperson conducting the drive. Must have the *Let a user be included in appointments in Salesforce Scheduler* permission.

Time-slot screen shows **combined availability** of both. If the asset and technician have non-overlapping operating hours on the user's chosen date, no slots render — flow returns "select a different date or service resource" (PDF p. 658).

## Vehicle service appointments

Predefined flow `AutomotiveScheduler/VehicleServiceAppointment` writes a `ServiceAppointment` with:
- `ParentRecord` = the parent Asset of the Vehicle the user launched from
- `ParentRecordType` = `Asset`
- `WorkType` = user-selected vehicle-service work type

Internal + dealer users launch from a Vehicle record. Customers launch from the Experience Cloud site (PSL `Automotive Scheduler for Experience Cloud`).

## Org-Wide Defaults (OWD)

Set to **Public Read Only** for `ServiceResource`, `ServiceTerritory`, `WorkType`, `WorkTypeGroup`. (Internal access; sharing on `ServiceAppointment` is per-record.)

## Holidays

`Setup → Holidays → New`:
- Name (e.g., "Fourth of July"), Date, optional time-bound start/end (deselect All Day).
- **Deselect Recurring Holiday** — Salesforce Scheduler does not honour the recurring flag.
- Link to Operating Hours via the `Operating Hours Holidays` related list on the Operating Hours record.

## Named Credential — `AUTOSCHEDULER` (PDF p. 657 + troubleshooting p. 661)

- **Label and API name must both be `AUTOSCHEDULER`** — the predefined OmniScripts pass this exact string into Integration Procedures.
- Use the **Salesforce Classic** URLs for token endpoint and authorize endpoints when configuring the auth provider.
- Copy the **Salesforce Configuration** URL from the Auth. Provider record into the Connected App's Callback URL.
- Use the Salesforce Classic URL when creating the named credential itself.

## Considerations & limits (PDF pp. 657–659)

- **Service-resource type:** the predefined flows only support resource type `Technician`. Type `Agent` requires customizing the predefined IPs / DRs / OmniScripts.
- **Asset scheduling:** unlimited assets bookable per appointment when you have the `Automotive Scheduler` permission.
- **Service Territory result cap:** the predefined `AutomotiveSchedulerGetLocations` Integration Procedure limits the `GetServiceTerritories` API to **25** results by default (sorted by name asc). Bump the limit param in the IP's Properties tab — Salesforce recommends staying **below 1000** for performance.
- **Appointment Type = Video** does not auto-populate on `ServiceAppointment` from the Work Type; customize predefined IPs / DRs / OmniScripts to map it.
- **Parent Record / Parent Record Type:**
  - Test Drive: parent record type = `Lead` or `Opportunity`, parent record = the lead/opportunity that launched the flow.
  - Vehicle Service: parent record type = `Asset`, parent record = the Asset behind the Vehicle the flow was launched from.
- **30-day visibility:** if a service resource has no time slots in the next 30 days from "now," the resource is hidden from selection.

## Common pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| Test Drive button launches the wrong (default Salesforce Scheduler) flow | Default `Schedule Appointment` quick action wasn't removed from Lead / Opportunity layout | Remove the quick action, keep the Schedule Test Drive button |
| Test drive flow fails with "no asset slot" | Multi-Resource Scheduling not enabled | Setup → Salesforce Scheduler Settings → Enable Multi-Resource Scheduling |
| Guided flow won't render | Standard Omnistudio Runtime not enabled, OR external users missing OmniStudio Runtime for Communities permission | Enable Standard Omnistudio Runtime + assign external PSL |
| User can't find a dealer on "Select a Location" | Test Drive Work Type Group not linked to a Test Drive Work Type linked to that dealer's Service Territory; OR named credential mis-configured | Verify WTG/WT/ST chain; verify `AUTOSCHEDULER` named credential |
| User can't find the desired vehicle on "Select a Vehicle" | Vehicle record not linked to an Asset that's linked as a Service Resource of type Asset on the dealer's Service Territory; OR Multi-Resource Scheduling off | Link Vehicle ↔ Asset ↔ ServiceResource ↔ ServiceTerritoryMember |
| User can't find the desired technician | Custom PSL with "Let a user be included in appointments in Salesforce Scheduler" not assigned; OR skill mismatch (Test Drive skill missing on Technician/Asset/WorkType); OR Operating Hours mismatch between Service Territory and Work Type | Assign PSL; align Test Drive skill across Asset+Technician+WorkType; align operating hours |
| No time slots on "Select a Time Slot" | No availability in the next 30 days; OR vehicle/technician operating hours don't overlap on the user's date; OR skills mismatch | Pick a different date/resource; align skills; widen operating hours |
| Auth setup fails for named credential | Used Lightning URLs instead of Salesforce Classic URLs; mismatched Callback URL between Auth Provider and Connected App | Re-do with Classic URLs; confirm Callback URL matches `Salesforce Configuration` from the Auth Provider |
| Appointment scheduling fails outright | Wizard launched from wrong record type, OR custom validation rule on ServiceAppointment | Test drive must launch from Lead/Opportunity; vehicle service must launch from Vehicle/Asset; check ServiceAppointment validation rules + Status / StatusCategory mapping |
| External Experience-Cloud user sees wrong dealer | Account's Business Profile missing the Service Territory field, OR Business Profile field hidden from layout | Add Service Territory field to Business Profile layout; populate it on the dealer's BP |

## OmniStudio components shipped with Automotive Scheduler (PDF p. 12886+ in source PDF index)

| OmniStudio asset | Purpose |
|---|---|
| OmniScript `AutomotiveScheduler/TestDriveAppointment` | Schedule a test drive for a Lead or Opportunity |
| OmniScript `AutomotiveScheduler/VehicleServiceAppointment` | Schedule a vehicle service for a Vehicle (Asset) |
| Integration Procedure `ScheduleVehicleService` | Backs the vehicle-service flow |
| Integration Procedure `ScheduleTestDrive` | Backs the test-drive flow |
| Integration Procedure `AutomotiveSchedulerGetLocations` | Resolves Service Territories (25-result default cap) |

DataRaptors prefixed `AutoScheduler*` / `AutoCloudScheduler*` handle date defaults, formatting, dealer filtering, slot fetching, and entity-access validation.

## Live-org verification queries

```sql
SELECT Name, ResourceType, IsActive FROM ServiceResource ORDER BY ResourceType
SELECT Name, ParentTerritoryId, IsActive FROM ServiceTerritory
SELECT Name, Category, GroupType, IsActive FROM WorkTypeGroup
SELECT Name, EstimatedDuration, DurationType, BlockTimeBeforeAppointment,
       BlockTimeAfterAppointment FROM WorkType
SELECT Status, COUNT(Id) FROM ServiceAppointment GROUP BY Status
SELECT ServiceTerritoryId, ServiceResourceId, TerritoryType, EffectiveStartDate,
       EffectiveEndDate FROM ServiceTerritoryMember
SELECT WorkTypeId, WorkTypeGroupId FROM WorkTypeGroupMember
SELECT Id, Name, TimeZone FROM OperatingHours
```

For the test-drive routing graph, confirm:
1. Exactly one **active** `WorkTypeGroup` with `Category='Test Drive'` linked to each test-drive-capable `ServiceTerritory` (via `WorkTypeGroupMember` → `WorkType` → `ServiceTerritoryWorkType` → `ServiceTerritory`).
2. `BusinessProfile.ServiceTerritory` populated for every dealer Account that schedules from Experience Cloud.
3. `ServiceResource` of type `Asset` exists per test-drive vehicle, joined to the territory via `ServiceTerritoryMember`.
4. The same Test Drive `Skill` is on the Technician resource, the Asset resource, and the test-drive `WorkType`'s `SkillRequirement`.

## Tools

- `list_admin_settings` — Automotive Settings, Salesforce Scheduler Settings, Omnistudio Settings.
- `describe_sobject` — for ServiceResource / ServiceTerritory / WorkType / WorkTypeGroup / OperatingHours / ServiceAppointment.
- `run_soql` — for live-org verification of resource / territory / appointment data.
- `retrieve_metadata` — for page layouts (Lead, Opportunity, Business Profile, Vehicle), record types, and OmniScript / Integration Procedure metadata.
- **Do not** use `run_soql` for OmniStudio metadata (OmniScripts, FlexCards, DataRaptors, Integration Procedures) — those are Tooling-API metadata; use `retrieve_metadata`.

## See also

- `auto-leads-opportunities` — Lead/Opportunity layouts that host the Schedule Test Drive button.
- `auto-stakeholder-management` — Business Profile + Service Territory linkage.
- `auto-vehicle-asset-fleet` — Vehicle ↔ Asset ↔ ServiceResource(Asset) chain for test drives.
- `auto-experience-cloud` — `Automotive Scheduler for Experience Cloud` PSL + sharing sets.
- `auto-flows-industries` — OmniStudio runtime + customizing the predefined OmniScripts.
- `auto-service-console` — Vehicle Service appointments surface in the Service Console.
- PDF: `Schedule Test Drives and Service Appointments` (p. 632), `Considerations for Appointment Scheduling in Automotive Cloud` (p. 657), `Troubleshoot Appointment Scheduling in Automotive Cloud` (p. 660).
