# claude-for-automotive

A Claude Code plugin for **Salesforce Automotive Cloud** — knowledge, skills, slash commands, agents, and Salesforce org tools for OEM and dealer implementations.

---

## 🆕 New Features & Fixes

- **Org tools now work**: In v0.1.0, every org tool returned a placeholder "not yet implemented" message, even with a connected org. Setup checks, org listing and selection, SOQL, describe, record create/read/update/delete, bulk loads, anonymous Apex, metadata deploy/retrieve, user lists and permission set assignment now run against your org through the Salesforce CLI.
- **Knowledge tools read the bundled docs**: Module docs, admin-guide sections, troubleshooting, exercises and release notes are served from `knowledge/`, with full-text search across all of them.
- **`/auto:audit` runs real checks**: It checks record-type splits and PSL assignment against the org. Rules it can't check yet are marked **skipped** with a reason, never passed.
- **Errors look like errors**: A failed call now returns an error with the Salesforce message (for example `INVALID_TYPE` or `NOT_FOUND`) instead of a reply that looks like success.
- **You always know which org you're on**: Every org call uses an explicit target org: the one you picked with `set_target_org`, then your CLI default, then the only connected org. Each response starts with `[org: <alias>]`. The choice lasts for the session and never rewrites your `sf` config.
- **Safer `open_org`**: The org opens in your browser, and the login URL (which contains a session token) is no longer passed back to the chat.
- **Commands rebuilt on working tools**: `/auto:health-check`, `/auto:status`, `/auto:export-config`, `/auto:import-config` (preview with a dry-run deploy first), `/auto:diff-orgs` and `/auto:scaffold-test-data` now use the working org tools instead of tools that aren't built yet.
- **No more phantom tools**: The 30 placeholder tools (trigger handlers, Admin Console settings, actions, mobile DB schema, per-feature config checks) are no longer registered. Skills, agents and `CLAUDE.md` now point to the working tools, for example `retrieve_metadata` for Setup settings and `run_soql` on `ApexTrigger` / `FlowDefinitionView` for inactive automation.

---

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

`v0.1.0` — skills, commands and agents authored. The MCP server registers only working tools: knowledge, generic org (SOQL, describe, CRUD, Apex, metadata, users and permission sets) and validation. Org-wide checks (health, status, export, import, diff, test data) are slash commands built on those tools.

## Open Source Governance

- License: Apache 2.0 (`LICENSE.txt`)
- Contribution guide: `CONTRIBUTING.md`
- Code of conduct: `CODE_OF_CONDUCT.md`
- Security policy: `SECURITY.md`
