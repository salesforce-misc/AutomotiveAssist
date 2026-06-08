---
name: auto-data-cloud-analytics
description: Guides Data Cloud + CRM Analytics for Automotive — Automotive data kit (calculated insights, data streams), Analytics for Automotive CRM Analytics template (Dealer Performance, OEM Performance, vehicle sales). Use when configuring data unification or analytics dashboards.
---

# Data Cloud + Analytics for Automotive

Two related capabilities:

1. **Data Cloud** — harmonize + unify dealer management systems, vehicle telematics, subscription services data without storing in Automotive Cloud directly.
2. **CRM Analytics** — predefined dashboards for sales lifecycle, revenue, inventory, dealer performance.

## Data Cloud — Automotive data kit

Setup → Data Cloud → install **Automotive data kit**. Provides:
- Predefined calculated insights for Automotive Cloud entities.
- Data streams for vehicle telematics, dealer management systems, subscription data.
- Pre-modeled segments for customer engagement journeys + dynamic offers.

## CRM Analytics — Analytics for Automotive

PSL: `CRM Analytics Plus and Manufacturing Analytics Apps`.

Setup → CRM Analytics Studio → Create app → **Analytics for Automotive** template.

Predefined dashboards:
- **Dealer Performance** — inventory, sales, lead conversion, agreement compliance, follow-up tasks. Has a Leads tab for lead conversion + pipeline by region/period.
- **Original Equipment Manufacturer Performance** — top-selling products, product sales by region/period, sales trends.
- Vehicle sales by region, period, model, dealer.
- Lead pipeline by region/period.

## Common usage flow

1. Stand up Data Cloud + connect telematics + dealer management systems.
2. Run the Automotive data kit to populate calculated insights.
3. Build segments / dynamic content based on those insights.
4. Surface dashboards via CRM Analytics for Automotive template.
5. Embed dashboards on Account / Vehicle / Asset record pages.

## Common pitfalls

- Installing Analytics for Automotive without the PSL assigned → dashboards visible but data missing.
- Data Cloud not connected to source systems → data kit returns empty insights.
- Forgetting to refresh CRM Analytics dataflows → stale data on dashboards.

## Tools

- `list_admin_settings` (Data Cloud, CRM Analytics)
- `run_apex` for batch insight recalculation
