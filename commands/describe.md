---
description: Describe a Salesforce object's fields and metadata in your Automotive Cloud org
---

# Describe Salesforce Object

Get detailed metadata for any Salesforce object — fields, types, picklist values, relationships, record types.

$ARGUMENTS

## Steps

1. If an object name was provided in arguments → call `describe_sobject` with that name.
2. If no object → ask which object the user wants to describe.
3. Render: object label, API name, custom flag, available record types, and a field table (Label, API Name, Type, Length, Required, External Id, Picklist values).
4. Highlight any fields specific to Automotive Cloud (Vehicle, Asset, Financial Account, Claim, etc.).
5. If the object has child relationships, list them too.
