---
name: auto-leads-opportunities
description: Guides Automotive Cloud Partner / Enterprise Lead Management — Lead, Lead Line Item (Lead-with-Products), Lead Preferred Seller, Lead Disposition, Opportunity, Opportunity Product, Opportunity Preferred Seller. Covers OEM↔dealer sharing models (Lead-Lead, Lead-TestDrive-Opportunity, Lead-Opportunity-Opportunity), routing rules, dealer-assignment criteria, ADF 1.0/2.0 ingest, and the Schedule Test Drive button on Lead/Opportunity layouts. Use when configuring the sales lifecycle for OEMs and dealers.
---

# Automotive Cloud Leads & Opportunities

Enhanced Partner Lead Management — branded **Enterprise Lead Management** at the OEM↔dealer scale — captures **product-level** interest, **preferred dealers**, and the **interest window** on each lead, then preserves all of it through opportunity conversion.

## Why a Lead (not an Opportunity) for first contact

Auto sales reps + channel partners collect leads **at speed** in showrooms, road shows, and OEM web configurators. Lead is preferred over Opportunity for first contact because:

1. Lead is light-weight — fast data ingestion at point of capture.
2. Lead does **not** require Account or Contact to exist first. New auto consumers usually aren't in CRM yet, and forcing reps to create Account + Contact at point of capture is overhead.
3. Lead does **not** require a PriceBook. Reps and channel partners care about *what the prospect is interested in*, not pricing — pricing comes after qualification.
4. Leads can be replicated and shared with multiple dealers (with line items / configuration intact) before any Account / Contact / Opportunity exists.

This is the practice at VW, Daimler, Ford, and Stellantis. Honda is the exception (see Lead → Opportunity → Opportunity below).

## Lead types supported (Acceptance criteria)

A Lead must be capturable for any of these:

- Single car or multiple cars (B2B / fleet).
- New or used car (OEM-shared leads are typically new-car only).
- Lead **attributes / preferences** (e.g., "Sedan = Must Have", "Leather seats = Desired").
- A specific car model or an existing used vehicle.
- Adding accessories along with the car.
- Accessories / extended warranty / inspection only (no vehicle).
- Captive financing (lease / loan / subscription) for a single car or multiple cars.
- Insurance, extended warranty, or service add-ons.
- Trade-in of an existing car.
- Source of the lead (web, road show, configurator, third-party).
- Preferred dealer(s) chosen by the customer.

## Object roles

- `Lead` (standard, ships in 240) — prospective customer. Carries `LeadSource`, `Status`, `EarliestInterestDate`, `LatestInterestDate`, plus customer extension fields (e.g., on autodemoNag: `LeadScore__c`, `Business_Brand__c → BusinessBrand`, `VehicleOfInterest__c`, `Channel__c`, `Timeline_of_purchase__c`, `Has_Budgets__c`).
- `LeadLineItem` (standard, ships in 240) — products related to the lead. Standard fields: `LeadId`, `ProductId`, `AssetIdentificationNumber`, `InterestType`, `Quantity`, `UnitPrice`, `PriceType`, `Classification`, `Condition`, `ItemType`, `ApprovalStatus`. Use `AssetIdentificationNumber` to relate a line item to a specific Vehicle / Asset (used-car or trade-in interest).
- `LeadPreferredSeller` (standard, ships in 240) — preferred dealer(s) for the lead. Fields: `LeadId`, `AccountId`, `ContactId`, `AccountRole`. Multiple per Lead.
- `Opportunity` (standard) — converted lead. One Lead can become **many** opportunities (one per dealer share).
- `OpportunityLineItem` / `OpportunityProduct` — Lead Line Items map here on conversion (when Default Mappings are enabled).
- `OpportunityPreferredSeller` — Lead Preferred Seller maps here on conversion.

> **Industry-pattern names (NOT shipping standard objects in 240 EE):** `LeadDisposition`, `LeadDispositionActivity`, `LeadDevice`, `LeadDeviceSpecification`, `TestDrive`. These come from BMW / industry star-data-model references in the Enterprise Lead Mgmt design doc. They do **not** ship as standard objects in Auto Cloud 240 (verified absent from autodemoNag). When a customer needs them, model the concepts via:
> - **Disposition** → Lead `Status` picklist + Activities / Tasks against the Lead.
> - **Device / Device Specification** → `LeadLineItem.ProductId` + `LeadLineItem.AssetIdentificationNumber` for spec-specific interest.
> - **Test Drive** → `ServiceAppointment` (via Salesforce Scheduler) plus the Schedule Test Drive button on Lead/Opportunity.

