# Salesforce Automotive Cloud — Journey Map & Setup Sequence

> Reference blueprint for the **claude-for-automotive** plugin.
> Sources: `automotive_cloud_5-4-2026.pdf` (Last Updated 2026.05.04) + `help.salesforce.com/.../auto_data_model.htm`.
> Last revised: 2026-06-04.

This doc has two parts:

1. **High-level Journey Map** — the per-vertical "user journey" sheet (FSC-style), used to scope skills/commands/agents.
2. **Object-Level Setup Sequence** — the dependency-ordered list (FSC-style), used as the canonical ordering for any setup wizard, audit, or scaffolding command.

---

## Part 1 — High-Level Journey Map

| # | Journey | Key Concepts | Primary Objects / Settings | Plugin Surface (proposed) |
|---|---|---|---|---|
| 1 | **Org & License Setup** | Org edition (Enterprise / Unlimited / Developer), Automotive Cloud license, add-on licenses (Rebate Mgmt, Field Service, Data Cloud, B2C Commerce), Sales Cloud + Service Cloud foundation. Trial flavors: Learning Trial / Base Trial / Pre-Release Trial. | Org Edition, Permission Set Licenses, `Automotive Settings`, `Service Console for Automotive`, `Vehicle Connected Services Settings`, `Vehicle and Asset Finance Settings`, `Partner Visit Management`, `Partner Lead Management`, `Partner Performance Management`, `Fleet Management Settings`, `Warranty Lifecycle Management`, `Automotive Scheduler` | `/auto:setup-plugin`, `/auto:status`, `auto-implementation` skill |
| 2 | **Permissions & Access** | Foundation PSL is mandatory; per-feature PSLs layered on top. Profiles (clone Standard, no defaults shipped). PSAs to users. External users via Experience Cloud PSLs. Sharing model (OWD recommendations table, role hierarchy, sharing rules). | `Automotive Foundation User`, `ARC Access`, `Group Membership`, `Industries Visit`, `Partner Visit Management`, `Partner Lead Management`, `Partner Performance Management`, `Vehicle Connected Services`, `Vehicle and Asset Finance`, `Vehicle and Asset Lending`, `Industry Service Excellence`, `Action Plans`, `Automotive Scheduler`, `Warranty Lifecycle Management Psl`, `Claims Management Foundation`, `Fleet Management`, `Criteria-Based Search and Filter`, `Omnistudio`, `Context Service Admin/Runtime`, `Business Rules Engine Designer/Runtime`, `Data Pipelines Base User`, `Service Process Studio`, `MuleSoft Anypoint Platform`. External: `Automotive Foundation for Experience Cloud`, `Partner Lead/Performance/Visit/Warranty/Fleet for Experience Cloud`, `Vehicle and Asset Finance Foundation for Experience Cloud`, `Vehicle and Asset Lending for Partners/Customers`, `Criteria Based Search and Filter for Experience Cloud`. | `/auto:configure-permissions`, `/auto:audit` (PSL capacity, OWD recommendations), `auto-user-management` skill |
| 3 | **Data Model** | Industry-specific objects layered on Sales/Service Cloud standards. **12 model clusters**: Stakeholder Mgmt, Vehicle Information, Captive Finance, Inventory Mgmt, Leads & Opportunities, Partner Visit Mgmt, Test Drive & Service Appointments, Fleet Mgmt, Groups & Households, Warranty Terms & Service Standards, Warranty Claims, Warranty Supplier Recovery, Retail Sales Information, Appraisal Mgmt. Person Account is mandatory for individual customers. | Core: `Account` (incl. PersonAccount), `Contact`, `Asset`, `Vehicle`, `Vehicle Definition`, `Product2`, `Lead`, `Opportunity`, `Case`, `Financial Account`. Industry: `Business Profile`, `Internal Organization Unit`, `Asset Account Participant`, `Asset Contact Participant`, `Party Relationship Group`, `Account Contact Relationship`, `Account Account Relationship`, `Contact Contact Relationship`, `Party Role Relationship`, `Lead Line Item`, `Lead Preferred Seller`, `Opportunity Preferred Seller`, `Visit`, `Action Plan`, `Generic Visit Task`, `Fleet`, `Fleet Asset`, `Fleet Participant`, `Asset Title`, `Asset Title Party`, `Financial Account Party`, `Financial Account Balance`, `Financial Account Transaction`, `Financial Account Address`, `Financial Account Statement`, `Financial Account Fee`, `Financial Account Milestone`, `Party Financial Asset`, `Party Financial Asset Additional Owner`, `Financial Account Party Financial Asset`, `Product Item`, `Product Transfer`, `Product Request`, `Serialized Product`, `Shipment`, `Return Order`, `Rebate Claim`, `Transaction Journal`, `Warranty Term`, `Product Warranty Term`, `Asset Warranty`, `Warranty Term Coverage`, `Code Set`, `Codeset Relationship`, `Product Fault Code`, `Product Labor Code`, `Claim`, `Claim Item`, `Claim Coverage`, `Claim Coverage Payment Detail`, `Claim Participant`, `Supplier`, `Supplier Product`, `Contract`, `Sales Contract Line`, `Appraisal`, `Appraisal Item`, `Appraisal Item Add On`, `Appraisal Item Provider Valuation`. | `auto-data-model` skill, `/auto:describe`, `/auto:soql-query` |
| 4 | **ARC (Actionable Relationship Center)** | Always last — depends on every other object. Visualize relationships among accounts, vehicles, contacts, households. Enabled via `ARC Access` PSL; ARC Relationship Graph component on Account/Vehicle/Contact pages. | `ARC Relationship Graph` Lightning component, ARC graph definitions on `Account`, `Vehicle`, `Contact` | `auto-arc` skill, `/auto:configure-arc` |
| 5 | **App & Page Layouts** | 4 in-app surfaces: **Automotive** app, **Service Console for Automotive**, **Partner Visits**, **Warranty Lifecycle Management**. Custom record types are mandatory for `Product` (Vehicle / Parts) and `Asset` (Vehicle / Parts). Lightning record pages with industry components: Events & Milestones, Timeline, Record Alerts, Interest Tags, Relationship Cards, ARC Relationship Graph, Bundle Tree. Vehicle/Asset/Lead/Opportunity/Account/Business Profile/Product layouts customized per role. | App visibility (Automotive / Service Console for Automotive / Partner Visits / Warranty Lifecycle Management), Object Manager → Page Layouts, Lightning App Builder, Record Types | `/auto:configure-page-layouts`, `/auto:configure-record-types`, `auto-page-layouts` skill |
| 6 | **Stakeholders & Households** | Capture the full stakeholder graph: customers, drivers, dealers, financiers, suppliers, internal org units. Households / dealer groups via `Party Relationship Group`. Asset participants for vehicle owners/co-owners/drivers. | `Person Account`, `Business Account`, `Contact`, `Account Contact Relationship`, `Account Account Relationship`, `Contact Contact Relationship`, `Party Role Relationship`, `Party Relationship Group`, `Asset Account Participant`, `Asset Contact Participant`, `Business Profile`, `Internal Organization Unit`, `Supplier` | `auto-stakeholder-management` skill, `/auto:configure-stakeholders` |
| 7 | **Product & Vehicle Definition** | Product hierarchy: Business Brand → Catalog → Category → Product (Vehicle / Parts record types) → Product Related Material/Component. Vehicle Definition records hold make/model/trim/fuel/battery specs. Asset records track owned vehicles tied to a Vehicle record. | `Business Brand`, `Catalog`, `Category`, `Product2` (Vehicle / Parts RTs), `Vehicle Definition`, `Product Related Material`, `Product Related Component`, `Vehicle`, `Asset` | `auto-product-management` skill, `/auto:configure-products` |
| 8 | **Leads & Opportunities** | Enhanced Partner Lead Management: capture product-level interest (`Lead Line Item`), preferred dealers (`Lead Preferred Seller`), interest windows (Earliest/Latest Interest Date), source account. Conversion preserves line items into `Opportunity Product` and `Opportunity Preferred Seller`. | `Lead`, `Lead Line Item`, `Lead Preferred Seller`, `Opportunity`, `Opportunity Product`, `Opportunity Preferred Seller` | `auto-leads-opportunities` skill, `/auto:configure-leads` |
| 9 | **Vehicles, Assets & Fleets** | Vehicle/Asset console = single source of truth for a vehicle's lifecycle. Fleets group multiple assets with their participants. Asset Title and Asset Title Party track ownership transfer. | `Vehicle`, `Asset`, `Asset Account Participant`, `Asset Contact Participant`, `Asset Warranty`, `Asset Title`, `Asset Title Party`, `Fleet`, `Fleet Asset`, `Fleet Participant` | `auto-vehicle-asset-fleet` skill, `/auto:configure-vehicles`, `/auto:configure-fleets` |
| 10 | **Vehicle Connected Services** | MuleSoft + telemetry integration; Actionable Event Orchestration for inbound vehicle events (DTCs, engine/transmission alerts); Remote Vehicle Door Lock/Unlock and Remote Notifications service processes; eligibility rules. Requires Service Process Studio + Context Service. | `Service Process` definitions, `Actionable Event Type/Subtype/Orchestration`, `Expression Sets`, `Vehicle Connected Services` PSL | `auto-connected-services` skill, `/auto:configure-connected-services` |
| 11 | **Vehicle Loans & Leases (Captive Finance)** | Vehicle and Asset Lending Console (intake → underwriting → decisioning → proposal). Finance Console for Automotive: balances, transactions, fees, milestones, statements, addresses, parties, title transfers. Experian/Equifax integration; Omniscript-based flows; Unified Catalog. | `Financial Account`, `Financial Account Party`, `Financial Account Balance/Transaction/Fee/Milestone/Statement/Address`, `Party Financial Asset`, `Party Financial Asset Additional Owner`, `Financial Account Party Financial Asset`, `Asset Title`, `Asset Title Party` | `auto-finance-lending` skill, `/auto:configure-finance-console` |
| 12 | **Test Drives & Service Appointments** | Salesforce Scheduler with Multi-Resource Scheduling (agent + asset). Predefined Automotive Scheduler guided flows. Schedule Test Drive button replaces default Schedule Appointment quick action on Lead/Opportunity. | `Automotive Scheduler`, `Salesforce Scheduler` settings, `Service Resource`, `Service Territory`, `Work Type`, `Work Type Group`, Scheduler flows | `auto-scheduler` skill, `/auto:configure-scheduler` |
| 13 | **Service Processes & Console** | Case-driven service ops via Unified Catalog or Service Process Studio. Service Console for Automotive surfaces Identity Verification, Timeline, Record Alerts, Actions & Recommendations, Audit Trail, Action Launcher. Lightning Knowledge required for Knowledge in console. | `Service Console for Automotive`, `Industry Service Excellence` PSL, `Identity Verification` flows, `Timeline`, `Record Alert`, `Knowledge Settings` | `auto-service-console` skill, `/auto:configure-service-console` |
| 14 | **Inventory & Dealers** | Track vehicles + parts at locations; transfers; criteria-based vehicle inventory search (Data Pipelines / DPE template required). Partner Performance Management for dealer KPIs, retail delivery reports, sales agreements. | `Product Item`, `Product Transfer`, `Product Transfer State`, `Product Request`, `Serialized Product`, `Shipment`, `Return Order`, `Vehicle Searchable Field`, `Sales Agreement`, `Account Manager Target`, `Manufacturing Program` | `auto-inventory-dealer` skill, `/auto:configure-inventory`, `/auto:configure-dealer-performance` |
| 15 | **Warranties & Claims** | Warranty Lifecycle Management → terms, code sets, fault/labor codes, asset warranties. Claims Management Foundation → adjudication. Warranty Supplier Recovery → recover from suppliers via Contracts and Sales Contract Lines. | `Warranty Term`, `Product Warranty Term`, `Asset Warranty`, `Warranty Term Coverage`, `Code Set`, `Codeset Relationship`, `Product Fault Code`, `Product Labor Code`, `Claim`, `Claim Item`, `Claim Coverage`, `Claim Coverage Payment Detail`, `Claim Participant`, `Supplier`, `Supplier Product`, `Contract`, `Sales Contract Line` | `auto-warranty-claims` skill, `/auto:configure-warranty` |
| 16 | **Appraisals** | Pre-sales valuation; relate to Lead, Opportunity, Financial Account, or Case. External market valuations via `Appraisal Item Provider Valuation`. | `Appraisal`, `Appraisal Item`, `Appraisal Item Add On`, `Appraisal Item Provider Valuation` | `auto-appraisal-management` skill |
| 17 | **Partner Visits** | District / territory sales managers plan dealer visits, action plans, generic visit tasks, KPIs against assessment indicator definitions. Partner Visits mobile app. | `Visit`, `Action Plan`, `Action Plan Template`, `Action Plan Template Version`, `Generic Visit Task`, `Generic Visit Task Context`, `Generic Visit Task Context Relation`, `Assessment Indicator Definition`, `Generic Visit Key Performance Indicator` | `auto-partner-visits` skill, `/auto:configure-visits` |
| 18 | **Retail Sales Reports & Rebates** | Submit vehicle/parts sale reports → Rebate Claims + Transaction Journals. Optional Rebate Management add-on. | `Rebate Claim`, `Transaction Journal`, Rebate Management add-on | `auto-rebates` skill |
| 19 | **Experience Cloud Sites** | Automotive template; partner (dealer) and customer (driver/owner) portals. External PSLs gate the feature subset (manage vehicles vs. only view household). Sharing settings differ for internal vs. external users — use the OWD recommendations table from the docs. | `Digital Experiences`, Automotive template, Experience Cloud user profiles, External PSLs | `auto-experience-cloud` skill, `/auto:configure-experience-site` |
| 20 | **Agentforce for Automotive** | Out-of-the-box subagents and actions for vehicles, assets, dealers, service processes, vehicle loans/leases. Einstein Trust Layer + Einstein Summary on Vehicle and Asset pages. Topics + Actions + Einstein Studio. | Agentforce topics, actions, agents | `auto-agentforce` skill |
| 21 | **Data Cloud & Analytics** | Automotive data kit in Data Cloud (calculated insights, data streams). Analytics for Automotive CRM Analytics template (Dealer Performance, OEM Performance, vehicle sales, inventory). | Data Cloud, Automotive data kit, CRM Analytics Studio (`Analytics for Automotive`), `CRM Analytics Plus and Manufacturing Analytics Apps` PSL | `auto-data-cloud-analytics` skill, `/auto:configure-analytics` |
| 22 | **Automate / Flows for Industries** | Omnistudio (FlexCards, OmniScripts, Integration Procedures, DataRaptors), Data Processing Engine, Business Rules Engine, Decision Tables, Intelligent Form Reader, Document Generation. | Omnistudio, BRE, Data Pipelines, Decision Matrix, Expression Set, Intelligent Document Automation | `auto-flows-industries` skill |
| 23 | **Data Migration** | Person Accounts must be enabled before customer data load. Account hierarchy + dealer groups → households first; then vehicles → assets → titles → financial accounts → leads/opportunities. Field Service Inventory model is the upstream source of the inventory objects, so respect that lineage. | sf data import / sf data tree, ETL via MuleSoft, Data Loader | `auto-data-migration` skill, `/auto:configure-data-migration` |
| 24 | **Reports & Analytics** | Predefined CRM Analytics dashboards (Dealer Performance, OEM Performance), reports on vehicles / assets / claims / sales agreements / leads. Forecasting via Advanced Account Forecasting. | CRM Analytics, Reports, Dashboards, Advanced Account Forecasting | `auto-reporting-analytics` skill |
| 25 | **Compliance & Rollout** | Compliant Data Sharing for stage-based access (Vehicle and Asset Lending). Identity Verification flows in Service Console. Fair-lending controls in lending flows. Stage Management Design User PSL. | Compliant Data Sharing, Stage Definitions/Transitions, Identity Verification, Audit Trail | `auto-compliance` skill |
| 26 | **Testing & Go-Live (SDET)** | Test data setup for vehicles + assets + financial accounts + claims; Salesforce Scheduler test fixtures; Apex tests around connected services; UI / Playwright / FIT regression around Service Console and Vehicle Console. Mobile app validations (Partner Visits, Prework Estimation). | Apex test classes, sf data tree fixtures, Playwright/FIT, sandbox refresh strategy, scratch org templates | `auto-testing-go-live` skill, `/auto:audit`, `/auto:health-check`, `/auto:diff-orgs`, `/auto:export-config`, `/auto:import-config` — **primary surface for the SDET persona** |

