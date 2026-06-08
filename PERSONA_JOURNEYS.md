# Automotive Cloud — Persona-Driven Setup Journeys

> Companion to `JOURNEY_MAP.md`. The journey map answers *"what is the canonical Auto Cloud blueprint?"*; this doc answers *"if I am persona X, what do I do tomorrow morning?"*.
>
> **Personas are taken verbatim from Salesforce's official "Key Roles and Responsibilities in Automotive Cloud" article** (`help.salesforce.com → ind.auto_roles_responsibilities.htm`). Roles split into **OEM implementations** and **Dealer implementations**. The role labels and responsibility text below are quoted directly; the setup journeys, module footprints, plugin-skill mappings, and failure modes are this plugin's contribution.
>
> Sources: Salesforce help — Key Roles and Responsibilities in Automotive Cloud · `JOURNEY_MAP.md` (26-row journey map + 43-step setup sequence) · `documentation/automotive_cloud_5-4-2026.pdf` · skills under `skills/auto-*/SKILL.md`.
> Last revised: 2026-06-04.

---

## How to read this doc

Each persona section contains:

1. **Role label** — exact name from the Salesforce help article.
2. **Salesforce-defined responsibility** — quoted from the help article.
3. **Module footprint** — which of the 26 Auto Cloud modules they touch (✅ owns / 🤝 collaborates / — out of scope).
4. **Setup journey** — ordered steps mapped to `JOURNEY_MAP.md` Part 2 numbers, the plugin skill / command to invoke, and irreversibility flags.
5. **Daily-loop journey** — what they do *after* setup is done.
6. **Failure modes** — common ways they get stuck.
7. **Plugin agent + skills** — which agent / skills the plugin should auto-invoke.

**Irreversible markers** (carried verbatim from `JOURNEY_MAP.md`):

- 🔒 **Person Accounts** — file support ticket; OWD prerequisites.
- 🔒 **Lightning Knowledge** — one-way once enabled.
- 🔒 **Timeline** — one-way once enabled.
- 🔒 **Vehicle and Asset Finance Additional Components** — depends on Timeline being on.
- ⚠️ **ARC is always last** — every relationship object, RT, and component must exist first.

---

## Persona index (Salesforce-defined)

### OEM implementations

