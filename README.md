# claude-for-automotive

A Claude Code plugin for **Salesforce Automotive Cloud** — knowledge, skills, slash commands, agents, and Salesforce org tools for OEM and dealer implementations.



## Quick start

```bash
npm install
npm run build
claude --plugin-dir /Users/sgrandhi/Downloads/AutomotiveAssist
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

- `JOURNEY_MAP.md` — the canonical journey + setup-sequence blueprint that drives every skill and command
- `PERSONA_JOURNEYS.md` — per-persona setup + daily-loop journeys (SDET / Consultant / Admin / Developer / Dealer / Compliance)
- `CLAUDE.md` — repo-level coding instructions for AI agents
- `documentation/` — source PDFs and links

## Status

`v0.1.0` — scaffold complete with skills + commands + agents authored. MCP server contains tool stubs to be filled in.
