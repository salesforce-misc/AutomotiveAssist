# Inventory & Dealer Management

Tracks vehicles + parts at locations; transfers; criteria-based vehicle inventory search (Data Pipelines / DPE template). Partner Performance Management for dealer KPIs, retail delivery reports, sales agreements.

## Primary objects

`Product Item`, `Product Transfer`, `Product Transfer State`, `Product Request`, `Serialized Product`, `Shipment`, `Return Order`, `Vehicle Searchable Field`, `Sales Agreement`, `Account Manager Target`, `Manufacturing Program`.

## Sources

- Journey row 14 in [`JOURNEY_MAP.md`](../../../JOURNEY_MAP.md)
- Admin guide: [`016-manage-vehicle-inventory-and-dealers-in-automotive-cloud.md`](../../guides/admin-guide/016-manage-vehicle-inventory-and-dealers-in-automotive-cloud.md), [`017-manage-dealer-performance-in-automotive-cloud.md`](../../guides/admin-guide/017-manage-dealer-performance-in-automotive-cloud.md)
- PDF pages: 705-769

## Setup-sequence position

Steps 21-22, 32 — Inventory Settings + Criteria-Based Search and Filter (DPE template, requires Automotive enabled first) + Data Pipelines → Product Item / Product Transfer / Serialized Product / Product Request / Shipment / Return Order → Partner Performance Management.

## Lineage note

Inventory uses the Field Service Inventory data model. Reference Field Service docs when modeling.