---

## Part 2 — Object-Level Setup Sequence (Dependency Order)

> Mirrors the FSC sequence (Permission Sets → … → ARC last). For Automotive Cloud, the equivalent dependency-ordered list is below. Steps are *one-way prerequisites* — never reverse the order. Bold steps map to "must complete a support ticket / irreversible org-wide toggle".

| # | Step | Why this position | Source |
|---|---|---|---|
| 1 | **Permission Set Licenses** (`Automotive Foundation User` mandatory; layer per-feature PSLs) | All feature gating + page access flows from PSLs. Without Foundation, no Automotive objects are visible. | PDF p. 45-51 |
| 2 | **Profiles** (clone Standard User; grant Read on all Auto objects; mark Automotive / Service Console for Automotive / Partner Visits / Warranty Lifecycle Management as Visible apps) | Profiles point to PSLs/page layouts. Auto ships **no default profiles**. | PDF p. 55 |
| 3 | **Person Accounts** (irreversible — file support ticket first; OWD must allow Contact Controlled By Parent or both Private) | Locks Account / Contact behavior for the org. Cannot be turned off. Every customer journey downstream assumes PersonAccount. | PDF p. 43 |
| 4 | **Account Record Types** (Business Account, Person Account; later record types for dealers / households as needed) | RTs gate page layouts and validation. Required before Account-Account relationships can be modeled distinctly. | Standard SF + PDF p. 64 |
| 5 | **Contact** (page layout + sharing tweaks; `Controlled By Parent`) | Most Auto stakeholders surface as Contact and Account Contact Relationship. | PDF p. 59 |
| 6 | **Account Contact Relationship** (multi-account contacts; needed for households + dealer groups) | Without ACR, households cannot be modeled. | PDF p. 20, 57 |
| 7 | **Account Account Relationship** (e.g. household ↔ preferred dealership) | Depends on Account RTs + ACR. | PDF p. 20 |
| 8 | **Contact Contact Relationship & Party Role Relationship** | Spouse/partner/lawyer relationships between contacts. Underlies the relationship graph in ARC. | PDF p. 20 |
| 9 | **Party Relationship Group** (Group Membership PSL + `Group Membership Settings` enable) | Households + dealer groups. Required before ARC graph definitions on Account. | PDF p. 43 |
| 10 | **Business Profile + Internal Organization Unit + Supplier** (dealer/distributor accounts) | Business profile picklists (Business Partner Type, Service Type, Region) needed before dealer page layouts and territory alignment work. | PDF p. 65 |
| 11 | **Product Record Types** (`Vehicle`, `Parts`) + Product Page Layouts | Products *must* be split into Vehicle vs Parts via record types. All inventory + vehicle management depends on this split. | PDF p. 68-69 |
| 12 | **Vehicle Definition** (make/model/trim/fuel/battery specs) | Vehicle records reference Vehicle Definition. Vehicle Definition sharing inherits from Product. | PDF p. 6, 59 |
| 13 | **Asset Record Types** (`Vehicle`, `Parts`) + Asset Page Layouts | Assets represent owned vehicles/parts. Required before Asset Account Participant, Asset Contact Participant, Vehicle, Asset Warranty. Asset sharing controls Vehicle sharing. | PDF p. 70-71 |
| 14 | **Vehicle** (record + lookup from Asset) | Sits between Asset and Vehicle Definition. The single source of truth for vehicle lifecycle. | PDF p. 6, 60 |
| 15 | **Asset Account Participant + Asset Contact Participant** | Multi-stakeholder model for owners, drivers, dealers, financiers, lien holders. | PDF p. 29 |
| 16 | **Asset Title + Asset Title Party** | Required for any captive finance / lease / loan flow that transfers ownership. | PDF p. 17-18 |
| 17 | **Lead + Lead Line Item + Lead Preferred Seller** (Partner Lead Management PSL + enable + default mappings) | Sales lifecycle entry. Conversion mappings to Opportunity Product / Preferred Seller must be enabled before any conversion fires. | PDF p. 43, 66 |
| 18 | **Opportunity + Opportunity Product + Opportunity Preferred Seller** (replace default Schedule Appointment with Schedule Test Drive button) | Downstream of Lead conversion. Page layout edit is mandatory or test drive scheduling falls back to default flow. | PDF p. 67 |
| 19 | **Salesforce Scheduler + Automotive Scheduler** (Multi-Resource Scheduling; Standard Omnistudio Runtime) | Test drive + service appointments depend on this. Two service resources (agent + asset/vehicle) are required per test drive. | PDF p. 44 |
| 20 | **Service Resource / Service Territory / Work Type / Work Type Group / Operating Hours** | Scheduler infrastructure for both internal and Experience Cloud users. | PDF p. 44, 62 |
| 21 | **Inventory Settings** (Visit Inventory Management) + **Criteria-Based Search and Filter** (DPE template — requires Automotive enabled first) + **Data Pipelines** | Vehicle inventory search requires both. DPE template is *only* available when both flags are on. | PDF p. 43-44 |
| 22 | **Product Item / Product Transfer / Serialized Product / Product Request / Shipment / Return Order** | Inventory tracking sits on Field Service Inventory model. Configure after Asset record types and product record types exist. | PDF p. 22 |
| 23 | **Financial Account + Financial Account Party + Balances/Transactions/Fees/Milestones/Statements/Addresses** (Vehicle and Asset Finance + Vehicle and Asset Finance Additional Components — requires Timeline already enabled) | Captive finance. Timeline must be enabled before Additional Components flag is flipped. | PDF p. 43 |
| 24 | **Party Financial Asset + Party Financial Asset Additional Owner + Financial Account Party Financial Asset** | Trade-ins, collateral, secondary owners. Depend on Financial Account + Asset. | PDF p. 17 |
| 25 | **Vehicle and Asset Lending** (Underwriter Console; Compliant Data Sharing; Stage Management Design User PSL) | Lending uses Compliant Data Sharing. Needs Stage Definitions/Transitions configured first. | PDF p. 46 |
| 26 | **Warranty Lifecycle Management** (terms, code sets, product fault/labor codes, warranty term coverage, asset warranty) | Establishes the catalog before any Claim can reference it. | PDF p. 44, 49 |
| 27 | **Claims Management Foundation** (Claim, Claim Item, Claim Coverage, Claim Coverage Payment Detail, Claim Participant) | Adjudication runs against existing warranty terms. | PDF p. 49 |
| 28 | **Warranty Supplier Recovery** (Supplier, Supplier Product, Contract, Sales Contract Line) | Supplier-side recovery flows after claims model exists. | PDF p. 38 |
| 29 | **Vehicle Connected Services** (Service Process Studio + Context Service + Omnistudio + MuleSoft Anypoint Platform PSLs; predefined components) | Telematics + remote actions. Requires the lower-level capability stack lit up first. | PDF p. 42, 56 |
| 30 | **Actionable Event Orchestration** (Designer + Runtime PSLs) | Inbound vehicle events. Depends on connected services + expression sets. | PDF p. 47 |
| 31 | **Partner Visit Management + Action Plans + Industries Visit** | District/territory sales manager journeys. Depends on Business Profile + Account RTs. | PDF p. 43, 47 |
| 32 | **Partner Performance Management** (Rebate Claim, Transaction Journal — and optional Rebate Management add-on for incentives) | Dealer KPI submission. Depends on Asset/Vehicle + Account. | PDF p. 43, 47 |
| 33 | **Fleet Management Settings** (Fleet, Fleet Asset, Fleet Participant) | Independent fleet view that aggregates Asset records. | PDF p. 44, 49 |
| 34 | **Appraisal Management** (Appraisal, Appraisal Item, Appraisal Item Add On, Appraisal Item Provider Valuation) | Pre-sales valuations. Can attach to Lead / Opportunity / Financial Account / Case. | PDF p. 15 |
| 35 | **Service Console for Automotive** (Industry Service Excellence PSL; predefined Identity Verification flows; Lightning Knowledge enabled — irreversible) | Knowledge enable is one-way. Surface every other journey through the console only after they exist. | PDF p. 42, 44 |
| 36 | **Topics for Objects + Interest Tags** (Let users access interest tags) | Cross-cutting tagging on Account, Vehicle, Lead, Opportunity. | PDF p. 44 |
| 37 | **Events & Milestones / Timeline / Record Alerts / Relationship Cards** (Timeline enable is irreversible) | Dashboard-style components on Account / Vehicle / Contact pages. Timeline must be enabled before Captive Finance Additional Components. | PDF p. 44 |
| 38 | **Page Layouts** (Account, Business Profile, Lead, Opportunity, Product Vehicle, Product Parts, Asset Vehicle, Asset Parts, Vehicle, Visit, Task, Prework Estimation Lightning Page) | Layouts can only reference fields/related lists from objects/RTs that already exist. | PDF p. 63-71 |
| 39 | **Experience Cloud Site** (Digital Experiences enable; Automotive template; external profiles + Experience Cloud PSLs; sharing sets) | External-facing portals. Must follow internal model + sharing model. | PDF p. 44, 52-53 |
| 40 | **Agentforce for Automotive** (topics + actions + Einstein Studio + Einstein Summary on Vehicle/Asset) | Sits on top of the data + page layouts. | PDF p. 1, 40 |
| 41 | **Data Cloud + Automotive Data Kit** (calculated insights, data streams) | Cross-system aggregation. Depends on Auto objects existing in the org. | PDF p. 10, 40 |
| 42 | **CRM Analytics — Analytics for Automotive template** (Dealer Performance, OEM Performance, vehicle sales) | Dashboards reference the populated data model. | PDF p. 47, 50 |
| 43 | **ARC (Actionable Relationship Center) — LAST** | ARC graph definitions on Account / Vehicle / Contact require every relationship object, custom record type, and component above to exist. Add ARC Relationship Graph component to Lightning record pages and activate. | PDF p. 8, 47, 65 |

