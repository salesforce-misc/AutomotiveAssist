# Product & Vehicle Definition

Product hierarchy: Business Brand → Catalog → Category → Product (Vehicle / Parts record types) → Product Related Material/Component. Vehicle Definition records hold make/model/trim/fuel/battery specs that Vehicle records reference.

## Primary objects

`Business Brand`, `Catalog`, `Category`, `Product2` (Vehicle / Parts RTs), `Vehicle Definition`, `Product Related Material`, `Product Related Component`.

## Sources

- Journey row 7 in [`JOURNEY_MAP.md`](../../../JOURNEY_MAP.md)
- Admin guide: [`007-manage-products-in-automotive-cloud.md`](../../guides/admin-guide/007-manage-products-in-automotive-cloud.md)
- PDF pages: 319-333

## Setup-sequence position

Steps 11-12 — Product record types (`Vehicle`, `Parts`) → Vehicle Definition.

## Mandatory record-type split

`Product` must have **`Vehicle`** and **`Parts`** record types with separate page layouts. Vehicle Definition sharing inherits from Product.
