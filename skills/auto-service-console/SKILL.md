---
name: auto-service-console
description: Guides Service Console for Automotive setup — Identity Verification flows, Timeline, Record Alerts, Actions and Recommendations, Audit Trail, Action Launcher, Lightning Knowledge integration. Use when configuring the customer-service experience for vehicles, claims, and post-sales support.
---

# Service Console for Automotive

Single-page console giving service reps, dealer agents, and service representatives a comprehensive customer view with at-a-glance info and easy-to-launch actions.

## Setup

1. PSLs: `Industry Service Excellence` + `Automotive Foundation User` (both required).
2. Setup → Service Console for Automotive → **Enable Service Console for Automotive**.
   - This also enables **predefined Identity Verification flows for Automotive**.
3. **Lightning Knowledge** — Setup → Knowledge Settings → Edit → Enable Lightning Knowledge. **One-way enable**. Requires at least one article type.
4. (For Knowledge Manager users) PSL: `Service Lightning Knowledge Manager`.
5. (For internal users) Mark the **Service Console for Automotive** app Visible on the profile.

## Predefined components

- **Identity Verification** flows — verify caller identity at the start of an interaction.
- **Timeline** — chronological view of key activities for a vehicle / contact. The console ships with a **preconfigured Timeline** showing engagement interaction records for a contact. To add cases or other related objects, configure a custom `TimelineObjectDefinition` (see [`knowledge/modules/page-layouts/timeline-configuration.md`](../../knowledge/modules/page-layouts/timeline-configuration.md)) and replace the component selection on the Contact / Vehicle / Asset page.
- **Record Alerts** — critical changes / updates surfaced as alerts.
- **Actions and Recommendations** — guided rec list.
- **Action Launcher** — quick access to remote actions, fee adjustments, address changes.
- **Audit Trail** — view of changes for compliance.
- **Decision Explainer** features and APIs (BRE-driven).

## Page layouts

Customize the Account, Asset, Vehicle, Financial Account, and Case page layouts to surface the console components.

## Scratch-org note

If creating a scratch org with `Service Console for Automotive` enabled, also assign `Automotive Foundation User` and `Industry Service Excellence` PSLs to the scratch-org user, then the predefined Identity Verification flows become available.

## Common pitfalls

- Enabling Lightning Knowledge before having any article type → fails.
- Forgetting to mark Service Console for Automotive Visible on the profile → app missing from app launcher.
- Missing `Industry Service Excellence` PSL → console renders but most components don't load.
- Disabling Knowledge after enabling → not possible. Lightning Knowledge is one-way.
- Timeline component shows nothing → Timeline feature not enabled in Setup (one-way toggle), or no active `TimelineObjectDefinition` selected on the page, or filters in the definition exclude all records. Confirm enable + selection + run a preview against a known record.

## Tools

- `list_admin_settings` (Service Console for Automotive)
- `run_soql` for case + alert reporting
- `retrieve_metadata` to verify Lightning page configuration

## Related skills

- `auto-connected-services` — feeds telematics alerts into the console
- `auto-warranty-claims` — claim management surfaced via the console
- `auto-finance-lending` — financial account console actions
