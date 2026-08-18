# AutomotiveAssist — User Guide

## What Is AutomotiveAssist?

AutomotiveAssist (also known as **claude-for-automotive**) is an AI-powered assistant plugin for **Salesforce Automotive Cloud**. It gives implementation teams — consultants, admins, developers, and testers — on-demand expert guidance, automated configuration checks, and scaffolding tools so they can stand up Automotive Cloud orgs faster and with fewer mistakes.

Think of it as a knowledgeable team member who has read every page of the Automotive Cloud documentation and knows the exact order to configure things, which permission sets to assign, and how to avoid irreversible gotchas.

---

## Who Is This For?

| Role | How You'll Use It |
|------|-------------------|
| **Salesforce Consultant** | Get step-by-step setup guidance for each Automotive Cloud module (vehicles, warranties, finance, etc.) |
| **Salesforce Admin** | Run health checks, audit permission sets, configure page layouts, and scaffold test data |
| **Developer** | Generate test data fixtures, validate connected services, debug API issues |
| **SDET / QA** | Create end-to-end test data, export/import org configurations, diff sandbox environments |
| **Dealer / OEM Stakeholders** | Understand what each feature does and how modules connect |

---

## How to Install

### Prerequisites

- **Node.js** v18 or later
- **Claude Code** (Claude's CLI-based AI coding assistant)
- A **Salesforce org** with Automotive Cloud licenses (for live org interactions)

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/salesforce-misc/AutomotiveAssist.git
cd AutomotiveAssist
```

2. **Install dependencies**

```bash
npm install
```

3. **Build the plugin**

```bash
npm run build
```

4. **Register the plugin with Claude Code**

```bash
claude --plugin-dir /path/to/AutomotiveAssist
```

5. **Activate inside Claude Code**

Once Claude Code is running, type the following command to initialize the plugin and confirm it's working:

```
/auto:setup-plugin
```

You should see a confirmation that the Automotive Cloud skills, commands, and agents are loaded and ready.

---

## Capabilities

### Skills (Auto-Invoked Guidance)

Skills are topic-specific knowledge modules that activate automatically when you ask about a related area. They provide implementation guidance, best practices, and dependency warnings.

| Skill Area | What It Covers |
|------------|----------------|
| **Data Model** | The 12 object clusters (stakeholders, vehicles, finance, inventory, etc.) and how they relate |
| **Vehicles & Assets** | Vehicle definitions, asset record types, ownership tracking, fleet management |
| **Captive Finance** | Loans, leases, financial accounts, balances, transactions, lending console |
| **Warranty & Claims** | Warranty terms, code sets, claim adjudication, supplier recovery |
| **Scheduler** | Test drives and service appointments with multi-resource scheduling |
| **Connected Services** | Telemetry integration, remote actions, event orchestration |
| **Leads & Opportunities** | Enhanced partner lead management, line items, preferred sellers |
| **Inventory & Dealers** | Parts tracking, transfers, criteria-based vehicle search, dealer KPIs |
| **Experience Cloud** | Partner and customer portals with Automotive templates |
| **Agentforce** | Out-of-the-box AI agents and actions for vehicles, service, and lending |
| **Data Cloud & Analytics** | Automotive data kit, CRM Analytics dashboards, calculated insights |
| **ARC (Actionable Relationship Center)** | Relationship graphs for accounts, vehicles, and contacts |
| **Partner Visits** | Visit planning, action plans, KPIs, mobile app support |
| **Compliance** | Compliant data sharing, stage-based access, identity verification |

### Commands (On-Demand Actions)

Commands are explicit actions you invoke by typing a slash command in Claude Code.

| Command | What It Does |
|---------|--------------|
| `/auto:setup-plugin` | Initialize the plugin and verify your environment |
| `/auto:health-check` | Scan your org for missing permissions, misconfigured settings, or incomplete setup steps |
| `/auto:audit` | Deep audit of permission set license capacity, OWD settings, and profile configurations |
| `/auto:describe` | Describe any Automotive Cloud object — fields, relationships, and record types |
| `/auto:soql-query` | Run SOQL queries against your connected org |
| `/auto:scaffold-test-data` | Generate realistic test data for vehicles, assets, accounts, warranties, and more |
| `/auto:configure-*` | Step-by-step configuration wizards for each module (vehicles, warranty, finance, scheduler, etc.) |
| `/auto:diff-orgs` | Compare configurations between two orgs (e.g., sandbox vs. production) |
| `/auto:export-config` | Export org configuration as a portable snapshot |
| `/auto:import-config` | Import a previously exported configuration into another org |
| `/auto:release-notes` | Get a summary of what's new in the latest Automotive Cloud release |
| `/auto:docs` | Quick-access links to official Salesforce documentation |

### Agents (Persona-Driven Assistants)

Agents combine skills and commands into persona-focused workflows. Each agent understands the typical tasks, priorities, and concerns of a specific role.

| Agent | Focus Area |
|-------|-----------|
| **auto-consultant** | Full implementation lifecycle — setup sequencing, architecture decisions, stakeholder communication |
| **auto-admin** | Day-to-day org management — permissions, page layouts, record types, flows |
| **auto-developer** | Technical integrations — connected services, Apex testing, API debugging |
| **auto-sdet** | Test strategy — data fixtures, regression suites, sandbox management, go-live validation |
| **auto-customer-support** | Service console workflows — case management, vehicle history, knowledge |
| **auto-journey-architect** | Cross-module orchestration — understanding how all 26 journeys connect |

### MCP Server (Salesforce Org Tools)

The plugin includes a local MCP (Model Context Protocol) server that provides direct integration with your Salesforce org:

- **SOQL queries** — run ad-hoc queries without leaving Claude Code
- **Metadata describe** — inspect objects, fields, and relationships
- **Deployment helpers** — push and pull configuration
- **Audit framework** — automated checks against best-practice baselines

---

## Key Concepts

### The 26-Journey Blueprint

Automotive Cloud is organized around 26 distinct functional journeys (e.g., "Org & License Setup", "Vehicles, Assets & Fleets", "Warranties & Claims"). The plugin follows this exact blueprint to ensure you configure things in the correct dependency order and never skip a prerequisite.

### Irreversible Steps

Some configuration steps cannot be undone once enabled. The plugin warns you before you reach these points:

- **Person Accounts** — requires a support ticket; changes Account/Contact behavior permanently
- **Lightning Knowledge** — one-way toggle
- **Timeline** — one-way toggle
- **Vehicle and Asset Finance Additional Components** — depends on Timeline being enabled first

### Setup Sequence

The plugin enforces a 43-step dependency-ordered setup sequence. You never have to guess "what comes next?" — it handles the ordering for you and warns if prerequisites are missing.

---

## Getting Help

- Type `/auto:help` in Claude Code for a list of all available commands
- Type `/auto:docs` to get links to official Salesforce Automotive Cloud documentation
- Check the `JOURNEY_MAP.md` file for the full module blueprint
- Check the `PERSONA_JOURNEYS.md` file for role-specific workflows
