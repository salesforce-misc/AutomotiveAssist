---
name: auto-appraisal-management
description: Guides Automotive Cloud Appraisal Management — Appraisal, Appraisal Item, Appraisal Item Add On, Appraisal Item Provider Valuation. Used in pre-sales valuation flows. Can attach to Lead, Opportunity, Financial Account, or Case. Use when configuring trade-in / appraisal flows.
---

# Automotive Cloud Appraisal Management

Helps sales reps determine optimal vehicle value during the pre-sales process. Increases revenue by surfacing trade-in valuations.

## Object model

- `Appraisal` — top-level. Stores purpose, validity end date, fee. Polymorphic parent: can attach to `Lead`, `Opportunity`, `Financial Account`, or `Case`.
- `Appraisal Item` — vehicle being appraised (model year, make, model, trim).
- `Appraisal Item Add On` — modifications / accessories added to the vehicle.
- `Appraisal Item Provider Valuation` — valuations from external market sources (e.g., Kelley Blue Book, Black Book).

## Setup

1. PSL: `Automotive Foundation User` covers Appraisal access.
2. Configure page layouts on Appraisal and child objects.
3. Optional: integrate external market valuation providers via MuleSoft / Apex.

## Common usage flow

1. Lead is interested in a trade-in.
2. Sales rep creates an Appraisal record from the Lead.
3. Adds Appraisal Items (the vehicle being traded).
4. Adds Appraisal Item Add Ons (after-market modifications, accessories).
5. Pulls Provider Valuations (KBB, Black Book) → stores in Appraisal Item Provider Valuation.
6. Determines final appraised value → applies to Lead / Opportunity / Financial Account / Case.

## Tools

- `describe_sobject` for Appraisal family
- `run_soql` for appraisal funnel reporting
