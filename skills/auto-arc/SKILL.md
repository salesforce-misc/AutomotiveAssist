---
name: auto-arc
description: Guides Actionable Relationship Center (ARC) configuration in Automotive Cloud — ARC graph definitions on Account, Vehicle, and Contact. Always last in the setup sequence. Use when configuring relationship visualization across households, vehicles, financial accounts, dealers, and assets.
---

# Actionable Relationship Center (ARC) — Automotive Cloud

ARC is **always last** in the Automotive Cloud setup sequence. ARC graph definitions reference every other relationship object, custom record type, and component, so they all need to exist first.

## Setup

1. PSL: `ARC Access` (anyone using the ARC Relationship Graph component).
2. Create **ARC graph definitions** for Account, Vehicle, Contact (or any other root object).
3. Add **ARC Relationship Graph** Lightning component to:
   - Account record page (right sidebar).
   - Vehicle record page (right sidebar).
   - Contact record page (right sidebar — if applicable).
4. In each component's properties, select the active graph definition.
5. Save and **Activate** the Lightning page.

## Relationships ARC visualizes

For an Account root, ARC typically shows:
- Households (via Party Relationship Group / Account Account Relationship)
- Person Accounts in the household (via Account Contact Relationship)
- Vehicles owned (via Asset → Vehicle)
- Financial Accounts (via Financial Account Party / Party Financial Asset)
- Dealer relationships (via Account Account Relationship with role)
- Suppliers (if relevant)

For a Vehicle root, ARC typically shows:
- Asset (and Asset Account / Contact Participants)
- Vehicle Definition
- Asset Title (and Asset Title Party)
- Linked Financial Account
- Warranty terms / claims
- Service appointment history

For a Contact root, ARC shows the contact's accounts, household memberships, and related contacts.

## Why ARC is last

Each ARC graph node points at an object / relationship that must already exist. If you build ARC before Asset Account Participant or Party Relationship Group, the graph either fails to render those nodes or shows broken edges.

## Common pitfalls

- ARC component added but no graph definition selected → component renders empty.
- Graph definition references an object the user's profile can't access → graph renders empty for that user.
- ARC built before Person Accounts enabled → Person Account nodes missing.
- Activating Lightning page changes without flushing user sessions → users still see the old layout.

## Tools

- `retrieve_metadata` to inspect ARC graph definitions
- `run_soql` to verify the underlying relationship records exist

## Metadata details

ARC graph definitions live as the **`RelationshipGraphDefinition`** metadata type (each named file under `force-app/main/default/relationshipGraphDefinitions/<DeveloperName>.relationshipGraphDefinition-meta.xml`).

```xml
<RelationshipGraphDefinition>
  <isActive>true</isActive>
  <isTemplate>false</isTemplate>
  <masterLabel>Vehicle Asset Relationships</masterLabel>
  <relationshipGraphDefVersions>
    <graphType>HorizontalHierarchy | VerticalHierarchy | CrossObjectFieldHistory</graphType>
    <graphDefinition>{ ... full graph as JSON ... }</graphDefinition>
  </relationshipGraphDefVersions>
</RelationshipGraphDefinition>
```

The `graphDefinition` element holds the entire graph as a JSON document with this shape:

```jsonc
{
  "graph": {
    "rootNode": {
      "object": { "entity": "Vehicle" },
      "configurationType": "Primary",
      "nodeUiConfig": { "label": "Vehicle", "fieldsToDisplay": [], "actions": {} },
      "childRelationships": [
        { "OneToMany":  { "targetObjectNode": { ... }, "targetObjectField": { "field": "VehicleId", "whichEntity": "TARGET" } } },
        { "ManyToMany": { "targetObjectNode": { ... },
                          "junctionObject":   { "entity": "AssetAccountParticipant" },
                          "sourceField":      { "field": "AssetId" },
                          "targetField":      { "field": "AccountId" } } }
      ]
    },
    "globalUiConfig": {}
  }
}
```

Tooling-API note: the on-platform object name is `RelationshipGraphDefinition` (and `RelationshipGraphDefVersion` for versions). There is **no** `ArcGraph` or `IndustriesArcGraph` Tooling object — those names will fail.

## Reference graph — Vehicle root in real orgs

A production-quality "Vehicle and household" ARC graph traverses these entities (from a verified demo org's `Vehicle_Asset_Relationships`):

```
Vehicle  (root, HorizontalHierarchy)
  └─ Asset (one-to-many via Asset.VehicleId)
       ├─ Account (many-to-many via AssetAccountParticipant {AssetId, AccountId})
       │     ├─ AccountAccountRelation (many-to-many via {RelatedAccountId, RelatedInverseRecordId})
       │     └─ PartyRelationshipGroup (one-to-many via PartyRelationshipGroup.AccountId)
       │            └─ surfaces GroupSize, LifetimeAcsryPurchaseValue,
       │              LifetimeSvcPurchaseCount, LifetimeVehPurchaseValue
       └─ Contact (many-to-many via AssetContactParticipant {AssetId, ContactId})
             ├─ AccountContactRelation (one-to-many via AccountContactRelation.ContactId)
             └─ ContactContactRelation (many-to-many via {RelatedContactId, RelatedInverseRecordId})
```

Other useful root patterns observed:

| Root | Typical traversal |
|---|---|
| Account | Account → Contact → PartyRelationshipGroup (household / dealer group) |
| Account | Account → Contact → Asset → Vehicle (customer's owned vehicles) |
| Contact | Contact → Account → Vehicle (driver / household vehicle list) |
| Fleet | Fleet → Asset → Account → Contact → User (fleet manager view) |
| Product2 | Product2 → VehicleDefinition → Asset → Vehicle (catalog-to-instance) |
| ApplicationForm | ApplicationForm → ApplicationFormProduct → ApplicationFormProductProposal → ApplicationFormTerm → ApplicationFormSellerItem (Vehicle and Asset Lending intake graph) |

## Retrieval recipe (read-only)

1. Inside an SFDX project root, write `package.xml`:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <Package xmlns="http://soap.sforce.com/2006/04/metadata">
     <types><members>*</members><name>RelationshipGraphDefinition</name></types>
     <version>67.0</version>
   </Package>
   ```
2. Run `sf project retrieve start --manifest package.xml --target-org <alias>`.
3. Each graph lands under `force-app/main/default/relationshipGraphDefinitions/<Name>.relationshipGraphDefinition-meta.xml`.
4. Parse the inner `<graphDefinition>` JSON to walk the entity tree.
