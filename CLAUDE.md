# Claude for Automotive Cloud

A Claude Code plugin providing Automotive-Cloud-specific knowledge, templates, tools, skills, and agents for **Salesforce Automotive Cloud** implementations (OEMs + dealers).

## Org Selection — IMPORTANT

When connecting to a Salesforce org, follow these rules strictly:

1. **If only one org is authenticated**, use it automatically — do not ask the user.
2. **If multiple orgs are authenticated and no target is set**, ask the user **exactly once** which org to use, then call `set_target_org` with their choice.
3. **Once an org is selected (via `set_target_org` or auto-detection), NEVER ask again.** The choice persists for the entire session. All tools automatically use the selected org.
4. **Do not call `check_auto_setup` or `list_sf_orgs` before every operation.** Only call them if the user explicitly asks about setup or if a tool returns an authentication error.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Claude Code                             │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────┐ │
│  │           claude-for-automotive (Plugin)                 │ │
│  │                                                          │ │
│  │  Skills (Auto-invoked)    │   Commands (User-invoked)   │ │
│  │  ─────────────────────    │   ─────────────────────────  │ │
│  │  • auto-data-model        │   • /auto:setup-plugin       │ │
│  │  • auto-implementation    │   • /auto:soql-query         │ │
│  │  • auto-testing-go-live   │   • /auto:describe           │ │
│  │  • (24 more)              │   • /auto:audit              │ │
│  │                           │   • /auto:scaffold-test-data │ │
│  │                           │   • (30+ more)               │ │
│  │                                                          │ │
│  │  Agents                   │   MCP Server (Tools)         │ │
│  │  ─────────────────────    │   ───────────────────────── │ │
│  │  • auto-sdet              │   • Knowledge tools          │ │
│  │  • auto-consultant        │   • Salesforce org tools     │ │
│  │  • auto-admin             │   • SOQL, CRUD, metadata     │ │
│  │  • auto-developer         │                              │ │
│  └─────────────────────────────────────────────────────────┘ │
│                           │                                  │
│                           ▼                                  │
│                    Salesforce CLI (sf)                       │
│                           │                                  │
│                           ▼                                  │
│              Your Automotive Cloud Salesforce Org            │
└─────────────────────────────────────────────────────────────┘
```

## Canonical Journey + Setup Order

See **`JOURNEY_MAP.md`** for the canonical 26-row journey map and 43-step dependency-ordered setup sequence. Every skill, command, and agent must respect this ordering.

**Key irreversible toggles** (one-way; never recommend lightly):
- **Person Accounts** (file support ticket; OWD must allow `Contact Controlled By Parent` or both Private)
- **Lightning Knowledge** (one-way once enabled)
- **Timeline** (one-way once enabled)
- **Group Membership** is reversible but rarely worth flipping back

**ARC is always last.** ARC graph definitions on Account / Vehicle / Contact require every other relationship object, custom record type, and component to exist first.

## Target Users

- **SDET / QA engineers** *(primary persona)*: Test data scaffolding, regression validation, scratch-org templating, mobile + console UI test fixtures, FIT/Playwright integration.
- **Implementation Consultants**: Multi-cloud rollouts (Sales + Service + Automotive), OEM vs. dealer scoping, go-live readiness.
- **Administrators**: Day-to-day ops, permission set maintenance, Admin Console toggles, trigger handler control.
- **Developers**: Custom dev, OmniStudio, Apex, MuleSoft connected services, Agentforce extensions.

## Plugin Components

### Skills (Claude auto-invokes based on context)

| Skill | Description |
|-------|-------------|
| `auto-implementation` | Guides Automotive Cloud module implementations with best practices |
| `auto-troubleshoot` | Diagnoses and resolves Automotive Cloud issues |
| `auto-data-model` | Expert knowledge of the Automotive Cloud data model (14 model clusters) |
| `salesforce-query` | Helps construct and execute SOQL queries |
| `auto-user-management` | User provisioning, profiles, PSLs, sharing model, OWD recommendations |
| `auto-stakeholder-management` | Person Account / Business Account / household / dealer-group / asset-participant configuration |
| `auto-product-management` | Business Brand, Catalog, Vehicle Definition, Product (Vehicle / Parts RTs) |
| `auto-leads-opportunities` | Partner Lead Management — Lead Line Item, Lead Preferred Seller, Opportunity conversion mappings |
| `auto-vehicle-asset-fleet` | Vehicle / Asset / Fleet / Asset Title / Asset Account & Contact Participants |
| `auto-connected-services` | Vehicle Connected Services, Actionable Event Orchestration, MuleSoft + telematics |
| `auto-finance-lending` | Captive finance + Vehicle and Asset Lending (Financial Account, console, Compliant Data Sharing) |
| `auto-scheduler` | Test drive + service appointments via Salesforce Scheduler + Automotive Scheduler |
| `auto-service-console` | Service Console for Automotive, Identity Verification, Industry Service Excellence |
| `auto-inventory-dealer` | Vehicle inventory, Product Item / Transfer / Request, Partner Performance Management |
| `auto-warranty-claims` | Warranty Lifecycle Mgmt, Claims Foundation, Warranty Supplier Recovery |
| `auto-appraisal-management` | Appraisal, Appraisal Item, Provider Valuation |
| `auto-partner-visits` | Visit, Generic Visit Task, Action Plan, KPIs, Partner Visits mobile app |
| `auto-rebates` | Rebate Claim, Transaction Journal, optional Rebate Management add-on |
| `auto-experience-cloud` | Automotive template Experience Cloud sites, external PSLs, sharing sets |
| `auto-agentforce` | Agentforce for Automotive — topics, actions, Einstein Studio, Einstein Summary |
| `auto-data-cloud-analytics` | Data Cloud Automotive data kit + CRM Analytics dashboards |
| `auto-flows-industries` | Omnistudio, BRE, Data Pipelines, Decision Tables, IDA, Document Generation |
| `auto-data-migration` | Data load order — Person Account first, vehicles → assets → titles → financial accounts |
| `auto-reporting-analytics` | Reports, dashboards, forecasting (Advanced Account Forecasting) |
| `auto-compliance` | Compliant Data Sharing, Identity Verification, fair-lending, Audit Trail |
| `auto-testing-go-live` | **SDET-focused** — test data scaffolding, regression patterns, scratch-org templates, FIT/Playwright |
| `auto-arc` | ARC Relationship Graph (always last in setup sequence) |
| `auto-page-layouts` | Per-record-type page layouts; record types for Product (Vehicle / Parts) and Asset (Vehicle / Parts) are mandatory |

### Commands (User-invoked with `/auto:command`)

| Command | Description |
|---------|-------------|
| `/auto:setup-plugin` | Check plugin status and connect to a Salesforce org |
| `/auto:status` | Dashboard view of the connected Automotive Cloud org |
| `/auto:soql-query` | Run a SOQL query |
| `/auto:describe` | Describe a Salesforce object's fields |
| `/auto:help` | Search the Automotive Cloud knowledge base by topic |
| `/auto:docs` | Browse Automotive Cloud documentation by category |
| `/auto:getting-started` | Interactive onboarding |
| `/auto:configure-permissions` | Wizard — PSLs, profiles, OWD recommendations |
| `/auto:configure-stakeholders` | Wizard — Person Account, ACR, AAR, household, asset participants |
| `/auto:configure-products` | Wizard — Business Brand, Catalog, Vehicle Definition, Product RTs |
| `/auto:configure-vehicles` | Wizard — Vehicle / Asset record types and page layouts |
| `/auto:configure-fleets` | Wizard — Fleet, Fleet Asset, Fleet Participant |
| `/auto:configure-leads` | Wizard — Partner Lead Management + Schedule Test Drive button |
| `/auto:configure-scheduler` | Wizard — Salesforce Scheduler + Automotive Scheduler + Multi-Resource |
| `/auto:configure-service-console` | Wizard — Service Console for Automotive (irreversible Knowledge enable) |
| `/auto:configure-inventory` | Wizard — Inventory Settings + Criteria-Based Search |
| `/auto:configure-dealer-performance` | Wizard — Partner Performance Management + sales agreements |
| `/auto:configure-finance-console` | Wizard — Financial Account model + Vehicle and Asset Finance |
| `/auto:configure-warranty` | Wizard — Warranty Lifecycle Mgmt + Claims + Supplier Recovery |
| `/auto:configure-connected-services` | Wizard — Vehicle Connected Services + AEO |
| `/auto:configure-visits` | Wizard — Partner Visit Management + Action Plans + KPIs |
| `/auto:configure-arc` | Wizard — ARC graph definitions (always last) |
| `/auto:configure-page-layouts` | Wizard — page layouts and record types per object |
| `/auto:configure-record-types` | Wizard — Product RTs and Asset RTs (mandatory split) |
| `/auto:configure-experience-site` | Wizard — Automotive Experience Cloud site |
| `/auto:configure-analytics` | Wizard — Analytics for Automotive CRM Analytics template |
| `/auto:configure-data-migration` | Wizard — data import order |
| `/auto:scaffold-test-data` | **SDET** — load a sample vehicle + asset + financial account + claim graph for tests |
| `/auto:audit` | Run validation rules against the connected org |
| `/auto:health-check` | Comprehensive Automotive Cloud org health check |
| `/auto:diff-orgs` | Compare configuration between two orgs |
| `/auto:export-config` | Export Automotive Cloud configuration as JSON |
| `/auto:import-config` | Import Automotive Cloud configuration from JSON |
| `/auto:open-org` | Open the connected org in the browser |
| `/auto:release-notes` | View Automotive Cloud release notes by Salesforce release |

### Agents

| Agent | Description |
|-------|-------------|
| `auto-sdet` | **Primary (execution)** — SDET / QA engineer for Automotive Cloud test scaffolding, data setup, regression, FIT/Playwright |
| `auto-sdet-architect` | **Primary (strategy)** — SDET expert for requirement validation, test plans, scenario design, and the four Setup Journeys (Configuration / Setup Data / Integration / Reporting) plus Transaction User Journey |
| `auto-consultant` | Senior implementation consultant for OEM + dealer rollouts |
| `auto-admin` | Day-to-day Automotive Cloud administrator |
| `auto-developer` | Developer for OmniStudio, Apex, MuleSoft connected services, Agentforce extensions |
| `auto-customer-support` | Customer support specialist — drafts grounded, customer-ready replies by referring to the local knowledge base, the bundled PDF, and (when connected) live org configuration |

## Critical conventions for Claude (do not skip)

### Tooling-API entities — never use `run_soql`

These are Tooling API or metadata entities. The relevant skills must call dedicated tools instead of SOQL:

- Trigger handlers, Admin-Console-style settings, page layouts, compact layouts, quick actions, custom actions, record types, OmniStudio metadata.

If the user asks for one of these via SOQL, redirect to the right tool (e.g., `list_admin_settings`, `retrieve_metadata`, `list_auto_actions`, `list_trigger_handlers`).

### Mandatory record-type splits

- **Product** — must have `Vehicle` and `Parts` record types with separate page layouts. Many Automotive features assume this split exists.
- **Asset** — must have `Vehicle` and `Parts` record types with separate page layouts. Asset sharing controls Vehicle sharing.

### Irreversible toggles — confirm with the user before enabling

- **Person Accounts** (requires support ticket; OWD prerequisites)
- **Lightning Knowledge**
- **Timeline**

### CRM Analytics + Data Cloud + Field Service inventory

- Vehicle inventory uses the Field Service Inventory data model. Reference the Field Service docs when modeling.
- Vehicle Definition sharing inherits from Product. Vehicle sharing inherits from Asset.

### OmniStudio is web-only context

OmniScripts / FlexCards / DataRaptors / Integration Procedures are used heavily in Automotive flows (Vehicle and Asset Lending intake, Test Drive scheduling). Don't recommend OmniStudio for the Partner Visits mobile app — that uses the standard mobile app framework, not OmniStudio.

## Reference

- `JOURNEY_MAP.md` — the canonical journey + setup-sequence blueprint
- `documentation/automotive_cloud_5-4-2026.pdf` — source-of-truth PDF (874 pages, last updated 2026.05.04)
- https://help.salesforce.com/s/articleView?id=ind.auto_data_model.htm&type=5 — Automotive Cloud data model help page
- https://www.salesforce.com/automotive/ — product overview
