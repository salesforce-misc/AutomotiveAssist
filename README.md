# claude-for-automotive

A Claude Code plugin for **Salesforce Automotive Cloud** — knowledge, skills, slash commands, agents, and Salesforce org tools for OEM and dealer implementations.

## Overview

AutomotiveAssist is an AI-powered assistant that helps implementation teams configure Salesforce Automotive Cloud faster and with fewer mistakes. It provides:

- **Expert guidance** on all 26 Automotive Cloud functional journeys (data model, vehicles, finance, warranties, scheduler, connected services, and more)
- **Automated health checks and audits** to catch missing permissions, misconfigured settings, or skipped prerequisites
- **Test data scaffolding** for realistic vehicles, assets, accounts, warranties, and financial records
- **Persona-driven agents** that adapt to your role — consultant, admin, developer, or SDET
- **Direct org integration** via SOQL, metadata describe, and configuration export/import

For a full walkthrough of capabilities, installation steps, and available commands, see the **[User Guide](docs/USER_GUIDE.md)**.

## Quick start

```bash
npm install
npm run build
claude --plugin-dir /path/to/AutomotiveAssist
```

Then in Claude Code:

```
/auto:setup-plugin
```

## What's inside

- **Skills** — Auto-invoked guidance for each Automotive Cloud journey (data model, vehicles, finance, warranty, scheduler, ARC, etc.)
- **Commands** — `/auto:configure-*`, `/auto:audit`, `/auto:health-check`, `/auto:scaffold-test-data` (SDET focus), and more
- **Agents** — `auto-sdet`, `auto-consultant`, `auto-admin`, `auto-developer`
- **MCP server** — Salesforce CLI wrappers, SOQL/Tooling API helpers, audit framework

## Reference

- [`docs/USER_GUIDE.md`](docs/USER_GUIDE.md) — complete user guide with installation, capabilities, and key concepts
- `JOURNEY_MAP.md` — the canonical journey + setup-sequence blueprint that drives every skill and command
- `PERSONA_JOURNEYS.md` — per-persona setup + daily-loop journeys (SDET / Consultant / Admin / Developer / Dealer / Compliance)
- `CLAUDE.md` — repo-level coding instructions for AI agents
- `documentation/` — source PDFs and links

## Status

`v0.1.0` — scaffold complete with skills + commands + agents authored. MCP server contains tool stubs to be filled in.

## Open Source Governance

- License: Apache 2.0 (`LICENSE.txt`)
- Contribution guide: `CONTRIBUTING.md`
- Code of conduct: `CODE_OF_CONDUCT.md`
- Security policy: `SECURITY.md`
