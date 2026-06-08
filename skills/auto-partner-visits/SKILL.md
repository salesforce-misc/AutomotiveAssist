---
name: auto-partner-visits
description: Guides Partner Visit Management — Visit, Action Plan, Action Plan Template, Generic Visit Task, Generic Visit Task Context, Assessment Indicator Definition, Generic Visit Key Performance Indicator. Includes Partner Visits mobile app. Use when district / territory sales managers need to plan visits, assign audit tasks, and capture KPIs.
---

# Automotive Cloud Partner Visit Management

District and territory sales managers plan visits to dealer / partner locations, define audit tasks and KPIs, and execute via the **Partner Visits** mobile app.

## Object model

- `Visit` — visit record (account, location, time, priority, visitor).
- `Action Plan` + `Action Plan Template` + `Action Plan Template Version` — set of frequently performed visit tasks. *Reusable for non-visit purposes too — Asset Account Participant, Asset Milestone, Fleet, Vehicle.*
- `Generic Visit Task` — audit task to perform (status, time, sequence).
- `Generic Visit Task Context` — common attributes for different task contexts.
- `Generic Visit Task Context Relation` — junction (M:M between Generic Visit Task and Generic Visit Task Context).
- `Assessment Indicator Definition` — parameters / metrics for each task.
- `Generic Visit Key Performance Indicator` — target + actual values for each Assessment Indicator Definition (M:M with Generic Visit Task Context).

## Setup

1. PSLs: `Partner Visit Management` (territory managers), `Action Plans`, `Industries Visit` (use both together if you don't have Manufacturing Partner Visit Management).
2. Setup → Partner Visit Management → Enable. Mark **Partner Visits** app Visible on profiles.
3. Configure Action Plan Templates with their Generic Visit Tasks.
4. Define Assessment Indicator Definitions and Generic Visit KPIs.
5. (External dealers) PSL: `Partner Visit Management for Experience Cloud`.

## Page layouts

Automotive Cloud ships separate Visit and Task layouts for sales managers vs. evaluation officers.

## Mobile

The **Partner Visits** mobile app is separate from the iPad / Salesforce Mobile App for general use. It surfaces the visit + tasks + KPIs flow optimized for field audits.

## OWD

- `Visit` → Public Read/Write internal + external.
- `Action Plan` → Public Read/Write internal + external.
- `Action Plan Template` → Public Read/Write internal + external.
- `Assessment Indicator Definition` → Public Read/Write internal + external.
- `Generic Visit Task` / `Generic Visit Task Context` → Public Read Only.

## Common pitfalls

- Missing `Action Plans` PSL → action plans don't surface.
- Missing `Industries Visit` PSL while using Manufacturing Partner Visit Management → visit objects don't load.
- Forgetting Mobile-app-specific page layouts → field reps see the wrong fields.
- Generic Visit Task Context Relation not populated → tasks don't display in the right context.

## Tools

- `describe_sobject` for Visit, ActionPlan, GenericVisitTask
- `run_soql` for visit completion reporting