### Standard vs custom LeadLineItem

Some orgs (e.g., autodemoNag) ship **both** standard `LeadLineItem` (22 fields) **and** a custom `LeadLineItem__c` (20 fields with mirrored `Asset_Identification_Number__c`, `Classification__c`, etc., plus a `Warranty__c → AssetWarranty` lookup the standard object lacks). When advising:

- Default to standard `LeadLineItem` for new implementations — it's what Partner Lead Management Default Mappings target.
- If the org already invested in `LeadLineItem__c`, work with the custom variant (do not migrate without a strong reason — the Warranty lookup may be load-bearing).
- Audit which one feeds Opportunity conversion before changing layouts.

> **Volumes the design assumes** (per Enterprise Lead Management HLE): ~40M leads/year (20M car + 20M misc), Lead→Sales ratio 8:1 (~2.5M cars × 8 ≈ 20M car-leads), avg ~3 lead details per lead → ~120M Lead Line Item rows/year. Plan reporting indexes accordingly.

## OEM↔dealer sharing patterns (Requirement: share leads with dealers)

The customer must be able to share a single lead with **one or more** dealers and track each dealer's progress independently. Three industry patterns are supported:

### Pattern 1: Lead → Lead (Daimler, Ford, Stellantis)

```
OEM Lead ──replicated──▶ Dealer Lead (in partner community)
```

- OEM replicates the lead, sets each replica's owner to a different dealer.
- Each dealer-lead is independently tracked; status updates per dealer.
- Maintain back-reference (`SourceLead` / `ParentLead` field) so the OEM can roll up status across all replicas and notify other dealers when one dealer closes.
- Implementation: Partner Community + standard Lead sharing; OEM sees dealer marketing/activity on the Lead, dealer sees OEM marketing.
- Pattern fits OEMs whose dealers are partner-community users on the OEM org.

### Pattern 2: Lead → Test Drive / Dealer Visit → Opportunity (VW)

```
Lead ──qualification (test drive / dealer visit)──▶ Opportunity
```

- Lead is replicated and shared with dealers.
- Dealers qualify — typically by booking a test drive or registering a dealer visit.
- After qualification the lead converts to Opportunity (standard conversion flow).
- Use this when qualification gating is critical and OEM doesn't want speculative opportunities cluttering pipeline.

### Pattern 3: Lead → Opportunity → Opportunity (Honda)

```
Lead (lead-product-dealer) ──OEM matches + scores──▶ Opportunity 1 (dealer 1)
                                                  ──▶ Opportunity 2 (dealer 2)
                                                  ──▶ Opportunity 3 (dealer 3)
```

- OEM performs prospect matching (resolve Account / Contact via CDP / TCRM), scores the lead, then **converts** the lead and replicates the resulting Opportunity to multiple dealers.
- Each Opportunity has its own dealer, status, and follow-ups.
- OEM tracks the parent Opportunity to see aggregate progress across all dealers.
- Reference page: `LeadDetail` parent + child Leads (DeepClone with dedup) **OR** parent Opportunity with line-item details (Honda passport-style "Lead Insights" page with score, profile completion, source, inquiry date, dealership assignments, lead enrichment, recommendations, messaging history).

> When in doubt, ask which OEM pattern the customer follows. The three patterns are mutually exclusive at the data-model level — switching mid-implementation is expensive.

### Dealer-assignment criteria (no OOTB rules — implementation work)

The platform exposes **Lead Assignment Rules** but the auto-specific dealer logic is customer-implemented. Common criteria:

1. Customer-chosen — lead carries the dealer(s) selected by the consumer.
2. Highest lead-conversion dealers in the region.
3. Dealer with an existing relationship to the customer.
4. Dealer with existing inventory (or test-drive vehicle) of the model the customer is interested in.
5. Distance from the customer's zipcode (round-robin within radius).

Bulk vs individual assignment: support both — leads may be ingested in real-time (with dealer-matching evaluated per lead) or in bulk batches.

### Dealer CRM topology (assignment depends on it)

