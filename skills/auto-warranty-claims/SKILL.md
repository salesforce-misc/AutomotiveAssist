---
name: auto-warranty-claims
description: Guides Automotive Cloud warranty + claims — Warranty Lifecycle Management (Warranty Term, Product Warranty Term, Asset Warranty, Warranty Term Coverage, Code Set, Codeset Relationship, Product Fault Code, Product Labor Code), Claims Management Foundation (Claim, Claim Item, Claim Coverage, Claim Coverage Payment Detail, Claim Participant), Warranty Supplier Recovery (Supplier, Supplier Product, Contract, Sales Contract Line). Use when configuring warranties, claim adjudication, or supplier recovery.
---

# Automotive Cloud Warranty & Claims

Three layers, each enabled separately:

1. **Warranty Lifecycle Management** — terms, code sets, fault/labor codes, asset warranties.
2. **Claims Management Foundation** — claim adjudication.
3. **Warranty Supplier Recovery** — recover costs from suppliers.

## Warranty Lifecycle Management

1. PSL: `Warranty Lifecycle Management Psl`.
2. Setup → Warranty Lifecycle Management → Enable.
3. Configure:
   - **Code Set** — system codes (fault codes, labor codes).
   - **Codeset Relationship** — relate one code set to another (e.g., labor code ↔ fault code).
   - **Product Fault Code** — products ↔ fault codes.
   - **Product Labor Code** — products ↔ standard operation time.
   - **Warranty Term** — labor/parts/expense/exchange options for rectifying defects.
   - **Product Warranty Term** — terms for a Product / product family.
   - **Asset Warranty** — terms for a specific Asset (extensions/exclusions).
   - **Warranty Term Coverage** — coverage rules per Code Set / part.

Mark the **Warranty Lifecycle Management** app Visible on profiles that need it.

## Claims Management Foundation

1. PSL: `Claims Management Foundation`.
2. Configure:
   - **Claim** — top-level claim record
   - **Claim Item** — defective asset (usage, fault date, repair date)
   - **Claim Coverage** — casual part (fault code, coverage type)
   - **Claim Coverage Payment Detail** — labor / parts / expenses claimed
   - **Claim Participant** — stakeholders on the claim
3. Adjudication runs against existing Warranty Term Coverage rules.
4. (External dealers) PSL: `Warranty Management For Experience Cloud` — dealers submit claims via Experience Cloud.

## Warranty Supplier Recovery

1. Configure (uses Manufacturing Cloud objects):
   - **Supplier** — vehicle parts/components suppliers
   - **Supplier Product** — parts each supplier provides
   - **Contract** — supplier recovery contract
   - **Sales Contract Line** — covered parts (price, code, status)
2. (External suppliers) PSL: `Warranty Supplier Recovery for Experience Cloud`.
3. Suppliers adjudicate recovery claims via the Experience Cloud site (Automotive template).

## Object relationships

```
Product ─┬─ Product Warranty Term ─→ Warranty Term ─→ Warranty Term Coverage
         ├─ Product Fault Code ────→ Code Set
         └─ Product Labor Code ────→ Code Set
                                     ↑
Asset ───── Asset Warranty ──────────┘

Asset ─→ Claim ─→ Claim Item ─→ Claim Coverage ─→ Claim Coverage Payment Detail
              └→ Claim Participant
```

## OWD

- `Warranty Term` → Public Read/Write internal + external (so dealers can see terms they need).
- `Asset Warranty` → inherits from Asset.
- `Claim` (and family) → typically Private; use sharing rules / sharing sets for dealer visibility.

## Common pitfalls

- Enabling Claims Management Foundation before Warranty Lifecycle Management → adjudication has nothing to compare against.
- Skipping Codeset Relationship → labor codes can't be tied to the fault codes that triggered them.
- Asset Warranty missing extensions/exclusions → claims wrongly denied or approved.
- External warranty users without `Warranty Management For Experience Cloud` PSL → can't submit claims from portal.

## Tools

- `describe_sobject` for WarrantyTerm, AssetWarranty, Claim, ClaimItem, ClaimCoverage
- `run_soql` for claim throughput / adjudication reporting
- `run_apex` for bulk warranty term backfills

## Related skills

- `auto-rebates` — Transaction Journal + Rebate Claim work alongside warranty claims for dealer payouts

## Field reference — `Claim.ClaimType` values

Verified across demo orgs: `Warranty Claim`, `Supplier Recovery Claim`, `Pre Warranty Authorization`, `Insurance`. `Supplier Recovery Claim` is the bridge from the customer-side claim to the supplier-side recovery contract (see Warranty Supplier Recovery section). `Insurance` covers third-party insurance adjudication that some OEMs run alongside warranty.

Common `Claim.Status` flow: `Draft` → `Open` → `Submitted` → `Under Investigation` → `Approved` / `Denied`. `ClaimReasonType` typically takes `Mechanical Failure`, `Electrical Failure`, plus org-specific reasons. `FnolChannel` (First Notice of Loss channel) commonly: `Mobile`, `Web`, `Phone`, `Dealer`.

## Coverage-link verification

In a fully wired warranty configuration, `ProductWarrantyTerm` and `WarrantyTermCoverage` should be populated — they're what tie warranty terms to specific products and coverage rules. Empty rows there mean adjudication will run on Asset-Warranty alone without product-level rules. Quick check:

```sql
SELECT COUNT(Id) FROM WarrantyTerm
SELECT COUNT(Id) FROM ProductWarrantyTerm
SELECT COUNT(Id) FROM WarrantyTermCoverage
SELECT COUNT(Id) FROM AssetWarranty
```

If the first is non-zero but the next two are zero, the org has terms defined but no product-level wiring yet.
