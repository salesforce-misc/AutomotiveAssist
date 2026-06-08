# Timeline — Setup & Configuration (Automotive Cloud)

Source: PDF `automotive_cloud_5-4-2026.pdf` pp. 43, 219–233, 257, 840 + live org verification (Tooling API entity `TimelineObjectDefinition`).

## What it is

The Timeline component renders a chronological view of activities, events, related-object records, and milestones anchored on a single record (Vehicle, Asset, Account, Contact, FinancialAccount, Lead, etc.). One Lightning record page can show up to **five** active timeline configurations side-by-side or stacked.

## Required edition

Enterprise, Unlimited, or Developer.

## User permission to author / edit

`Customize Application`, plus read + create access on every object and field referenced in the timeline definition.

## Enable Timeline (one-time, IRREVERSIBLE)

1. Setup → Quick Find → **Timeline**.
2. Click **Enable Timeline**.

After enabling, you cannot turn the feature off. Confirm with the user before flipping in production.

> Captive Finance / Vehicle and Asset Finance "Additional Components" — including the predefined Account and Financial Account console timelines — are gated on this toggle. Enable Timeline **before** turning on those features.

## Create a Timeline configuration

1. Setup → Quick Find → **Timeline** → **New Timeline**.
2. Enter **Name**, **API Name** (auto-generated unless overridden).
3. Select a **Base Object** (standard or custom). Validated base objects in real Automotive deployments include: `Account`, `Asset`, `Contact`, `FinancialAccount`, `Lead`, `Vehicle`, `ApplicationFormProduct`, `CollectionPlan`. Any standard/custom object that meets the schema requirements is allowed.
4. **Save**.
5. (Optional) Toggle **Show Age** and pick the field used to compute age (e.g., `CreatedDate` on Vehicle → "vehicle age at the time of event").
6. Click **Next**.
7. **Add Related Object** (up to **5** related objects per base; up to **5 record types** per related object that has record types):
   - **Parent Object**: choose `Use Timeline Object` to anchor on the base, or pick an intermediate object (e.g., anchor `Vehicle` timeline events through `Asset`).
   - **Related Object**: the object that stores the event records.
   - **Field**: lookup that joins the related object back to the parent. Auto-selected if there is exactly one lookup.
   - **Filters**: SOQL-style filter conditions to restrict which records appear (e.g., `Asset Warranty Number IS NOT NULL`).
   - **Title Field / Subtitle Field / Timestamp Field**: drives event card rendering.
   - **Fields & Related Lists**: extra columns / sub-lists shown on the event card.
8. **Save & Activate**.
9. (Optional) Click **Preview Timeline** and pick a representative base record. Choose a record with rich data so all related objects render.

### Recommended related-object set for a Vehicle timeline

`Asset Warranty`, `Asset Milestone`, `Asset Account Participant`. Optionally add `Asset Contact Participant`. You can also enrich with custom objects, `Location`, or `Vehicle Definition` data.

### Recommended related-object set for a Contact (Cases & Engagements) timeline

- `Engagement Interaction` (parent = Use Timeline Object, field = `InitiatingAttendeeId`).
- `Case` (parent = Account, field = `AccountId`).

## Surface the Timeline on a record page

1. Open the record page → Setup → **Edit Page**.
2. Drag the **Timeline** Lightning component onto the editable area.
3. In the component property panel, click **Select** → choose up to **5** active timeline configurations.
4. **Save & Activate**.

> Multiple page layouts (dealer / service agent / sales executive) are common — make sure the right timeline configurations are pinned to each profile-specific layout.

## Timeline + Service Console for Automotive

The Service Console for Automotive ships with a **preconfigured Timeline** that shows engagement interaction records for a contact. To swap to a custom timeline (e.g., one that includes cases plus engagements), configure a new `TimelineObjectDefinition` and replace the component selection on the Contact page.

## Timeline + Data Cloud engagement events

`Set Up a Timeline to Show Engagement Events from Data Cloud` is a separate flow that surfaces Data Cloud engagement events on the service / asset / vehicle consoles. Requires Data Cloud entitlement and a configured engagement-event ingestion.

## Underlying metadata entity

| Aspect | Value |
|---|---|
| Tooling API entity | `TimelineObjectDefinition` |
| Key fields | `DeveloperName`, `MasterLabel`, `BaseObject`, `IsActive`, `Definition`, `Metadata`, `FullName`, `NamespacePrefix`, `ManageableState` |
| Related entities | `TimelineObjectDefinitionLocalization` (translations), `TimelineObjectDefinitionChangeEvent` |
| Definition payload | JSON tree with `anchorObject`, `age`, and an `events[]` array; each event uses `oneToMany` with `eventObject`, `filters`, `sort`, `anchorReferenceField`, optional `lookupToParent` |

To enumerate timelines in an org via SOQL (Tooling API):

```sql
SELECT Id, DeveloperName, MasterLabel, BaseObject, IsActive,
       NamespacePrefix, ManageableState
FROM TimelineObjectDefinition
ORDER BY BaseObject, IsActive DESC, MasterLabel
```

(Dump an individual `Definition` to inspect the JSON tree — useful when validating which related objects, filters, and fields are configured.)

## Common pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| `Enable Timeline` toggle missing in Setup | Org edition not Enterprise / Unlimited / Developer | Confirm edition |
| Captive Finance "Additional Components" disabled | Timeline not enabled (irreversible prerequisite) | Enable Timeline |
| Timeline component on Lightning page renders empty | No active `TimelineObjectDefinition` selected, or filters exclude all records | Inspect via Tooling SOQL; preview the timeline against a known record |
| User can edit definition but events don't render | Missing read access on the related object/field referenced in the definition | Grant via PSL / profile |
| "Up to five timelines" limit hit when adding to a page | Hard component cap | Drop or merge timeline configurations |
| Related object's lookup not auto-detected | Multiple lookups from related object back to parent | Pick the correct lookup explicitly in step 7 |
| Show Age shows nothing | Age reference field is null on the base record (e.g., no `CreatedDate` for legacy data) | Choose a different age reference field, or backfill |

## See also

- `auto-page-layouts` skill — components used across Automotive (Timeline included).
- `auto-service-console` skill — preconfigured console Timeline.
- `auto-finance-lending` skill — Timeline is a prerequisite for Captive Finance / Vehicle and Asset Finance Additional Components.
- PDF: `Configure Timelines for Automotive Cloud` (p. 229) and `Add Timelines to a Vehicle Record in Automotive Cloud` (p. 233).
