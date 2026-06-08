# ARC — Actionable Relationship Center

**Always last** in the setup sequence. ARC graph definitions on Account / Vehicle / Contact require every other relationship object, custom record type, and component above to exist first.

## Primary surfaces

`ARC Relationship Graph` Lightning component, ARC graph definitions on `Account`, `Vehicle`, `Contact`, `ARC Access` PSL.

## Sources

- Journey row 4 in [`JOURNEY_MAP.md`](../../../JOURNEY_MAP.md)
- Admin guide coverage lives in the setup chapter [`004-set-up-and-configure-automotive-cloud.md`](../../guides/admin-guide/004-set-up-and-configure-automotive-cloud.md)

## Setup-sequence position

Step 43 — **always last**. Add ARC Relationship Graph component to Lightning record pages and activate.

## Hard prerequisites (will fail without these)

Account, Account Contact Relationship, Account Account Relationship, Contact Contact Relationship, Party Role Relationship, Party Relationship Group, Asset, Vehicle, Asset Account Participant, Asset Contact Participant, plus Group Membership PSL + `Group Membership Settings` enabled.
