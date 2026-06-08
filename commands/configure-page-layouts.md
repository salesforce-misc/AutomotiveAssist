---
description: Wizard — configure page layouts for Account, Lead, Opportunity, Product, Asset, Vehicle, Business Profile, Visit
---

# Configure Page Layouts

Interactive wizard for page layout configuration. See `auto-page-layouts` skill for the per-object field/related-list/component requirements.

## Steps

1. Confirm record types exist (Product Vehicle/Parts; Asset Vehicle/Parts).
2. Per-object, walk through the required fields, related lists, components.
3. Use `retrieve_metadata` to fetch existing layouts; use `deploy_metadata` to apply changes.
4. Special attention:
   - Lead/Opportunity: add Schedule Test Drive button, remove default Schedule Appointment quick action.
   - Account: add Events and Milestones, ARC Relationship Graph (last).
   - Vehicle: Timeline, Record Alerts, ARC, Einstein Summary.
   - Product (Vehicle RT): Bundle Tree.
   - Asset: View Asset Hierarchy quick action.
5. Activate the Lightning page after edits.
