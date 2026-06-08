---
description: Wizard — configure Business Brand, Catalog, Vehicle Definition, Product (Vehicle / Parts record types)
---

# Configure Products

Interactive wizard for the Product & Vehicle Definition journey.

## Steps

1. Confirm Product record types **Vehicle** and **Parts** exist. If not → guide creation via `retrieve_metadata` / `deploy_metadata`.
2. Confirm per-RT page layouts contain the required fields (see `auto-product-management` skill).
3. Walk through Vehicle Definition setup — make / model / trim / fuel / battery specs.
4. Define Business Brands, Catalogs, Categories.
5. Set up Product Related Material / Component for compatibility mapping.
6. Verify Product OWD (Public Read/Write internal, Public Read Only external) — Vehicle Definition inherits from Product.
