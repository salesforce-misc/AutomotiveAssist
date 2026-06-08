---
description: Wizard — configure ARC Relationship Graphs on Account, Vehicle, Contact (always last)
---

# Configure ARC

Interactive wizard for the Actionable Relationship Center. **Always last** in the setup sequence.

## Steps

1. Verify all upstream relationship objects exist: ACR, AAR, CCR, PRR, Party Relationship Group, Asset Account / Contact Participant, Vehicle Definition, Asset, Vehicle, Financial Account family.
2. PSL: `ARC Access`.
3. Create ARC graph definitions for Account, Vehicle, Contact.
4. Add **ARC Relationship Graph** Lightning component to:
   - Account record page (right sidebar)
   - Vehicle record page (right sidebar)
   - Contact record page (right sidebar — if applicable)
5. In each component's properties, select the active graph definition.
6. Save and **Activate** the Lightning page.
7. Verify the graph renders for at least one record per object as the user persona expected to see it.
