# Vehicles, Assets & Fleets

Vehicle/Asset console is the single source of truth for a vehicle's lifecycle. Fleets group multiple assets with their participants. Asset Title and Asset Title Party track ownership transfer.

## Primary objects

`Vehicle`, `Asset`, `Asset Account Participant`, `Asset Contact Participant`, `Asset Warranty`, `Asset Title`, `Asset Title Party`, `Fleet`, `Fleet Asset`, `Fleet Participant`.

## Sources

- Journey row 9 in [`JOURNEY_MAP.md`](../../../JOURNEY_MAP.md)
- Admin guide: [`011-manage-vehicles-and-assets-in-automotive-cloud.md`](../../guides/admin-guide/011-manage-vehicles-and-assets-in-automotive-cloud.md)
- PDF pages: 479-500

## Setup-sequence position

Steps 13-16 — Asset record types (`Vehicle`, `Parts`) → Vehicle → Asset participants → Asset Title.

## Mandatory record-type split

`Asset` must have **`Vehicle`** and **`Parts`** record types with separate page layouts. Asset sharing controls Vehicle sharing.
