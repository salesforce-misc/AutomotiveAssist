---
description: Browse Automotive Cloud documentation by category
---

# Browse Automotive Cloud Documentation

Navigate Automotive Cloud documentation by category (modules, help, guides, exercises, troubleshooting).

## Steps

1. Call `list_auto_help_docs` to list all available docs grouped by category.
2. Present the categories:
   - Modules (per-feature deep-dives)
   - Help (official Salesforce help)
   - Guides (developer guide, mobile setup)
   - Exercises (hands-on training)
   - Troubleshooting (common issues)
3. Ask the user which category to explore.
4. Call `get_auto_module_docs`, `get_auto_help_doc`, `get_auto_guide`, `get_auto_exercise`, or `get_auto_troubleshooting` based on the selection.
