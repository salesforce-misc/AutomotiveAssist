---
description: Wizard — configure Person Account, Account Record Types, ACR, AAR, household, asset participants
---

# Configure Stakeholders

Interactive wizard for the Stakeholder Management journey (see `auto-stakeholder-management` skill).

## Steps

1. Verify Person Account is enabled. If not → confirm OWD prerequisite, then guide the user through the support-ticket flow (irreversible — do not enable in production without dry-run).
2. Confirm Account record types exist (Business, Person, plus dealer/household RTs as needed).
3. Verify Group Membership Settings is enabled.
4. Verify Account Contact Relationship usage; check ACR record types if customers belong to multiple households.
5. Walk through Account Account Relationship setup (e.g., household ↔ preferred dealership).
6. Walk through Asset Account / Contact Participant config.
7. Run `check_account_config` and report any gaps.
