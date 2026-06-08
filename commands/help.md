---
description: Search the Automotive Cloud knowledge base by topic
---

# Search Automotive Cloud Knowledge

Search across processed Automotive Cloud documentation (PDF, help docs, exercises).

$ARGUMENTS

## Steps

1. Call `search_auto_knowledge` with the user's query.
2. Render top 5-10 hits with:
   - Source (PDF page / help doc / exercise / module)
   - Snippet
   - Link to the full content (`get_auto_module_docs` / `get_auto_help_doc`)
3. If results are thin → broaden the search and suggest `/auto:docs` to browse by category.