---

## Part 3 — Mapping back to the FSC blueprint

| FSC Journey (screenshot) | Automotive Cloud Equivalent (this doc) |
|---|---|
| Org & License Setup | §1 Org & License Setup |
| Permissions & Access | §2 Permissions & Access |
| Data Model | §3 Data Model |
| ARC | §4 ARC |
| App & Page Layouts | §5 App & Page Layouts |
| Interactions & Engagement | §13 Service Processes & Console + §17 Partner Visits + §12 Test Drives & Service Appointments |
| Document Tracking | §11 Vehicle Loans & Leases (Document Checklist + Intelligent Document Automation in Vehicle and Asset Lending) |
| Referrals & Leads | §8 Leads & Opportunities |
| Compliance & Rollout | §25 Compliance & Rollout |
| Data Migration | §23 Data Migration |
| Reports & Analytics | §21 Data Cloud & Analytics + §24 Reports & Analytics |
| Testing & Go-Live | §26 Testing & Go-Live (SDET) |

| FSC Setup Sequence (screenshot) | Automotive Cloud Equivalent (this doc) |
|---|---|
| 1. Permission Sets | §2.1 PSLs |
| 2. Person Accounts ← irreversible | §2.3 Person Accounts |
| 3. Account Record Types | §2.4 |
| 4. Contact | §2.5 |
| 5. Account-Contact Relationship | §2.6 |
| 6. Account-Account Relationship | §2.7 |
| 7. Financial Account | §2.23 (later in Auto — after Asset/Vehicle exist) |
| 8. Assets & Liabilities | §2.13-14 (Asset + Vehicle) |
| 9. Rollup Summaries / RBL | folded into §22 (BRE + DPE) |
| 10. Household | §2.9 Party Relationship Group |
| 11. Goals | folded into §32 Partner Performance Management (Account Manager Targets + Sales Agreements) |
| 12. Life Events / Business Milestones | §2.37 Events & Milestones |
| 13. Lead | §2.17 |
| 14. Opportunity | §2.18 |
| 15. Referral | folded into Lead (Partner Lead Management captures referring account) |
| 16. Interaction Summaries | §13 Service Console for Automotive |
| 17. Document Checklist | §11 / §25 Vehicle and Asset Lending + Compliant Data Sharing |
| 18. Action Plans | §2.31 Partner Visit Management + Action Plans |
| 19. Compliant Data Sharing | §2.25 Vehicle and Asset Lending (Stage Mgmt + CDS) |
| 20. ARC ← last | §2.43 ARC ← still last |

---

## Open Questions (TBD before scaffolding the plugin)

1. Should `auto-warranty-claims` be one skill or split per FSC's pattern (terms vs. claims vs. supplier recovery)?
2. SDET-specific: do we want a `/auto:scaffold-test-data` command that loads a sample vehicle + asset + financial account + claim graph? (Recommend yes — biggest daily-use win for the SDET persona.)
3. Agentforce, Data Cloud, and CRM Analytics each have substantial footprints — defer their skills to phase 2, or scope them now?
4. Confirm the MCP tool patterns (`run_soql`, Tooling-API setting tools, audit framework) work cleanly for the Automotive object model.

Once these are settled, proceed to bootstrap the plugin scaffold.
