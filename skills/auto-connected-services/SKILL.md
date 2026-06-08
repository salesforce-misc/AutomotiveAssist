---
name: auto-connected-services
description: Guides Vehicle Connected Services configuration in Automotive Cloud — MuleSoft + telematics integration, Actionable Event Orchestration, predefined service processes (Remote Vehicle Door Lock/Unlock, Remote Notifications), eligibility rules, telemetry definitions. Use when configuring vehicle telemetry, remote actions, or DTC-driven workflows.
---

# Vehicle Connected Services

Vehicle Connected Services lets Automotive Cloud receive real-time events from vehicles (DTCs, engine/transmission alerts) and trigger downstream workflows.

## Stack — must be configured in this order

1. **PSL stack**: `Automotive Foundation User`, `Vehicle Connected Services`, `Service Process Studio`, `Context Service Admin`, `Context Service Runtime`, `Omnistudio`, `Omnistudio User`, `MuleSoft Anypoint Platform`, `Business Rules Engine Designer`, `Business Rules Engine Runtime`.
2. Setup → Connected Services → **Vehicle Connected Services Settings**.
3. **Enable Automotive** must already be on (from Automotive Settings).
4. Toggle **Enable Vehicle Connected Services** → accept terms and conditions.
5. Toggle **Enable Predefined Components for Connected Vehicle Services** — this requires Omnistudio, Service Process Studio, and Context Service to be enabled.
6. (Optional) PSLs `Actionable Event Orchestration Designer` + `Runtime` for AEO authoring + execution.

## Predefined service processes

- **Remote Vehicle Door Lock and Unlock** — sends an external request to the telematics system to view door status and lock/unlock.
- **Remote Vehicle Notifications and Alerts** — pushes service-appointment, software-update, case-resolution messages to the vehicle dashboard.

Custom service processes can extend these via Service Process Studio.

## Actionable Event Orchestration (AEO)

- Captures inbound events (DTCs, engine malfunctions, transmission issues, telematics events).
- Filters via `Expression Sets`.
- Creates / updates Record Alerts, Milestones, Cases, or any other record.

Objects: `Actionable Event Type`, `Actionable Event Subtype`, `Actionable Event Orchestration`, `Expression Sets`.

## Eligibility rules

Service processes have eligibility rules to control which users can perform which remote action. Configure per service process.

## Telemetry definitions

Telemetry Definitions and Telemetry Action Definitions let you bulk-perform remote operations across many configurations.

## Common pitfalls

- Enabling Vehicle Connected Services before Automotive itself is enabled.
- Enabling Predefined Components without the Omnistudio / Service Process Studio / Context Service prerequisites.
- AEO running without Expression Sets defined — events arrive but no orchestration fires.
- Missing `Vehicle Connected Services` PSL on the user → predefined service processes don't appear in the action launcher.

## Tools

- `list_admin_settings` (Automotive, Connected Services categories)
- `run_apex` to send test telematics events through AEO
- `retrieve_metadata` to inspect Service Process definitions

## Related skills

- `auto-service-console` — surfaces these alerts in the Service Console
- `auto-flows-industries` — Omnistudio + BRE that powers connected services

## AEO field reference

`ActionableEventOrchestration` rows verified in the field carry these key fields:

| Field | Notes |
|---|---|
| `Name`, `ApiName` | label + invocation name |
| `IsActive` | boolean — only Active orchestrations fire |
| `EventTypeId` → `ActionableEventType` | which inbound event class triggers |
| `ContextDefinitionName` | named ContextDefinition that shapes the input payload (e.g., `VehicleFaultEventDetail__stdctx`, `AssetRegistrationCreateRecordDetails__stdctx`, `VehicleContextDefClone`) |
| `ContextMappingName` | mapping of inbound event fields → context attributes |
| `ExecutionProcedureType` | typically `ExpressionSetBasedOrchestration` |
| `ExecutionProcedureName`, `ExecutionProcedureId` | the ExpressionSet/Decision Matrix invoked |
| `UsageType` | `Standard` (or domain-specific) |

Recipes for inspecting AEO config (read-only):

```sql
SELECT Name, ApiName, IsActive, ContextDefinitionName, ContextMappingName,
       ExecutionProcedureType, ExecutionProcedureName, UsageType
FROM ActionableEventOrchestration

SELECT Name, IsActive, UsageType, COUNT(Id)
FROM ActionableEventOrchestration GROUP BY Name, IsActive, UsageType
```

## Common context definitions

Standard suffix `__stdctx` indicates a Salesforce-shipped context. Examples seen in real orgs:

- `VehicleFaultEventDetail__stdctx` — DTC / fault event payload
- `AssetRegistrationCreateRecordDetails__stdctx` — asset registration on first delivery

Custom (cloned) contexts often carry `Clone` in the name (e.g., `VehicleContextDefClone`, `SchedApptCDClone`).
