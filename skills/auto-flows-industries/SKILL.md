---
name: auto-flows-industries
description: Guides Flows for Industries in Automotive Cloud — Omnistudio (FlexCards, OmniScripts, DataRaptors, Integration Procedures), Data Processing Engine, Business Rules Engine, Decision Tables, Intelligent Form Reader, Document Generation, Intelligent Document Automation. Use when automating complex flows, lending intake, or document-driven processes.
---

# Flows for Industries — Automotive Cloud

The Industries automation stack used heavily in Vehicle and Asset Lending intake, Test Drive scheduling, Connected Services orchestration, and Service Process Studio.

## Components

| Component | Use case |
|---|---|
| **OmniScripts** | Multi-step guided processes (lending intake, vehicle service request, test drive scheduling) |
| **FlexCards** | Compact information displays (vehicle summary, financial account snapshot) |
| **DataRaptors** | Data extraction / transformation between Salesforce and Omnistudio |
| **Integration Procedures** | Server-side orchestration (call MuleSoft, telematics, credit bureaus) |
| **Data Processing Engine (DPE)** | Bulk computations / rollups (Vehicle Searchable Field values) |
| **Business Rules Engine (BRE)** | Decision matrices + expression sets (eligibility rules, pricing) |
| **Decision Tables** | Tabular decisioning (warranty coverage, claim approval) |
| **Intelligent Form Reader** | Extract structured data from forms (driver's licence, registration) |
| **Document Generation** | Create PDFs / Word docs (loan proposals, sale agreements) |
| **Intelligent Document Automation (IDA)** | End-to-end document processing |

## Setup

1. PSLs: `Omnistudio`, `Omnistudio User`, `Omnistudio Admin`, `Business Rules Engine Designer`, `Business Rules Engine Runtime`, `Data Pipelines Base User`, `Service Process Studio`, `Context Service Admin`, `Context Service Runtime`, `Salesforce Pricing Design Time User`.
2. Setup → Omnistudio Settings → **Enable Standard Omnistudio Runtime**.
3. Setup → Data Pipelines → Get Started → Enable.
4. Configure BRE Decision Matrices, Expression Sets, Decision Tables as needed.
5. Configure Service Process definitions in Service Process Studio.

## Where each component is used

- **Vehicle and Asset Lending intake** → OmniScripts + DataRaptors + Integration Procedures (Experian/Equifax) + Document Generation.
- **Test Drive scheduling** → Automotive Scheduler guided flow (OmniScript-based).
- **Vehicle Connected Services** → Service Process Studio + Context Service + Omnistudio.
- **Vehicle Inventory Search** → Data Processing Engine (`Update Vehicle Searchable Field Values` template).
- **Warranty claim adjudication** → Business Rules Engine + Decision Tables.

## Common pitfalls

- Standard Omnistudio Runtime not enabled → guided flows fail to render.
- BRE Designer PSL but no Runtime PSL → can author but not execute.
- Decision Matrix vs. Decision Table confusion — BRE uses both for different purposes.
- Service Process definitions missing Context Service mapping → flow fails at runtime.

## Tools

- `retrieve_metadata` for OmniScript / FlexCard / DataRaptor / IP definitions
- `run_apex` to test BRE / Service Process orchestration