| Topology | What it means |
|---|---|
| Dealer + OEM same org | Dealer logs in as a Community / Partner user on the OEM org. |
| Multi-instance | OEM and dealer run separate Salesforce orgs; integration shares leads. |
| Dealer-org-as-CRM | OEM owns the dealer outlets and dealer logs into the OEM-provisioned CRM. |
| Dealer group with own lead engine | Dealer group already manages its own leads; OEM-shared leads, third-party leads, and dealer-generated leads all flow into the dealer-group org. |
| Third-party CRM | Dealer uses non-Salesforce CRM; integration is custom. |

## Lead enrichment / scoring (CDP / TCRM)

- CDP can match a lead with an existing customer (and an existing vehicle in the used-car case) and score conversion likelihood ("60% score → 6% chance of conversion").
- Use CDP / TCRM for high-value lead identification so dealers focus their effort.
- Score, profile-completion %, source tier, churn risk, predicted churn, browsing-pattern affinities (price range, top features, top browsing source, repeat-customer flag, age band, telematics-geek flag, trade-in interest) all surface on the Lead Detail page (Riley Schultz mock).

## Setup steps

1. PSLs: `Partner Lead Management` (internal), `Partner Lead Management for Experience Cloud` (external).
2. From Setup → Partner Lead Management → **Enable Partner Lead Management**.
3. **Enable Partner Lead Management Default Mappings** — this is what preserves Lead Line Item / Preferred Seller through conversion. Don't skip this.
4. Customize Lead page layout:
   - Add fields: **Earliest Interest Date**, **Latest Interest Date**.
   - Add related lists: **Products** (Lead Line Items), **Preferred Sellers** (Lead Preferred Sellers), **Service Appointments**.
   - Add **Schedule Test Drive** button to Standard Buttons.
   - **Remove the Schedule Appointment quick action** — it's added automatically when Salesforce Scheduler is enabled but launches the default flow instead of the predefined Test Drive flow.
   - Add **Related Lists** component (right sidebar) and **Interest Tags** component to the Lightning record page.
5. Customize Opportunity page layout:
   - Add **Products** (Opportunity Products), **Preferred Sellers** (Opportunity Preferred Sellers), **Service Appointments** related lists.
   - Add **Schedule Test Drive** button; remove default Schedule Appointment.
   - Add **Related Lists** + **Interest Tags** components.
6. Save and Activate the Lightning page.
7. (When implementing dealer-share Patterns 1–3) Configure Lead Assignment Rules + custom matching logic + back-tracking field (Source Lead / Parent Lead) on Lead and Opportunity.

## Dealer follow-up (Requirement 5+6)

- Dealer admins assign leads/opportunities (manual or via rules) to a queue or sales associate. **Round-robin** across associates is a common ask but is not OOTB — implement via assignment rules or Flow.
- Sales managers see leads assigned to the team; associates see leads assigned to them.
- Multiple interactions can be logged against the lead/opportunity (test drive, store visit, service appointment).
- Marketing journeys can be initiated on leads via Marketing Cloud / Journey Builder.
- Activities such as sending a quote (CPQ) and document generation (DocGen) are **not OOTB** on the lead — customer to implement.

## Lead status visibility

OEM/dealer group must see **lead status across all shared leads**:

1. View status of every assigned lead.
2. Create alerts on stale leads (e.g., shared 24 hours back, still "New").
3. View lead status with each dealer the lead is shared with.

## Ingest formats

- Star data model for leads (industry standard).
- ADF 1.0 (`adfxml.info`).
- ADF 2.0 (Modal Auto Lead Data Format — `support.modalup.com`).

When ingesting from a third-party (e.g., dealer website like `automobiles.honda.com` build-and-price → "saved configuration" → Lead), map ADF → Lead + Lead Line Item + Lead Preferred Seller. Carry source, configured options, accessories, and dealer (if customer chose one).

## Lead Management home dashboard

The Auto Cloud Lead Management home (Figma Sheet27) surfaces, per dealer rep:

- Bonus earned vs target ("Great Going Julia! 72% on track, $1250 earned").
- Einstein recommends — segments to action (75 leads at risk; 14 hot; spike 31% in luxury).
- Next event (test drive at 10:00 AM).
- Upcoming events (test drive / meeting / send quote).
- Alerts (reschedule requests, dont-miss follow-ups, contacts about to drop out).
- Today's task status (tests drives, insurance renewal, follow-ups).
- Leads status & actions: high-churn-risk count, avg score, % yet to contact, distribution by status, top sales opportunities.
- Lead Queue list view sorted by Lead Score.

