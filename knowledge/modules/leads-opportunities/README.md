# Leads & Opportunities (Partner Lead Management)

Enhanced lead capture: product-level interest (`Lead Line Item`), preferred dealers (`Lead Preferred Seller`), interest windows (Earliest/Latest Interest Date), source account. Conversion preserves line items into `Opportunity Product` and `Opportunity Preferred Seller`.

## Primary objects

`Lead`, `Lead Line Item`, `Lead Preferred Seller`, `Opportunity`, `Opportunity Product`, `Opportunity Preferred Seller`.

## Sources

- Journey row 8 in [`JOURNEY_MAP.md`](../../../JOURNEY_MAP.md)
- Admin guide: [`009-manage-leads-and-opportunities-in-automotive-cloud.md`](../../guides/admin-guide/009-manage-leads-and-opportunities-in-automotive-cloud.md)
- PDF pages: 358-378

## Setup-sequence position

Steps 17-18 — Lead + Lead Line Item + Lead Preferred Seller → Opportunity + conversion mappings.

## Required page-layout edit

Replace the default Schedule Appointment quick action on `Lead` and `Opportunity` with the **Schedule Test Drive** button. Without this, test drive scheduling falls back to the default flow.
