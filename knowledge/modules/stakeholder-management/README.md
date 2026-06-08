# Stakeholder Management

Captures the full stakeholder graph for an Automotive Cloud customer: customers, drivers, dealers, financiers, suppliers, and internal org units. Households and dealer groups are modeled with `Party Relationship Group`. Asset participants tie people and accounts to specific vehicles.

## Primary objects

`Person Account`, `Business Account`, `Contact`, `Account Contact Relationship`, `Account Account Relationship`, `Contact Contact Relationship`, `Party Role Relationship`, `Party Relationship Group`, `Asset Account Participant`, `Asset Contact Participant`, `Business Profile`, `Internal Organization Unit`, `Supplier`.

## Sources

- Journey row 6 in [`JOURNEY_MAP.md`](../../../JOURNEY_MAP.md)
- Admin guide: [`008-manage-stakeholders-in-automotive-cloud.md`](../../guides/admin-guide/008-manage-stakeholders-in-automotive-cloud.md)
- PDF pages: 334-357

## Setup-sequence position

Steps 3-10 in `JOURNEY_MAP.md` Part 2 (Person Accounts → Account RTs → Contact → ACR → AAR → CCR/PRR → Party Relationship Group → Business Profile/IOU/Supplier).

## Irreversible toggle

Person Accounts (file support ticket; OWD must allow `Contact Controlled By Parent` or both Private).
