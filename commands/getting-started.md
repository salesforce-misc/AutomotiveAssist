---
description: Interactive onboarding for the Automotive Cloud plugin
---

# Automotive Cloud — Getting Started

Walk a new user through the plugin's capabilities and connect to an org.

## Steps

1. Greet the user and confirm their persona (SDET / Consultant / Admin / Developer).
2. Run `/auto:setup-plugin` to check setup.
3. If connected, run `/auto:status` to show the org snapshot.
4. Based on persona:
   - **SDET** → showcase `/auto:scaffold-test-data`, `/auto:audit`, `/auto:health-check`, point at `auto-testing-go-live` skill.
   - **Consultant** → showcase `/auto:health-check`, `/auto:diff-orgs`, `/auto:export-config`, point at `auto-implementation` skill.
   - **Admin** → showcase `/auto:audit`, `/auto:configure-permissions`, `/auto:configure-page-layouts`.
   - **Developer** → showcase `/auto:soql-query`, `/auto:describe`, `auto-flows-industries` skill, MCP `run_apex` tool.
5. Offer the user a sample task tailored to their persona.
