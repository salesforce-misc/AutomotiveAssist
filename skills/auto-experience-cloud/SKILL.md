---
name: auto-experience-cloud
description: Guides Experience Cloud setup for Automotive — Automotive template, partner / customer portals, external user profiles, Experience Cloud PSLs, sharing sets. Use when building dealer or customer-facing portals.
---

# Automotive Cloud Experience Cloud

Use the **Automotive template** in Experience Cloud to build feature-rich partner (dealer / supplier) and customer (driver / owner) portals.

## Setup

1. Setup → Digital Experiences → **Enable Digital Experiences**.
2. Create Experience Cloud sites using the **Automotive template**.
3. Create partner / customer user profiles.
4. Assign external PSLs (mandatory: `Automotive Foundation for Experience Cloud`).
5. Layer feature PSLs (see `auto-user-management`):
   - `Partner Lead Management for Experience Cloud`
   - `Partner Performance Management for Experience Cloud`
   - `Partner Visit Management for Experience Cloud`
   - `Vehicle and Asset Finance Foundation for Experience Cloud`
   - `Vehicle and Asset Lending for Partners` / `for Customers`
   - `Criteria Based Search and Filter for Experience Cloud`
   - `Fleet Management for Experience Cloud`
   - `Automotive Scheduler for Experience Cloud`
   - `Action Plans`, `Group Membership`, `Business Milestones and Life Events Access`, `ARC Access`
   - `Warranty Management For Experience Cloud`
   - `Warranty Supplier Recovery for Experience Cloud`
   - `Manufacturing Sales Agreements for Community`
   - `Manufacturing Advanced Account Forecast For Community`
   - `Rebate Management for Experience Cloud Users` (requires add-on)
6. Configure sharing sets to grant external users access to relevant records.
7. Customize the site to surface only the features partners / customers need.

## Common patterns

| Audience | Typical PSLs | Capabilities |
|---|---|---|
| Dealer principal | Foundation + Partner Lead/Performance/Visit + Warranty Mgmt | Manage leads, submit retail delivery reports, run visits, file claims |
| Dealer service exec | Foundation + Vehicle and Asset Finance + Warranty | Track service contracts, file claims, view loans |
| Customer | Foundation + Automotive Scheduler + Vehicle and Asset Lending for Customers | Schedule service appointments, view household, apply for financing |
| Supplier | Foundation + Warranty Supplier Recovery | Adjudicate supplier recovery claims |

## OWD considerations

External user OWDs differ from internal in several places (PDF p. 59-62):
- `Asset` external = Private (dealers only see assets they're related to).
- `Sales Agreement` external = Private.
- `Case` external = Private.
- `User` external = Private.

Sharing sets / sharing rules grant additional visibility above the OWD baseline.

## Common pitfalls

- Forgetting `Automotive Foundation for Experience Cloud` PSL → external users see nothing.
- Sharing set not configured → external user has the right PSL but no records visible.
- Public Knowledge articles missing → dealers/customers can't see KB content.

## Tools

- `list_admin_settings` (Digital Experiences)
- `describe_sobject` to verify external object visibility
