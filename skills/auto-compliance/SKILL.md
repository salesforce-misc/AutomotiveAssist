---
name: auto-compliance
description: Guides compliance configuration in Automotive Cloud — Compliant Data Sharing for stage-based access (Vehicle and Asset Lending), Identity Verification flows, fair-lending controls, Audit Trail. Use when configuring lending compliance, identity verification, or audit trails.
---

# Automotive Cloud Compliance

Three primary compliance surfaces:

## 1. Compliant Data Sharing (Vehicle and Asset Lending)

Stage-based access control for sensitive lending data. As an application moves through stages (Intake → Underwriting → Decisioning → Proposal), different roles see different fields/records.

### Setup

1. PSL: `Stage Management Design User`.
2. Define **Stage Definitions** — the discrete stages of the lending lifecycle.
3. Define **Stage Transitions** — allowed moves between stages and the field-level visibility for each transition.
4. Configure fulfillment steps — automatic record updates on transition.
5. Compliant Data Sharing PSL on users authoring the stages.

## 2. Identity Verification

Predefined Identity Verification flows ship with **Service Console for Automotive**. Verify customer identity at the start of any service interaction.

- Enable: Service Console for Automotive must be enabled.
- Assign: `Industry Service Excellence` PSL.
- Surface in Service Console as a predefined component.

## 3. Audit Trail

`Industry Service Excellence` PSL grants access to **Audit Trail** — view of changes for compliance reviews.

## Fair-Lending controls (Vehicle and Asset Lending)

- All flows enforce fair-lending regulations.
- Read-only access to sensitive party records by default.
- `Vehicle And Asset Lending Edit Read-Only Party Related Records` PSL grants override access to specific authorized users.

## Common pitfalls

- Skipping Stage Management Design User PSL → can't author Compliant Data Sharing stages.
- Granting `Edit Read-Only Party Related Records` to too many users → fair-lending compliance risk.
- Identity Verification not configured → Service Console renders without the verification step.
- Audit Trail not surfaced in console → reviewers can't see change history.

## Tools

- `list_admin_settings` (Compliant Data Sharing, Service Console for Automotive)
- `run_soql` to verify Audit Trail entries
- `describe_sobject` for compliance objects
