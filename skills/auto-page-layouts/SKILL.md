---
name: auto-page-layouts
description: Guides Automotive Cloud page layouts and record types — mandatory Vehicle/Parts splits on Product and Asset; Lightning record pages for Account, Vehicle, Lead, Opportunity, Business Profile; Prework Estimation Lightning page; Visit and Task layouts. Use when configuring page layouts, adding components like Events & Milestones, Timeline, ARC, Bundle Tree, or when authoring / inspecting Timeline configurations (`TimelineObjectDefinition`).
---

# Automotive Cloud Page Layouts & Record Types

Most Automotive Cloud features assume specific page-layout components exist. This skill maps each per-object layout requirement.

## Mandatory record-type splits

- **Product** — Vehicle / Parts record types with separate layouts. (See `auto-product-management`.)
- **Asset** — Vehicle / Parts record types with separate layouts. (See `auto-vehicle-asset-fleet`.)

## Per-object layout requirements

### Account
Related lists: Party Relationship Groups, Associated Locations, Contacts, Engagement Interactions, Sales Agreements, Assets, Asset Account Participants, Vehicles, Visits, Service Appointments.
Components: **Events and Milestones** (right sidebar), **ARC Relationship Graph** (right sidebar — last).

### Business Profile
Fields: Business Partner Type, External Reference Number, Business Partner Registered Name, Service Type, Service Territory, Business Partner Code, Region Name (with org-specific picklist values).

### Lead
Fields: **Earliest Interest Date**, **Latest Interest Date**.
Related lists: Products (Lead Line Items), Preferred Sellers (Lead Preferred Sellers), Service Appointments.
Buttons: **Schedule Test Drive** (replace default Schedule Appointment quick action).
Components: Related Lists (right sidebar), **Interest Tags** (right sidebar).

### Opportunity
Same shape as Lead — Products, Preferred Sellers, Service Appointments related lists. Schedule Test Drive button. Related Lists + Interest Tags components.

### Product (Vehicle RT)
Fields: Business Brand, Make Name, Model Name, Model Year, Version Name, Vehicle Trim Type.

### Product (Parts RT)
Fields: Harmonized System Code, Harmonized Tariff Schedule Code, Manufacturer Short Name, Manufacturer Part Number, Product Line Code, Product Category Code, Universal Product Code, Availability Date, Discontinued Date, Environmental Protection Regulation Compliant, Certified.

### Product (both layouts)
Related lists: Assets, Product Warranty Terms, Product Items, Price Books, Child Products, Parent Products.
Component: **Bundle Tree** (for product bundles).

### Asset (Vehicle RT)
Fields: Vehicle, Asset Level.

### Asset (Parts RT)
Fields: Asset Level, Serial Number, Root Asset, Parent Asset, Install Date.

### Asset (both layouts)
Related lists: Primary Assets, Related Assets, Child Assets, Cases, Serialized Products (Parts only), Asset Warranties.
Quick action: **View Asset Hierarchy**.

### Vehicle
Components: Events and Milestones, Timeline, Record Alerts, Interest Tags, Actionable Relationship Center, Relationship Cards.
Use Vehicle layouts to surface telematics + maintenance + integration data.

### Visit + Task
Two separate layouts: one for sales managers (planning/scheduling), one for evaluation officers (execution/audit). Mobile-optimized (Partner Visits app).

### Prework Estimation
Create a Lightning page for the prework estimation mobile app — used by service technicians to create orders + share PDFs with customers/dealers.

## Components used across Automotive

| Component | Where |
|---|---|
| Events and Milestones | Account, Vehicle, Asset |
| Timeline | Account, Asset, Contact, Financial Account, Lead, Vehicle (any standard/custom object that meets schema) |
| Record Alerts | Account, Vehicle, Asset |
| Interest Tags | Lead, Opportunity, Account, Vehicle |
| Relationship Cards | Account, Vehicle |
| ARC Relationship Graph | Account, Vehicle, Contact (last) |
| Bundle Tree | Product (Vehicle RT) |
| Action Launcher | Financial Account, Account |
| Audit Trail | Service Console for Automotive |
| Identity Verification | Service Console for Automotive |
| Einstein Summary | Vehicle, Asset |

## Common pitfalls

- Forgetting record types → layouts get cluttered, validation rules fire incorrectly.
- ARC added before relationship objects exist → graph renders empty.
- Schedule Appointment quick action not removed from Lead/Opportunity → wrong scheduler flow.
- Mobile-app layouts not configured separately → field reps see desktop-only fields.
- Activating Lightning page but caching means users see old layout for ~15 min.

## Timeline configuration

Timeline is one of the **three irreversible toggles** (Setup → Timeline → Enable). Once enabled, it cannot be turned off. It is also a hard prerequisite for the Captive Finance / Vehicle and Asset Finance "Additional Components" (predefined Account + Financial Account console timelines).

Author timelines in Setup → Timeline → New Timeline:
- Pick a **base object** (Account, Asset, Contact, FinancialAccount, Lead, Vehicle, or any standard/custom object).
- Optionally enable **Show Age** with a base-object date field.
- Add up to **5 related objects** per base (each with up to 5 record types). For each: Parent Object (often `Use Timeline Object`), Related Object, joining lookup field, filters, Title / Subtitle / Timestamp fields, extra fields + related lists.
- **Save & Activate**, then **Preview Timeline** against a representative record.

Surface on a record page: Edit Page → drag **Timeline** component → property panel → Select up to **5** active configurations.

User permission: `Customize Application` + read/create on every referenced object/field.

Underlying Tooling-API entity: `TimelineObjectDefinition` (with `Definition` JSON, `BaseObject`, `IsActive`, etc.). Enumerate with:

```sql
SELECT DeveloperName, MasterLabel, BaseObject, IsActive
FROM TimelineObjectDefinition
ORDER BY BaseObject, IsActive DESC
```

Full configuration playbook + recommended related-object sets for Vehicle / Contact timelines: [`knowledge/modules/page-layouts/timeline-configuration.md`](../../knowledge/modules/page-layouts/timeline-configuration.md).

## Tools

- `retrieve_metadata` for page layouts + record types
- `deploy_metadata` for batch layout updates
- `list_auto_actions` to inspect quick / custom actions
- Tooling SOQL on `TimelineObjectDefinition` to inspect existing timeline configurations (do **not** use `run_soql` — Timeline is Tooling-API metadata; route through `retrieve_metadata` or a direct Tooling query)
