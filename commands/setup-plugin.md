---
description: Check Automotive Cloud plugin setup status and connect to a Salesforce org
---

# Automotive Cloud Setup Check

Check the current setup status for the Automotive Cloud plugin and guide through connecting to a Salesforce org.

## Steps

1. Use `check_auto_setup` to verify:
   - Salesforce CLI installation status
   - Authenticated orgs
   - Current target org

2. If SF CLI is not installed:
   - Offer to install with `install_sf_cli`
   - Or provide manual install: `npm install -g @salesforce/cli`

3. If no orgs authenticated:
   - Provide: `sf org login web --alias my-auto-org`
   - For sandbox: `sf org login web --alias my-sandbox --instance-url https://test.salesforce.com`

4. If multiple orgs exist:
   - List with `list_sf_orgs`
   - Help pick with `set_target_org`

5. Once connected:
   - Confirm the target org
   - Show available `/auto:*` commands and capabilities

Present results in a clear, actionable format.