| # | Role | Plugin agent | Primary skill cluster |
|---|---|---|---|
| 1 | [Dealer Performance Manager / Dealer Principal](#1-dealer-performance-manager--dealer-principal) | `auto-consultant` | Partner Performance, Visits, Rebates |
| 2 | [Chief Experience Officer](#2-chief-experience-officer) | `auto-consultant` | Data Cloud / Analytics, Agentforce, Experience Cloud |
| 3 | [Customer Service Operations Manager](#3-customer-service-operations-manager) | `auto-admin` | Service Console, Action Plans, Vehicle Console |
| 4 | [Territory Sales Manager](#4-territory-sales-manager) | `auto-admin` | Partner Lead Mgmt, Forecasting, Sales Agreements |
| 5 | [Technical Service Specialist](#5-technical-service-specialist) | `auto-developer` *(occasionally)* | Knowledge, Connected Services, Warranty/Claims |
| 6 | [Service Representative](#6-service-representative-oem) | `auto-admin` | Service Console, Visits, Claims |

> The Salesforce help table for OEM implementations lists 6 distinct ROLE rows. Some larger OEMs split further internally; this doc keeps to the article's exact list.

### Dealer implementations

| # | Role | Plugin agent | Primary skill cluster |
|---|---|---|---|
| 7 | [Dealer Representative](#7-dealer-representative) | `auto-admin` *(Experience Cloud focus)* | Inventory, Leads, Test Drives |
| 8 | [Dealer Service Executive](#8-dealer-service-executive) | `auto-admin` | Service schedules, Inventory transfers, Warranty |
| 9 | [Financial Officer](#9-financial-officer) | `auto-consultant` *(`auto-compliance` accent)* | Captive Finance, Rebates, Sales Agreements |
| 10 | [Service Agent](#10-service-agent) | `auto-admin` | Service Console, Vehicle history, Parts |
| 11 | [Sales and Operations Manager](#11-sales-and-operations-manager) | `auto-consultant` | Inventory, Forecasting, KPIs |

---

## Cross-cutting setup spine (every persona depends on this)

`JOURNEY_MAP.md` Part 2 defines a 43-step dependency-ordered setup sequence. The **first 11 steps** apply before any persona-specific configuration:

1. Permission Set Licenses (Foundation mandatory; layer per-feature PSLs)
2. Profiles (clone Standard; mark Auto apps Visible)
3. 🔒 **Person Accounts**
4. Account Record Types (Business + Person)
5. Contact (page layout, sharing)
6. Account Contact Relationship
7. Account Account Relationship
8. Contact Contact Relationship + Party Role Relationship
9. Party Relationship Group (`Group Membership` PSL + setting)
10. Business Profile + Internal Organization Unit + Supplier
11. **Product Record Types (Vehicle / Parts)** + Product Page Layouts

Steps 12–42 are module-specific and live under each persona below. Step 43 (⚠️ ARC) is always last.

---

# OEM Implementations

---

## 1. Dealer Performance Manager / Dealer Principal

**Salesforce-defined responsibility.** *"Manages multiple dealers and tracks compliance and performance. Dealer principals assess key performance metrics (KPIs) such as lead conversion rate, new vehicle sales, sales agreements compliance, age of inventory, and revenue margins. Based on the analysis, they can plan dealer visits, review incentive structures, organize salesperson trainings, and revise targets."*

### Module footprint

| Module | Status | Why |
|---|:---:|---|
| §14 Inventory & Dealers | ✅ | Age-of-inventory KPI |
| §17 Partner Visits | ✅ | Plan dealer visits, KPI assessment |
| §18 Rebates & Retail Sales | ✅ | Incentive structures, retail delivery reports |
| §24 Reports & Analytics | ✅ | KPI dashboards |
| §8 Leads & Opportunities | 🤝 | Lead conversion KPI |
| §32 Sales Agreements | ✅ | Sales agreement compliance |
| §21 Data Cloud / Analytics | 🤝 | Dealer Performance / OEM Performance dashboards |

### Setup journey

| Step | Action | Plugin surface |
|---|---|---|
| Spine 1–11 | Foundation as above | `/auto:configure-permissions`, `/auto:configure-stakeholders` |
| 31 | Partner Visit Mgmt + Action Plans + KPIs (Industries Visit + Partner Visit Management PSLs) | `/auto:configure-visits` |
| 32 | Partner Performance Mgmt — `Sales Agreement`, `Account Manager Target`, `Manufacturing Program` | `/auto:configure-dealer-performance` |
| 38 | Page Layouts — pin **KPIs** + **Visits** + **Sales Agreements** related lists on Account/Business Profile | `/auto:configure-page-layouts` |
| 42 | CRM Analytics — Analytics for Automotive (Dealer Performance / OEM Performance dashboards) | `/auto:configure-analytics` |
| 43 | ⚠️ ARC — `Dealer_Hierarchy` graph on Account | `/auto:configure-arc` |

### Daily-loop journey

- Run **Dealer Performance** dashboards weekly; investigate red KPIs.
- Plan visits via Partner Visits app → assign `ActionPlanTemplate` per visit type.
- Review Sales Agreement compliance — query `SalesAgreement` + `SalesAgreementProductSchedule` for variance vs. plan.
- Review rebate / incentive proposals before activation.

### Failure modes

- Visit list is empty → `BusinessProfile.ServiceTerritoryId` not populated for the dealer.
- KPI tile reads zero → `Generic Visit Key Performance Indicator` rows missing despite `Assessment Indicator Definition` existing.
- Dealer hierarchy graph empty → `AccountAccountRelation` rows haven't been created with the right role.

### Plugin agent + skills

`auto-consultant` · `auto-partner-visits` · `auto-rebates` · `auto-data-cloud-analytics` · `auto-reporting-analytics`.

---

## 2. Chief Experience Officer

**Salesforce-defined responsibility.** *"Improves dealer experience and increase customer loyalty. Chief experience officers work closely with marketing teams to segment leads and create personalized journeys and offers, engage dealers with relevant and timely information about vehicles, and communicate critical recalls and service schedules."*

### Module footprint

| Module | Status |
|---|:---:|
| §21 Data Cloud & Analytics | ✅ |
| §20 Agentforce | ✅ |
| §19 Experience Cloud Sites | ✅ |
| §13 Service Console (Recalls) | ✅ |
| §10 Vehicle Connected Services (recall events via AEO) | 🤝 |
| §8 Leads & Opportunities (segmentation) | 🤝 |

### Setup journey

| Step | Action | Plugin surface |
|---|---|---|
| Spine 1–11 | Foundation | as above |
| 36 | Topics + Interest Tags — drive marketing segmentation | `auto-service-console` |
| 37 | 🔒 Timeline + Events & Milestones + Record Alerts on Vehicle / Account | `/auto:configure-page-layouts` |
| 39 | Experience Cloud (Automotive template) — customer + dealer portals | `/auto:configure-experience-site` |
| 40 | Agentforce — topics for recalls / service schedule outreach | `auto-agentforce` |
| 41 | Data Cloud + Automotive Data Kit — calculated insights, segments | `auto-data-cloud-analytics` |
| 42 | CRM Analytics — Customer & Dealer experience dashboards | `/auto:configure-analytics` |

### Daily-loop journey

- Approve customer-journey segments before campaign launch.
- Trigger recall communications via AEO → Record Alert → Vehicle dashboard message.
- Review Agentforce conversation transcripts for sentiment / NPS issues.

### Failure modes

- Recall messages don't reach dashboards → `ActionableEventOrchestration.IsActive=false` or wrong `ContextDefinitionName`.
- Segments empty → Data Cloud calculated insights not built / refreshed.
- Experience Cloud branding inconsistent across sites → no shared site template.

### Plugin agent + skills

`auto-consultant` · `auto-data-cloud-analytics` · `auto-agentforce` · `auto-experience-cloud` · `auto-connected-services`.

---

## 3. Customer Service Operations Manager

**Salesforce-defined responsibility.** *"Provides timely support to customers and dealers. Service operations managers contextualize customer interactions based on information gathered from the vehicle console and service console. They can create action plans and follow up on interactions, cases, and milestones."*

### Module footprint

| Module | Status |
|---|:---:|
| §13 Service Console & Processes | ✅ |
| §9 Vehicles, Assets, Fleets (Vehicle console) | 🤝 |
| §17 Partner Visits — Action Plans (cross-object) | ✅ |
| §10 Connected Services — case handoff | 🤝 |
| §15 Warranty & Claims — service-related | 🤝 |

### Setup journey

| Step | Action | Plugin surface | Irrev. |
|---|---|---|:---:|
| Spine 1–11 | Foundation | as above | |
| 35 | 🔒 Service Console for Automotive (enables Lightning Knowledge) | `/auto:configure-service-console` | 🔒 |
| 31 | Action Plans (target objects: Case, Visit, AssetMilestone, Vehicle) | `/auto:configure-visits` | |
| 38 | Page Layouts — Vehicle console, Service console with Timeline + Record Alerts + Action Launcher + Identity Verification | `/auto:configure-page-layouts` | |
| 30 | Actionable Event Orchestration — auto-create Cases from DTC events | `/auto:configure-connected-services` | |

### Daily-loop journey

- Triage incoming Cases via Service Console queues.
- Assign / re-target Action Plans on cases that miss SLA milestones.
- Review Vehicle console history before escalations.
- Approve new ActionPlanTemplates before they're activated.

### Failure modes

- Action Launcher missing → required PSL not assigned to the user.
- Vehicle console empty → `Asset.VehicleId` not populated, so Vehicle history doesn't render.
- Cases not created from DTCs → AEO orchestration mapping mismatch.

### Plugin agent + skills

`auto-admin` · `auto-service-console` · `auto-partner-visits` *(for Action Plan templates)* · `auto-connected-services` · `auto-vehicle-asset-fleet`.

---

## 4. Territory Sales Manager

**Salesforce-defined responsibility.** *"Leads the sales team and ensure that company goals are met. Territory sales managers, such as district sales managers, are responsible for planning the list of sales KPIs that help in evaluating dealer sales, conducting sales training, and setting up sales targets. They're also involved in vehicle and spares forecasting and managing new programs for vehicles and spares."*

### Module footprint

| Module | Status |
|---|:---:|
| §8 Leads & Opportunities | ✅ |
| §32 Partner Performance Mgmt — Account Manager Targets, Manufacturing Programs | ✅ |
| §17 Partner Visits | ✅ |
| §24 Reports & Analytics — Forecasting (Advanced Account Forecasting) | ✅ |
| §14 Inventory — vehicle & spares forecast | 🤝 |

### Setup journey

| Step | Action | Plugin surface |
|---|---|---|
| Spine 1–11 | Foundation | as above |
| 17–18 | Partner Lead Mgmt → Lead Line Item / Lead Preferred Seller / Opportunity Preferred Seller | `/auto:configure-leads` |
| 32 | Account Manager Target + Manufacturing Program records per program | `/auto:configure-dealer-performance` |
| 31 | Partner Visit Templates for sales training visits | `/auto:configure-visits` |
| 24 | Advanced Account Forecasting | (Setup → Forecast Hierarchy) |

### Daily-loop journey

- Set monthly / quarterly Account Manager Targets per dealer.
- Run Lead conversion analytics; intervene on stagnant Leads.
- Plan training visits via Partner Visits app.
- Review forecasted vs. actual on Advanced Account Forecasting.

### Failure modes

- Lead conversion drops industry data — happens when Partner Lead Management default mappings are disabled.
- Forecast misalignment → Manufacturing Program not linked to the right dealer territory.
- Schedule Test Drive button missing on Lead → button replacement step skipped during page-layout setup.

### Plugin agent + skills

`auto-admin` · `auto-leads-opportunities` · `auto-partner-visits` · `auto-reporting-analytics`.

---

## 5. Technical Service Specialist

**Salesforce-defined responsibility.** *"Provides timely support to customers and dealers on how to effectively service and repair vehicles. Technical service specialists analyze knowledge base information, checks the service history of a vehicle, and telematics information to plan repairs and scheduled maintenance. They're also responsible for providing information on compatible parts and accessories for vehicles, and suggesting upgrades and replacements."*

### Module footprint

| Module | Status |
|---|:---:|
| §13 Lightning Knowledge | ✅ |
| §10 Vehicle Connected Services (telematics) | ✅ |
| §15 Warranty & Claims | 🤝 |
| §9 Vehicles, Assets, Fleets — service history | ✅ |
| §14 Inventory — compatible parts | ✅ |

### Setup journey

| Step | Action | Plugin surface | Irrev. |
|---|---|---|:---:|
| Spine 1–11 | Foundation | as above | |
| 35 | 🔒 Lightning Knowledge enable | `/auto:configure-service-console` | 🔒 |
| 29–30 | Vehicle Connected Services + AEO — telematics ingestion | `/auto:configure-connected-services` | |
| 26–27 | Warranty Lifecycle Mgmt + Claims Mgmt Foundation — adjudication context | `/auto:configure-warranty` | |
| 22 | Inventory — `Product Required` / `Product Consumed` | `/auto:configure-inventory` | |

### Daily-loop journey

- Review telematics-driven Cases; recommend repairs.
- Cross-check parts compatibility via `Product Related Material` / `Product Related Component`.
- Author / refine Knowledge articles on common faults — keyed to `ProductFaultCode` + `ProductLaborCode`.
- Suggest upgrades via Vehicle Recommendation Console (where deployed).

### Failure modes

- Telematics events arrive but no Knowledge link → Knowledge articles not associated with `ProductFaultCode`.
- Recommended parts list empty → `Product Related Material` rows missing.
- Service history fragmentary → Asset Milestone records not generated by service workflows.

### Plugin agent + skills

`auto-developer` *(when configuring AEO + telematics)* / `auto-admin` *(daily ops)* · `auto-connected-services` · `auto-warranty-claims` · `auto-vehicle-asset-fleet` · `auto-inventory-dealer`.

---

## 6. Service Representative *(OEM)*

**Salesforce-defined responsibility.** *"Manages communication with dealers and assist with product knowledge, procedures, and sales queries. Service representatives manage incoming and outgoing communication with dealer representatives. They can resolve queries related to claims, vehicle deliveries, parts replenishment, or product knowledge. They also upsell products and plan visits to dealer locations to carry out audit tasks."*

### Module footprint

| Module | Status |
|---|:---:|
| §13 Service Console | ✅ |
| §15 Warranty & Claims (dealer-side queries) | ✅ |
| §17 Partner Visits — audit visits | ✅ |
| §14 Inventory — parts replenishment | 🤝 |
| §19 Experience Cloud — dealer portal coordination | 🤝 |

### Setup journey

| Step | Action | Plugin surface |
|---|---|---|
| Spine 1–11 | Foundation | as above |
| 31 | Partner Visit — dealer audit ActionPlanTemplates | `/auto:configure-visits` |
| 35 | Service Console for Automotive | `/auto:configure-service-console` |
| 27 | Claims Mgmt Foundation — adjudicate dealer claims | `/auto:configure-warranty` |
| 22 | Inventory — Product Transfer + Product Request flows for parts replenishment | `/auto:configure-inventory` |

### Daily-loop journey

- Resolve dealer Cases routed to OEM service rep queue.
- Plan audit visits with `ActionPlanTemplate` (audit checklist).
- Approve dealer parts replenishment requests.
- Upsell campaigns triggered by service-window data.

### Failure modes

- Dealer not routed to right rep queue → omni-channel routing rules misconfigured.
- Audit visit checklist missing → wrong `ActionPlanTemplate.TargetEntityType`.
- Replenishment loop incomplete → missing `Product Transfer State` transitions.

### Plugin agent + skills

`auto-admin` · `auto-service-console` · `auto-partner-visits` · `auto-warranty-claims` · `auto-inventory-dealer`.

---

# Dealer Implementations

---

## 7. Dealer Representative

**Salesforce-defined responsibility.** *"Tracks sales, inventory, and pipeline for a specific dealership. Dealer representatives have visibility into vehicle inventory, leads, sales, service, and spare parts sales. They follow up on leads, organize test drives, book appointments for customers, and offer right vehicles to the right customers at the right time."*

### Module footprint

| Module | Status |
|---|:---:|
| §14 Inventory & Dealers | ✅ |
| §8 Leads & Opportunities | ✅ |
| §12 Test Drives & Service Appointments | ✅ |
| §19 Experience Cloud — Dealer Portal | ✅ |

### Setup journey

| Step | Action | Plugin surface |
|---|---|---|
| Spine 1–11 | Foundation | as above |
| 17–18 | Lead Line Item, Lead Preferred Seller, Opportunity Preferred Seller, **Schedule Test Drive button** on Lead/Opportunity | `/auto:configure-leads` |
| 19–20 | Salesforce Scheduler + Automotive Scheduler + Multi-Resource Scheduling | `/auto:configure-scheduler` |
| 21–22 | Inventory + Criteria-Based Search | `/auto:configure-inventory` |
| 39 | Experience Cloud — Dealer Portal (Automotive template + appropriate external PSLs) | `/auto:configure-experience-site` |

### Daily-loop journey

- Pick up new Leads / Lead Line Items in the morning queue.
- Use Criteria-Based Search to match customer preferences to inventory.
- Book test drives — Multi-Resource Scheduling reserves both agent + vehicle.
- Convert Lead → Opportunity preserving line items + preferred sellers.

### Failure modes

- Test drive booking fails to reserve a vehicle → service resource not modeled as `Asset` type resource.
- Inventory search returns nothing → DPE template + `VehicleSearchableField` not configured.
- Lead conversion drops Vehicle context → default Partner Lead Management mappings disabled.

### Plugin agent + skills

`auto-admin` *(Experience Cloud focus)* · `auto-leads-opportunities` · `auto-scheduler` · `auto-inventory-dealer` · `auto-experience-cloud`.

---

## 8. Dealer Service Executive

**Salesforce-defined responsibility.** *"Offers in-depth advice on service and maintenance strategies to maximize customer retention and drive profitability. Dealer service executives view service schedules that are shared by the OEM and by the customers. They procure parts and raise requests for product transfers from other dealerships to fulfill orders for delivery or installation. They also track warranties and come up with periodic plans for body work, cleaning, and maintenance."*

### Module footprint

| Module | Status |
|---|:---:|
| §12 Service Appointments | ✅ |
| §14 Inventory — Product Transfer / Product Request | ✅ |
| §15 Warranty (Asset Warranty visibility) | ✅ |
| §13 Service Processes | ✅ |
| §17 Service Action Plans (`ActionPlanTemplate.TargetEntityType=Asset/Vehicle`) | ✅ |

### Setup journey

| Step | Action | Plugin surface |
|---|---|---|
| Spine 1–11 | Foundation | as above |
| 19–20 | Scheduler infrastructure | `/auto:configure-scheduler` |
| 21–22 | Inventory + Product Transfer / Product Request flows | `/auto:configure-inventory` |
| 26 | Warranty Lifecycle Management — Asset Warranty surfacing | `/auto:configure-warranty` |
| 31 | ActionPlanTemplate for periodic body work / cleaning / maintenance | `/auto:configure-visits` |
| 38 | Page Layout — Service Schedule + Asset Warranty + Outstanding Product Transfers on Service Console | `/auto:configure-page-layouts` |

### Daily-loop journey

- Monitor service schedule shared by OEM + customer-booked appointments.
- Raise `Product Transfer` / `Product Request` for missing parts.
- Track AssetWarranty expiry to drive extended-warranty offers.
- Schedule periodic body work / cleaning via ActionPlan instances.

### Failure modes

- Inter-dealer transfer stalls → `Product Transfer State` workflow incomplete.
- Customer-booked appointments invisible → Experience Cloud + Service Territory mismatch.
- Warranty expiry alerts missing → no `RecordAlertTemplate` on AssetWarranty.

### Plugin agent + skills

`auto-admin` · `auto-scheduler` · `auto-inventory-dealer` · `auto-warranty-claims` · `auto-partner-visits` · `auto-vehicle-asset-fleet`.

---

## 9. Financial Officer

**Salesforce-defined responsibility.** *"Maximizes portfolio and vehicle lifetime value by determining the next best action for a vehicle. Financial officers are responsible for submitting proof-of-sales and retail delivery reports to the OEM. They also help with offering car financing to customers, extending service contracts, and analyzing rebates and incentives offered by the OEM."*

### Module footprint

| Module | Status |
|---|:---:|
| §11 Vehicle Loans & Leases (Captive Finance + V&A Lending) | ✅ |
| §18 Rebates & Retail Sales | ✅ |
| §32 Partner Performance Mgmt — Sales Agreements | 🤝 |
| §25 Compliance & Rollout — Compliant Data Sharing | ✅ |
| §16 Appraisal | 🤝 |

### Setup journey

| Step | Action | Plugin surface | Irrev. |
|---|---|---|:---:|
| Spine 1–11 | Foundation | as above | |
| 23 | 🔒 Timeline → on, then Vehicle and Asset Finance + **Additional Components** | `/auto:configure-finance-console` | 🔒 |
| 24 | Party Financial Asset family | `/auto:configure-finance-console` | |
| 25 | V&A Lending + Compliant Data Sharing + Stage Mgmt | `/auto:configure-finance-console`, `auto-compliance` | |
| 32 | Partner Performance Mgmt — RebateClaim + TransactionJournal | `/auto:configure-dealer-performance` | |
| 18 | Sales Agreement → publish flow guarded by underwriter sign-off | `/auto:configure-leads` *(adjacent)* | |

### Daily-loop journey

- Submit proof-of-sale (RebateClaim) per vehicle delivered.
- Submit retail delivery / parts sale TransactionJournals.
- Originate / extend vehicle financing — drive intake through OmniScript onto `ApplicationForm` chain.
- Analyze rebate / incentive payouts vs. plan.

### Failure modes

- Rebate Claim shared too widely → other dealers see this dealer's payouts.
- Captive Finance Additional Components disabled → balance / timeline tiles missing.
- Compliant Data Sharing stages not aligned with stage definitions → fields visible at wrong stage.

### Plugin agent + skills

`auto-consultant` *(`auto-compliance` accent)* · `auto-finance-lending` · `auto-rebates` · `auto-compliance` · `auto-appraisal-management`.

---

## 10. Service Agent

**Salesforce-defined responsibility.** *"Manages communication with customers in call centers and assist with their queries and complaints. Service agents are the points of contact between customers and service technicians. They make informed recommendations to customers based on the vehicle history, previous cases, and parts requirements."*

### Module footprint

| Module | Status |
|---|:---:|
| §13 Service Console | ✅ |
| §9 Vehicle history + Asset history | ✅ |
| §15 Cases ↔ Claims handoff | 🤝 |
| §14 Parts availability | 🤝 |

### Setup journey

| Step | Action | Plugin surface | Irrev. |
|---|---|---|:---:|
| Spine 1–11 | Foundation | as above | |
| 35 | 🔒 Service Console for Automotive | `/auto:configure-service-console` | 🔒 |
| 38 | Page Layouts — pin Vehicle Console, Timeline, Record Alerts, Identity Verification on Case page | `/auto:configure-page-layouts` | |
| 36 | Topics + Interest Tags — surface previous cases | `auto-service-console` | |
| 13 | Identity Verification flows for caller authentication | `auto-service-console` | |

### Daily-loop journey

- Verify caller identity via Identity Verification flow.
- Pull Vehicle history, previous cases, AssetWarranty, parts compatibility on the Case record.
- Recommend service / parts; book service appointment.
- Hand off complex cases to Technical Service Specialist queue.

### Failure modes

- Vehicle history blank → `Asset.VehicleId` not populated on owner's vehicle.
- Identity verification not configured → calls escalate without verification footprint.
- Parts availability lookup slow → Inventory search not pre-indexed.

### Plugin agent + skills

`auto-admin` · `auto-service-console` · `auto-vehicle-asset-fleet` · `auto-inventory-dealer` · `auto-warranty-claims`.

---

## 11. Sales and Operations Manager

**Salesforce-defined responsibility.** *"Monitors inventory and develop improvement plans for developmental efficiency. Sales and operations managers find ways to increase collaboration between dealers and OEMs, and dealers and customers. They manage budgets and forecasts, perform quality controls and monitor production KPIs, and train and supervise staff."*

### Module footprint

| Module | Status |
|---|:---:|
| §14 Inventory & Dealers | ✅ |
| §24 Reports & Analytics — production KPIs, budget vs. actual | ✅ |
| §32 Sales Agreements | ✅ |
| §17 Partner Visits — staff training | ✅ |
| §22 Industries Flows — process automation | 🤝 |
| §1 Org & License — capacity / governor headroom | 🤝 |

### Setup journey

| Step | Action | Plugin surface |
|---|---|---|
| Spine 1–11 | Foundation | as above |
| 21–22 | Inventory base + DPE template | `/auto:configure-inventory` |
| 32 | Sales Agreements + Manufacturing Program | `/auto:configure-dealer-performance` |
| 31 | Partner Visit ActionPlanTemplates for staff training | `/auto:configure-visits` |
| 42 | CRM Analytics — operations dashboards | `/auto:configure-analytics` |

### Daily-loop journey

- Track production KPIs vs. plan; quality-control failures.
- Manage budget vs. actual on `SalesAgreement` / `SalesAgreementProduct`.
- Run staff training visits; review participation via Partner Visits.
- Drive process improvements through Omnistudio / DPE flows.

### Failure modes

- Inventory KPIs lag actuals → ProductItem not updated by automation.
- Forecast variance unexplained → SalesAgreementProductSchedule not refreshed.
- Training completion data missing → ActionPlan instances not closed.

### Plugin agent + skills

`auto-consultant` *(strategic)* / `auto-admin` *(operational)* · `auto-inventory-dealer` · `auto-reporting-analytics` · `auto-flows-industries`.

---

## Module ↔ Persona ownership matrix

A quick lookup for "which Auto Cloud module does each Salesforce-defined persona own?". (✅ owns · 🤝 collaborates · — out of scope)

| # | Module | DPM/DP | CXO | CSOM | TSM | TSS | SR (OEM) | DR | DSE | FO | SA | S&OM |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | Org & License Setup | — | — | — | — | — | — | — | — | — | — | 🤝 |
| 2 | Permissions & Access | 🤝 | 🤝 | 🤝 | 🤝 | 🤝 | 🤝 | 🤝 | 🤝 | 🤝 | 🤝 | 🤝 |
| 3 | Data Model | 🤝 | 🤝 | 🤝 | 🤝 | 🤝 | 🤝 | 🤝 | 🤝 | 🤝 | 🤝 | 🤝 |
| 4 | ARC | ✅ | 🤝 | 🤝 | 🤝 | — | 🤝 | — | — | — | 🤝 | — |
| 5 | App & Page Layouts | 🤝 | 🤝 | ✅ | 🤝 | — | 🤝 | 🤝 | ✅ | — | ✅ | 🤝 |
| 6 | Stakeholders & Households | ✅ | 🤝 | — | 🤝 | — | 🤝 | 🤝 | — | — | — | — |
| 7 | Product & Vehicle Definition | 🤝 | — | — | 🤝 | ✅ | — | ✅ | — | — | — | 🤝 |
| 8 | Leads & Opportunities | ✅ | 🤝 | — | ✅ | — | — | ✅ | — | 🤝 | — | 🤝 |
| 9 | Vehicles, Assets & Fleets | 🤝 | — | 🤝 | — | ✅ | 🤝 | ✅ | ✅ | 🤝 | ✅ | 🤝 |
| 10 | Vehicle Connected Services | — | 🤝 | 🤝 | — | ✅ | — | — | — | — | — | — |
| 11 | Vehicle Loans & Leases | — | — | — | — | — | — | — | — | ✅ | — | — |
| 12 | Test Drive / Service Appts | 🤝 | — | ✅ | — | 🤝 | ✅ | ✅ | ✅ | — | ✅ | — |
| 13 | Service Console & Processes | — | ✅ | ✅ | — | ✅ | ✅ | — | ✅ | — | ✅ | — |
| 14 | Inventory & Dealers | ✅ | — | — | 🤝 | ✅ | 🤝 | ✅ | ✅ | — | 🤝 | ✅ |
| 15 | Warranty & Claims | — | — | 🤝 | — | 🤝 | ✅ | — | ✅ | — | 🤝 | — |
| 16 | Appraisal | — | — | — | — | — | — | 🤝 | — | 🤝 | — | — |
| 17 | Partner Visits | ✅ | — | ✅ | ✅ | — | ✅ | — | ✅ | — | — | ✅ |
| 18 | Rebates & Retail Sales | ✅ | — | — | — | — | — | — | — | ✅ | — | 🤝 |
| 19 | Experience Cloud Sites | — | ✅ | — | — | — | 🤝 | ✅ | 🤝 | 🤝 | 🤝 | 🤝 |
| 20 | Agentforce | — | ✅ | 🤝 | — | — | — | — | — | — | 🤝 | — |
| 21 | Data Cloud & Analytics | 🤝 | ✅ | — | 🤝 | — | — | — | — | 🤝 | — | ✅ |
| 22 | Flows / Industries | — | 🤝 | — | — | 🤝 | — | — | — | 🤝 | — | 🤝 |
| 23 | Data Migration | — | — | — | — | — | — | — | — | — | — | — |
| 24 | Reports & Analytics | ✅ | ✅ | 🤝 | ✅ | 🤝 | 🤝 | 🤝 | 🤝 | ✅ | 🤝 | ✅ |
| 25 | Compliance & Rollout | 🤝 | — | — | — | — | — | — | — | ✅ | — | 🤝 |
| 26 | Testing & Go-Live | — | — | — | — | — | — | — | — | — | — | — |

Legend: DPM/DP = Dealer Performance Manager / Principal · CXO = Chief Experience Officer · CSOM = Customer Service Operations Manager · TSM = Territory Sales Manager · TSS = Technical Service Specialist · SR (OEM) = OEM Service Representative · DR = Dealer Representative · DSE = Dealer Service Executive · FO = Financial Officer · SA = Service Agent · S&OM = Sales & Operations Manager.

> **§23 Data Migration and §26 Testing & Go-Live** are not explicitly assigned to a Salesforce-defined business persona. They're owned by the **implementation team** (consultant + SDET in this plugin's agent model), shown separately at the bottom of this doc.

---

## Implementation-team personas (plugin-internal, complementary to the article)

The Salesforce help article describes **business roles** that *use* the system. The plugin also serves the **implementation team** that *deploys and tests* it. These don't appear in the article but are necessary for the plugin's workflow:

| Plugin agent | Use-case | Article persona alignment |
|---|---|---|
| `auto-consultant` | Greenfield rollout, phased setup | Customer-team lead embedding with the dealer/OEM |
| `auto-admin` | BAU operations, PSL maintenance | Dealer-side admin / OEM IT admin |
| `auto-developer` | OmniStudio, Apex, AEO, MuleSoft, Agentforce extensions | OEM IT + Salesforce ISV partner |
| `auto-sdet` | Test-data scaffolding, regression validation, FIT/Playwright | Salesforce QA / ISV QA partner |

These agents underpin every Salesforce-defined business role above. The article persona is the *who*; these agents are the *how*.

---

## Persona ↔ Skill quick map

| Salesforce-defined role | Auto-invoked skills (most-used) |
|---|---|
| Dealer Performance Manager / Dealer Principal | `auto-partner-visits`, `auto-rebates`, `auto-data-cloud-analytics`, `auto-reporting-analytics` |
| Chief Experience Officer | `auto-data-cloud-analytics`, `auto-agentforce`, `auto-experience-cloud`, `auto-connected-services` |
| Customer Service Operations Manager | `auto-service-console`, `auto-partner-visits`, `auto-vehicle-asset-fleet`, `auto-connected-services` |
| Territory Sales Manager | `auto-leads-opportunities`, `auto-partner-visits`, `auto-reporting-analytics` |
| Technical Service Specialist | `auto-connected-services`, `auto-warranty-claims`, `auto-vehicle-asset-fleet`, `auto-inventory-dealer` |
| Service Representative (OEM) | `auto-service-console`, `auto-partner-visits`, `auto-warranty-claims`, `auto-inventory-dealer` |
| Dealer Representative | `auto-leads-opportunities`, `auto-scheduler`, `auto-inventory-dealer`, `auto-experience-cloud` |
| Dealer Service Executive | `auto-scheduler`, `auto-inventory-dealer`, `auto-warranty-claims`, `auto-partner-visits`, `auto-vehicle-asset-fleet` |
| Financial Officer | `auto-finance-lending`, `auto-rebates`, `auto-compliance`, `auto-appraisal-management` |
| Service Agent | `auto-service-console`, `auto-vehicle-asset-fleet`, `auto-inventory-dealer`, `auto-warranty-claims` |
| Sales and Operations Manager | `auto-inventory-dealer`, `auto-reporting-analytics`, `auto-flows-industries` |
| *(implementation)* `auto-consultant` | `auto-implementation`, `auto-data-model`, `auto-arc`, `auto-experience-cloud` |
| *(implementation)* `auto-admin` | `auto-user-management`, `auto-page-layouts`, `auto-troubleshoot` |
| *(implementation)* `auto-developer` | `auto-data-model`, `auto-flows-industries`, `auto-finance-lending`, `auto-agentforce` |
| *(implementation)* `auto-sdet` | `auto-testing-go-live`, `auto-data-model`, `auto-troubleshoot`, `salesforce-query` |

---

## What this doc deliberately does not do

- **Does not invent business personas.** All 11 business roles come from the Salesforce help article. New OEM- or dealer-specific seats should be modeled as variants of an existing role.
- **Does not duplicate** `JOURNEY_MAP.md`. The 26-row map and 43-step sequence are authoritative; this doc layers personas on top.
- **Does not override irreversibility.** If a step is 🔒 here, it is 🔒 everywhere. The plugin must always confirm with the user before flipping any 🔒 toggle.
- **Does not name specific demo orgs.** Org-specific data (aliases, demo seeds) lives in `MEMORY.md`.
- **Does not attempt to be a runbook.** It's a map. Each persona's actual day-to-day uses the linked skills + commands.

---

## Source

> Salesforce Help — *Key Roles and Responsibilities in Automotive Cloud*
> `https://help.salesforce.com/s/articleView?id=ind.auto_roles_responsibilities.htm&type=5`
> Available in Enterprise, Unlimited, and Developer Editions.
> Persona names, descriptions, and responsibility statements are quoted directly from this article.
