---
name: auto-agentforce
description: Guides Agentforce for Automotive Cloud — out-of-the-box subagents and actions for managing customer accounts, vehicles, dealers, service processes, and vehicle loans/leases. Includes Einstein Trust Layer, Einstein Studio, Einstein Summary on Vehicle and Asset pages. Use when configuring Agentforce topics, actions, or AI-driven workflows.
---

# Agentforce for Automotive Cloud

Agentforce ships subagents and actions tailored to Automotive Cloud workflows: customer account management, vehicle tracking, sales / service requests, dealer operations, and Automotive loans / leases via natural-language interactions.

## What's included

- Out-of-the-box **subagents** for vehicles, dealers, service processes, financial accounts.
- Out-of-the-box **actions** to create cases / tasks, generate performance summaries, update records.
- **Einstein Studio** integration for custom prompt templates and topics.
- **Einstein Summary** component on Vehicle and Asset pages → AI-generated record summaries.
- **Einstein Trust Layer** ensures business data is protected.

## Setup

1. Configure Einstein generative AI features (Setup → Einstein → enable).
2. Configure Einstein Trust Layer settings.
3. Configure topics + actions in Einstein Studio.
4. Add **Einstein Summary** component to Vehicle and Asset Lightning record pages.
5. Assign Agentforce-related permission sets.

## Topic + action design pattern

Topics group related actions. Out-of-the-box topics typically:

- **Vehicle Information** — describe vehicle status, recall info, service history.
- **Dealer Operations** — list inventory, track delivery, performance metrics.
- **Service Process** — create cases, assign service appointments, update statuses.
- **Loan / Lease** — balance lookup, fee reversal, address change, statement retrieval.

## Common pitfalls

- Einstein Trust Layer not configured → safety guardrails missing.
- Einstein Summary added but record has no related data → component renders empty.
- Custom topic without action grants → user requests don't trigger anything.

## Tools

- `list_admin_settings` (Einstein, Einstein Studio)
- `run_apex` for testing custom action implementations

## Related skills

- `auto-data-cloud-analytics` — Data Cloud powers many Agentforce predictions
- `auto-flows-industries` — Omnistudio and BRE used by Agentforce actions
