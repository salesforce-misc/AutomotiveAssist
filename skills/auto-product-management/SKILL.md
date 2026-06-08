---
name: auto-product-management
description: Guides Automotive Cloud product catalog setup — Business Brand, Catalog, Category, Product (with mandatory Vehicle and Parts record types), Vehicle Definition, Product Related Material, Product Related Component, product bundles. Use when configuring vehicle models or part/accessory catalogs.
---

# Automotive Cloud Product & Vehicle Definition

The product hierarchy: **Business Brand → Catalog → Category → Product (Vehicle / Parts RTs) → Product Related Material/Component**. Vehicle Definition holds make/model/trim/fuel/battery specifications.

## Mandatory record-type split

Product **must** be split into `Vehicle` and `Parts` record types with separate page layouts. Many features assume this split.

### Vehicle record type — Product page layout fields
- Business Brand
- Make Name
- Model Name
- Model Year
- Version Name
- Vehicle Trim Type

### Parts record type — Product page layout fields
- Harmonized System Code
- Harmonized Tariff Schedule Code
- Manufacturer Short Name
- Manufacturer Part Number
- Product Line Code
- Product Category Code
- Universal Product Code
- Availability Date
- Discontinued Date
- Environmental Protection Regulation Compliant
- Certified

### Both layouts — related lists
- Assets
- Product Warranty Terms
- Product Items
- Price Books
- Child Products
- Parent Products

Add the **Bundle Tree** component to the Lightning record page to view product bundles.

## Vehicle Definition

`Vehicle Definition` records define the make/model template — fuel and battery specs, external/internal features. **Sharing inherits from Product.** A Vehicle record references a Vehicle Definition; Asset references a Vehicle.

## Setup order

1. Permission Set Licenses (`Automotive Foundation User`, `Product Catalog Management Designer` for catalog work).
2. Create Product record types (Vehicle, Parts).
3. Configure Product page layouts per RT.
4. Create Vehicle Definition records (one per make/model/trim).
5. Define Business Brands, Catalogs, Categories.
6. Set up Product Related Material / Product Related Component (compatibility mapping).
7. Configure Price Books for vehicle pricing.

## OWD

- `Product` → Internal Public Read/Write, External Public Read Only.
- `Vehicle Definition` sharing **inherits from Product**.

## Common pitfalls

- Skipping the Vehicle/Parts record type split → page layouts get cluttered, validation rules can't differentiate, related-list filters break.
- Vehicle Definition sharing too restrictive → external dealers can't see model specs.
- Forgetting Bundle Tree component → product bundles render incorrectly.

## Tools

- `describe_sobject` for Product, Product2, ProductDefinition variants
- `run_soql` to confirm record type assignments
- `retrieve_metadata` to inspect page layouts and record types
