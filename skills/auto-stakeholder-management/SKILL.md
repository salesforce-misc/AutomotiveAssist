---
name: auto-stakeholder-management
description: Guides Automotive Cloud stakeholder configuration — Person Account (irreversible), Business Account, Contact, Account Contact Relationship, Account Account Relationship, Contact Contact Relationship, Party Role Relationship, Party Relationship Group, Asset Account Participant, Asset Contact Participant, Business Profile, Internal Organization Unit, Supplier. Use when modeling customers, dealers, households, drivers, owners, or supplier organizations.
---

# Automotive Cloud Stakeholder Management

The Automotive stakeholder model captures every person/org touching a vehicle: customers, drivers, dealers, financiers, suppliers, internal org units. The data model uses the **Group Membership** + **asset participant** patterns from Industries Common.

## Setup order (from `JOURNEY_MAP.md` §2)

1. **Person Accounts** *(irreversible — file support ticket; OWD prerequisite)*
   - From Setup → Person Accounts. Acknowledge org implications.
   - Account must have ≥1 Record Type.
   - Profiles with Account read access must have Contact read access.
   - OWD: Contact = Controlled By Parent **or** both Account & Contact = Private.
2. **Account Record Types** — Business Account + Person Account (default), plus dealer / household RTs as needed.
3. **Contact** — page layout + sharing tweaks (Controlled By Parent recommended).
4. **Account Contact Relationship** — multi-account contacts (a member of multiple households).
5. **Account Account Relationship** — e.g., a household's preferred dealership.
6. **Contact Contact Relationship** + **Party Role Relationship** — spouse / partner / lawyer / accountant.
7. **Party Relationship Group** — household / dealer group / supplier group. Requires `Group Membership` PSL + `Group Membership Settings` enabled.
8. **Business Profile** + **Internal Organization Unit** — dealer accounts and internal departments.
9. **Supplier** — for Warranty Supplier Recovery later.
10. **Asset Account Participant** + **Asset Contact Participant** — multi-stakeholder model on each Asset (owner, co-owner, driver, lien holder, dealer, financier).

## Page-layout essentials

### Account
Drag these related lists onto the Account record page:

- Party Relationship Groups
- Associated Locations
- Contacts
- Engagement Interactions
- Sales Agreements
- Assets
- Asset Account Participants
- Vehicles
- Visits
- Service Appointments

Add the **Events and Milestones** component (right sidebar) and the **ARC Relationship Graph** component (right sidebar) — ARC graph reference comes last in setup.

### Business Profile
Fields to add: Business Partner Type, External Reference Number, Business Partner Registered Name, Service Type, Service Territory, Business Partner Code, Region Name (with org-specific picklist values).

## OWD highlights for stakeholder objects

- `Account` → Public Read/Write (internal + external)
- `Contact` → Controlled By Parent (internal + external)
- `Account Account Relationship` → Private (internal + external)
- `Party Role Relationship` → Private (internal + external)
- `Account Contact Relationship` (sharing inherits from Account/Contact)

## Common pitfalls

- Enabling Person Account without Account record types → toggle disabled.
- Setting up Asset Account Participant before Asset record types exist → relationships can't reference the right RT.
- Forgetting that Contact Contact Relationship needs **both** sides as Person Accounts or both as Contacts in standard usage.
- Skipping Group Membership PSL → Party Relationship Group page won't load.

## Tools

- `check_account_config` — run the stakeholder section of health-check
- `run_soql` to verify Account / Contact / ACR / AAR data
- `describe_sobject` to confirm field API names per release
