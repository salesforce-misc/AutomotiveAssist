---
name: auto-user-management
description: Guides Salesforce Automotive Cloud user provisioning — profiles, permission set licenses (PSLs), permission sets, role hierarchy, sharing model, OWD recommendations. Use when the user wants to set up users, assign licenses, configure access, or audit who can do what in the org.
---

# Automotive Cloud User Management

You guide user setup for Automotive Cloud orgs. Automotive ships **no default profiles** — clone Standard User and customize.

## Permission Set License hierarchy

`Automotive Foundation User` is **mandatory** for all internal app users. Layer feature-specific PSLs on top.

### Internal PSLs (PDF p. 45-51)

| PSL | When to assign |
|---|---|
| Automotive Foundation User | All internal users (mandatory) |
| ARC Access | Anyone needing the ARC Relationship Graph component |
| Group Membership | Anyone working with households / dealer groups |
| Industries Visit | Visit users (or Partner Visit Management instead) |
| Partner Visit Management | District/territory managers running visits |
| Partner Lead Management | Sales / dealer-distribution users |
| Partner Performance Management | Dealers submitting retail delivery + rebate claims |
| Vehicle Connected Services | Telematics + remote actions |
| Actionable Event Orchestration Designer / Runtime | AEO authors / runtime |
| Vehicle and Asset Finance | Captive finance agents |
| Vehicle and Asset Lending | Underwriters; can also assign `Use Vehicle and Asset Lending Underwriter Console` permission |
| Vehicle and Asset Lending for Agents | Agent-assisted intake submissions |
| Vehicle And Asset Lending Edit Read-Only Party Related Records | Override read-only on sensitive party data |
| Industry Service Excellence | Service Console for Automotive users |
| Service Lightning Knowledge Manager | Knowledge authors |
| Action Plans | Anyone using Action Plan templates |
| Automotive Scheduler | Internal users scheduling test drives + service appointments |
| Salesforce Scheduler | Internal users acting as service resources |
| Criteria-Based Search and Filter | Inventory search |
| Data Pipelines Add On / Base User | Data Processing Engine authors |
| Warranty Lifecycle Management Psl | Warranty term authors |
| Claims Management Foundation | Claim adjudicators |
| Fleet Management | Fleet ops |
| Omnistudio + Omnistudio User | Anyone touching FlexCards / OmniScripts |
| Service Process Studio + Context Service Admin/Runtime | Connected Services + Lending designers |
| Business Rules Engine Designer / Runtime | BRE designers / runtime |
| Stage Management Design User | Stage definitions for Compliant Data Sharing |
| Salesforce Pricing Design Time User | Pricing procedures |
| CRM Analytics Plus and Manufacturing Analytics Apps | Analytics for Automotive dashboard users |
| Manufacturing Sales Agreements Psl | Sales Agreement users |
| Manufacturing Advanced Account Forecast Psl | Advanced Account Forecasting |
| Manufacturing Account Manager Targets Psl | Account Manager Targets |
| Program Based Business Psl for Manufacturing Cloud | Program Based Business |
| Product Catalog Management Designer | Product catalog authors |

### Experience Cloud PSLs

`Automotive Foundation for Experience Cloud` is mandatory for external users. Layer:
- Partner Lead/Performance/Visit/Warranty/Fleet for Experience Cloud
- Vehicle and Asset Finance Foundation for Experience Cloud
- Vehicle and Asset Lending for Partners / for Customers
- Criteria Based Search and Filter for Experience Cloud
- Automotive Scheduler for Experience Cloud
- Action Plans
- Group Membership / Business Milestones and Life Events Access / ARC Access (as needed)

## Profile setup checklist (PDF p. 55)

1. Clone Standard User.
2. Object Permissions: at minimum **Read** on every Automotive object the user touches.
3. Custom App Settings → Visible: **Automotive**, **Service Console for Automotive**, **Partner Visits**, **Warranty Lifecycle Management**.
4. User License: typically Salesforce, Chatter External, or Salesforce Platform — gate determines which profiles are valid.
5. For Knowledge access: enable `Knowledge User` checkbox.

## OWD recommendations (PDF p. 59-62)

Apply this minimum baseline (full table in `JOURNEY_MAP.md` §3):

- **Public Read/Write internal**: Account, Asset, Visit, Action Plan, Action Plan Template, Assessment Indicator Definition, Branch Unit, Opportunity, Product, Product Item, Serialized Product, Warranty Term
- **Public Read/Write internal + external**: Account, Opportunity, Product Item, Serialized Product, Visit, Action Plan, Action Plan Template, Assessment Indicator Definition, Warranty Term
- **Controlled By Parent**: Contact, Order, Person Life Event, Business Milestone
- **Private**: Account Account Relationship, Branch Unit (external), Business Brand, Party Role Relationship, Product Request, Product Transfer, Program Rebate Type, Rebate Claim, Record Alert, Sales Agreement (external)
- **Public Read Only**: User (internal), Service Resource, Service Territory, Work Type, Work Type Group, Geo Country, Location, Generic Visit Task, Generic Visit Task Context, Product Related Material

## Tools

- `list_users` — filter by profile, PSL, territory; find users without territories or PSLs
- `list_permission_sets` — PSL capacity + assignment counts
- `assign_permission_set` / `unassign_permission_set`
- `check_user_config` — run the user-management portion of `health_check`

## Common pitfalls

- Forgetting to mark the Automotive apps Visible on a profile → blank Lightning experience.
- Assigning Vehicle Connected Services without the upstream Service Process Studio / Context Service / Omnistudio / MuleSoft Anypoint Platform PSLs → predefined components fail.
- Enabling Person Accounts before setting Contact OWD to Controlled By Parent (or both Private) → toggle is greyed out in Setup.
- Granting Vehicle and Asset Lending without Stage Management Design User → Compliant Data Sharing stages can't be authored.
