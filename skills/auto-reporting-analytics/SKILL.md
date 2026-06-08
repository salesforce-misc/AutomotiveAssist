---
name: auto-reporting-analytics
description: Guides Automotive Cloud reports, dashboards, and forecasting — standard Salesforce reports, CRM Analytics dashboards (Analytics for Automotive template), Advanced Account Forecasting, Manufacturing Sales Agreements, Account Manager Targets. Use when configuring reporting or forecasting.
---

# Automotive Cloud Reporting & Analytics

Combination of standard Salesforce reports / dashboards and CRM Analytics + Manufacturing-Cloud forecasting.

## Standard reports / dashboards

Build standard reports against Vehicle, Asset, Lead, Opportunity, Visit, Claim, Sales Agreement, Rebate Claim. Use Lightning dashboards for KPIs.

## CRM Analytics — Analytics for Automotive

See `auto-data-cloud-analytics`. Predefined dashboards: Dealer Performance, OEM Performance, Lead conversion, Vehicle sales by region/period.

## Advanced Account Forecasting

PSL: `Manufacturing Advanced Account Forecast Psl`. Create accurate, granular forecasts customized for your business — by account, region, vehicle line, or custom dimension.

Objects: `Advanced Account Forecast Fact`, `Advanced Account Forecast Set`.

## Manufacturing Sales Agreements

PSL: `Manufacturing Sales Agreements Psl`. Long-term dealer commitments tracked by quantity + revenue over time. Assess dealer compliance.

## Manufacturing Account Manager Targets

PSL: `Manufacturing Account Manager Targets Psl`. Set sales targets and distribute across dealer accounts.

## Manufacturing Program-Based Business

PSL: `Program Based Business Psl for Manufacturing Cloud`. Manage new car model + variant programs — forecast component requirements, convert proposals to opportunities.

## Common reporting questions

- "Top-selling vehicles last quarter" → CRM Analytics OEM Performance dashboard, or standard Opportunity report grouped by Product.
- "Lead conversion rate by dealer" → CRM Analytics Dealer Performance dashboard.
- "Inventory aging" → standard Product Item report; CRM Analytics dashboard for visualization.
- "Claim throughput" → standard Claim report; or build a CRM Analytics dataflow from Claim + Claim Coverage.
- "Sales agreement compliance" → Manufacturing Sales Agreements module + CRM Analytics dataflow.
- "Forecast vs. actual by territory" → Advanced Account Forecasting + Account Manager Targets.

## Tools

- `run_soql` for ad-hoc reporting
- `describe_sobject` to confirm field API names for report builders
