---
description: View Automotive Cloud release notes by Salesforce release
---

# Release Notes

Render Automotive Cloud release notes by Salesforce release.

$ARGUMENTS

## Steps

1. If a release name was provided in arguments → call `get_release_notes <release>`.
2. Otherwise call `list_auto_help_docs` and offer only the files under `release-notes` (today that's just Spring '26, `spring-262.md`). If the user asks for a release that isn't there, say so. Don't present search hits from another release as that release's notes.
3. Render the release notes with section headings, deprecated features, new objects/PSLs, and enable steps for new toggles.