## OWD

- `Lead` → Public Read/Write/Transfer internal, Public Read Only external.
- `Opportunity` → Public Read/Write internal + external.

## Common pitfalls

- Forgetting to remove the default Schedule Appointment quick action → users hit the wrong scheduler flow.
- Disabling Default Mappings → Lead Line Items don't map to Opportunity Products on conversion (granular interest data lost).
- Not assigning `Partner Lead Management for Experience Cloud` PSL to dealer users → external partners can't manage leads.
- Confusing the three OEM↔dealer patterns — pick one upfront. DeepClone-on-LeadDetail (Option 1) and parent-Opportunity-with-Products (Option 2) imply different dedup logic and back-tracking fields.
- Not enabling DeepClone on Lead Detail when running Pattern 1 → child leads lose product line items.
- Ignoring CDP/TCRM enrichment hook before sharing → dealers waste effort on low-quality leads.
- Treating "round-robin within dealer associates" as OOTB — it's customer-implemented.

## Tools

- `run_soql` for lead funnel reporting and OEM↔dealer share-status rollups
- `describe_sobject` for `Lead`, `LeadLineItem` (standard), `LeadLineItem__c` (custom variant if present), `LeadPreferredSeller`, `Opportunity`, `OpportunityLineItem`, `OpportunityPreferredSeller`. Probe for `LeadDisposition` / `LeadDevice` / `TestDrive` only to confirm they're absent — they're industry-design names, not standard 240 objects.
- `retrieve_metadata` to verify page layout, quick action, and assignment-rule configuration

## Object roles

- `Lead` — prospective customer interested in buying / selling / trading vehicles or parts.
- `Lead Line Item` — products related to the lead. Multiple per Lead. Each ties to one Product. Use **Asset Identification Number** to relate a line item to a specific Vehicle/Asset.
- `Lead Preferred Seller` — preferred dealer(s) for the lead. Multiple per Lead, each tied to one Account.
- `Opportunity` — converted lead.
- `Opportunity Product` — products on opportunity. Lead Line Item maps here on conversion (when Default Mappings are enabled).
- `Opportunity Preferred Seller` — Lead Preferred Seller maps here on conversion.

## Setup steps

1. PSLs: `Partner Lead Management` (internal), `Partner Lead Management for Experience Cloud` (external).
2. From Setup → Partner Lead Management → **Enable Partner Lead Management**.
3. **Enable Partner Lead Management Default Mappings** — this is what preserves Lead Line Item / Preferred Seller through conversion. Don't skip this.
4. Customize Lead page layout:
   - Add fields: **Earliest Interest Date**, **Latest Interest Date**.
   - Add related lists: **Products** (Lead Line Items), **Preferred Sellers** (Lead Preferred Sellers), **Service Appointments**.
   - Add **Schedule Test Drive** button to Standard Buttons.
   - **Remove the Schedule Appointment quick action** — it's added automatically when Salesforce Scheduler is enabled but launches the default flow instead of the predefined Test Drive flow.
   - Add **Related Lists** component (right sidebar) and **Interest Tags** component to the Lightning record page.
5. Customize Opportunity page layout:
   - Add **Products** (Opportunity Products), **Preferred Sellers** (Opportunity Preferred Sellers), **Service Appointments** related lists.
   - Add **Schedule Test Drive** button; remove default Schedule Appointment.
   - Add **Related Lists** + **Interest Tags** components.
6. Save and Activate the Lightning page.

## OWD

- `Lead` → Public Read/Write/Transfer internal, Public Read Only external.
- `Opportunity` → Public Read/Write internal + external.

## Common pitfalls

- Forgetting to remove the default Schedule Appointment quick action → users hit the wrong scheduler flow.
- Disabling Default Mappings → Lead Line Items don't map to Opportunity Products on conversion (granular interest data lost).
- Not assigning `Partner Lead Management for Experience Cloud` PSL to dealer users → external partners can't manage leads.

## Tools

- `run_soql` for lead funnel reporting
- `describe_sobject` for Lead, LeadLineItem (or release-current API name)
- `retrieve_metadata` to verify page layout and quick action configuration
