---
description: Run a comprehensive Automotive Cloud org health check
---

# Health Check

Run the comprehensive Automotive Cloud org health check.

## Steps

1. Call `health_check` and render:
   - Trigger handler activity status
   - PSL capacity + assignment counts
   - Territory model (if any) — name, hierarchy depth, count of users / accounts assigned
   - Person Account / Lightning Knowledge / Timeline toggle status
   - DB Schema (Partner Visits mobile) status
   - Mobile metadata cache freshness
   - OWD compliance vs. recommended baseline
   - Required Lightning page activations
2. Highlight blocking issues vs. warnings.
3. Suggest the next 3 commands the user should run (`/auto:configure-*`).
