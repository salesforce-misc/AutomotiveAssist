#!/usr/bin/env node
/**
 * MCP server for Salesforce Automotive Cloud (`auto`).
 *
 * This is a *stub* implementation. Tool *names* are stable and match what
 * skills + commands expect. Tool *implementations* return placeholder
 * responses for now — to be filled in against the Automotive Cloud object
 * model and admin settings.
 *
 * Tool catalog scoped to Automotive:
 *   - Knowledge tools:           list_auto_modules, get_auto_module_docs, search_auto_knowledge,
 *                                explain_auto_concept, get_auto_help_doc, list_auto_help_docs,
 *                                get_auto_guide, get_auto_troubleshooting, get_auto_exercise
 *   - Salesforce org tools:      check_auto_setup, install_sf_cli, list_sf_orgs, set_target_org,
 *                                open_org, run_soql, describe_sobject, get_record, create_record,
 *                                update_record, delete_record, run_apex, bulk_create_records,
 *                                bulk_update_records, deploy_metadata, retrieve_metadata
 *   - Trigger handler tools:     list_trigger_handlers, toggle_trigger_handler
 *   - Admin Console tools:       list_admin_settings, update_admin_setting, create_admin_setting
 *   - Action tools:              list_auto_actions, create_quick_action, create_custom_action,
 *                                update_auto_action, delete_auto_action
 *   - Mobile tools:              check_mobile_metadata_cache_status, generate_mobile_metadata_cache,
 *                                list_db_schema, get_db_schema, create_db_schema, update_db_schema,
 *                                toggle_db_schema
 *   - Health / audit tools:      health_check, audit_auto_config, list_validation_groups,
 *                                diagnose_auto_issue, get_org_status, export_config, import_config,
 *                                get_release_notes, diff_orgs
 *   - User mgmt tools:           list_users, list_permission_sets, assign_permission_set,
 *                                unassign_permission_set, check_user_config
 *   - Per-feature config check:  check_visit_config, check_sample_config (n/a here),
 *                                check_account_config, check_activity_plan_config (n/a),
 *                                check_territory_config (Auto uses different territory)
 *   - SDET tools:                scaffold_test_data
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  type Tool,
} from "@modelcontextprotocol/sdk/types.js";

const SERVER_NAME = "auto";
const SERVER_VERSION = "0.1.0";

const tools: Tool[] = [
  // ───────── Knowledge tools ─────────
  {
    name: "list_auto_modules",
    description: "List all Automotive Cloud modules that have processed documentation in the knowledge base.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_auto_module_docs",
    description: "Get detailed documentation for a specific Automotive Cloud module.",
    inputSchema: {
      type: "object",
      properties: { module: { type: "string", description: "Module slug (e.g., 'captive-finance')" } },
      required: ["module"],
    },
  },
  {
    name: "search_auto_knowledge",
    description: "Search across all Automotive Cloud documentation for a topic or term.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string" }, limit: { type: "number", default: 10 } },
      required: ["query"],
    },
  },
  {
    name: "explain_auto_concept",
    description: "Get an explanation of a specific Automotive Cloud concept (e.g., 'ARC', 'Compliant Data Sharing', 'Vehicle Definition vs Vehicle vs Asset').",
    inputSchema: {
      type: "object",
      properties: { concept: { type: "string" } },
      required: ["concept"],
    },
  },
  {
    name: "list_auto_help_docs",
    description: "List all available Automotive Cloud documentation grouped by category (modules, help, guides, exercises, troubleshooting).",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_auto_help_doc",
    description: "Get an official Salesforce help article for a topic.",
    inputSchema: {
      type: "object",
      properties: { topic: { type: "string" } },
      required: ["topic"],
    },
  },
  {
    name: "get_auto_guide",
    description: "Get a longer guide (developer guide, mobile setup, lending guide).",
    inputSchema: {
      type: "object",
      properties: { guide: { type: "string" } },
      required: ["guide"],
    },
  },
  {
    name: "get_auto_troubleshooting",
    description: "Get troubleshooting documentation for a specific issue.",
    inputSchema: {
      type: "object",
      properties: { issue: { type: "string" } },
      required: ["issue"],
    },
  },
  {
    name: "get_auto_exercise",
    description: "Get a hands-on exercise document by name.",
    inputSchema: {
      type: "object",
      properties: { exercise: { type: "string" } },
      required: ["exercise"],
    },
  },
  // ───────── Salesforce org tools ─────────
  {
    name: "check_auto_setup",
    description: "Check Automotive Cloud plugin setup — SF CLI installed, authenticated orgs, current target.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "install_sf_cli",
    description: "Install Salesforce CLI via npm (with user consent).",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "list_sf_orgs",
    description: "List all authenticated Salesforce orgs.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "set_target_org",
    description: "Set which org to use for subsequent operations.",
    inputSchema: {
      type: "object",
      properties: { alias: { type: "string" } },
      required: ["alias"],
    },
  },
  {
    name: "open_org",
    description: "Open the connected org in the browser, optionally to a specific path.",
    inputSchema: {
      type: "object",
      properties: { path: { type: "string", description: "Optional path, e.g. '/lightning/o/Automotive'" } },
    },
  },
  {
    name: "run_soql",
    description: "Execute a SOQL query against the connected Automotive Cloud org. NEVER use for Tooling-API entities (page layouts, quick actions, admin settings, record types) — use the dedicated tools instead.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string" } },
      required: ["query"],
    },
  },
  {
    name: "describe_sobject",
    description: "Get metadata (fields, types, record types, child relationships) for any Salesforce object.",
    inputSchema: {
      type: "object",
      properties: { object: { type: "string" } },
      required: ["object"],
    },
  },
  {
    name: "get_record",
    description: "Retrieve a specific record by Id.",
    inputSchema: {
      type: "object",
      properties: { object: { type: "string" }, id: { type: "string" }, fields: { type: "array", items: { type: "string" } } },
      required: ["object", "id"],
    },
  },
  {
    name: "create_record",
    description: "Create a new record.",
    inputSchema: {
      type: "object",
      properties: { object: { type: "string" }, fields: { type: "object" } },
      required: ["object", "fields"],
    },
  },
  {
    name: "update_record",
    description: "Update an existing record.",
    inputSchema: {
      type: "object",
      properties: { object: { type: "string" }, id: { type: "string" }, fields: { type: "object" } },
      required: ["object", "id", "fields"],
    },
  },
  {
    name: "delete_record",
    description: "Delete a record.",
    inputSchema: {
      type: "object",
      properties: { object: { type: "string" }, id: { type: "string" } },
      required: ["object", "id"],
    },
  },
  {
    name: "run_apex",
    description: "Execute anonymous Apex code against the target org.",
    inputSchema: {
      type: "object",
      properties: { code: { type: "string" } },
      required: ["code"],
    },
  },
  {
    name: "bulk_create_records",
    description: "Create multiple records from a JSON array (seed data loading).",
    inputSchema: {
      type: "object",
      properties: { object: { type: "string" }, records: { type: "array", items: { type: "object" } } },
      required: ["object", "records"],
    },
  },
  {
    name: "bulk_update_records",
    description: "Update multiple records from a JSON array (bulk data fixes).",
    inputSchema: {
      type: "object",
      properties: { object: { type: "string" }, records: { type: "array", items: { type: "object" } } },
      required: ["object", "records"],
    },
  },
  {
    name: "deploy_metadata",
    description: "Deploy metadata from a local source directory to the target org.",
    inputSchema: {
      type: "object",
      properties: { sourceDir: { type: "string" }, testLevel: { type: "string" } },
      required: ["sourceDir"],
    },
  },
  {
    name: "retrieve_metadata",
    description: "Retrieve metadata from the target org to a local directory.",
    inputSchema: {
      type: "object",
      properties: { manifest: { type: "string" }, targetDir: { type: "string" } },
    },
  },
  // ───────── Trigger handler / admin setting tools ─────────
  {
    name: "list_trigger_handlers",
    description: "List trigger handlers and their active/inactive status.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "toggle_trigger_handler",
    description: "Enable or disable a trigger handler by DeveloperName.",
    inputSchema: {
      type: "object",
      properties: { developerName: { type: "string" }, active: { type: "boolean" } },
      required: ["developerName", "active"],
    },
  },
  {
    name: "list_admin_settings",
    description: "List Admin Console settings by category with field values. Uses Tooling API — never use run_soql for these.",
    inputSchema: {
      type: "object",
      properties: { category: { type: "string" } },
    },
  },
  {
    name: "update_admin_setting",
    description: "Update an existing Admin Console setting or field value.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string" }, fields: { type: "object" } },
      required: ["id", "fields"],
    },
  },
  {
    name: "create_admin_setting",
    description: "Create a new Admin Console setting with field values.",
    inputSchema: {
      type: "object",
      properties: { category: { type: "string" }, name: { type: "string" }, fields: { type: "object" } },
      required: ["category", "name", "fields"],
    },
  },
  // ───────── Action tools ─────────
  {
    name: "list_auto_actions",
    description: "List Quick Actions and Custom Actions configured in the org.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "create_quick_action",
    description: "Create a Quick Action.",
    inputSchema: {
      type: "object",
      properties: { type: { type: "string" }, label: { type: "string" }, fields: { type: "object" } },
      required: ["type", "label"],
    },
  },
  {
    name: "create_custom_action",
    description: "Create a Custom Action (URL, App, Utterance).",
    inputSchema: {
      type: "object",
      properties: { type: { type: "string" }, label: { type: "string" }, fields: { type: "object" } },
      required: ["type", "label"],
    },
  },
  {
    name: "update_auto_action",
    description: "Update a Quick or Custom Action.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string" }, fields: { type: "object" } },
      required: ["id", "fields"],
    },
  },
  {
    name: "delete_auto_action",
    description: "Delete a Quick or Custom Action.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string" } },
      required: ["id"],
    },
  },
  // ───────── Mobile / Partner Visits tools ─────────
  {
    name: "check_mobile_metadata_cache_status",
    description: "Check mobile metadata cache status (Partner Visits app).",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "generate_mobile_metadata_cache",
    description: "Generate mobile metadata cache for specified profiles.",
    inputSchema: {
      type: "object",
      properties: { profiles: { type: "array", items: { type: "string" } } },
    },
  },
  {
    name: "list_db_schema",
    description: "List DB Schema records (mobile object sync configuration).",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_db_schema",
    description: "Get full details of a DB Schema record.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string" } },
      required: ["id"],
    },
  },
  {
    name: "create_db_schema",
    description: "Create a new DB Schema record.",
    inputSchema: {
      type: "object",
      properties: { object: { type: "string" }, type: { type: "string" }, fields: { type: "object" } },
      required: ["object", "type"],
    },
  },
  {
    name: "update_db_schema",
    description: "Update a DB Schema record's fields.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string" }, fields: { type: "object" } },
      required: ["id", "fields"],
    },
  },
  {
    name: "toggle_db_schema",
    description: "Enable or disable a DB Schema record.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string" }, active: { type: "boolean" } },
      required: ["id", "active"],
    },
  },
  // ───────── Health / audit / status tools ─────────
  {
    name: "health_check",
    description: "Run a comprehensive Automotive Cloud org health check.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "audit_auto_config",
    description: "Run validation rules against the connected org.",
    inputSchema: {
      type: "object",
      properties: { group: { type: "string", description: "Validation group: pre-deployment | mobile-login-check | connected-services-check | lending-check | inventory-check" } },
    },
  },
  {
    name: "list_validation_groups",
    description: "List available validation rule groups.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "diagnose_auto_issue",
    description: "Find validation rules / known issues matching a specific error message or symptom.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string" } },
      required: ["query"],
    },
  },
  {
    name: "get_org_status",
    description: "Get a single dashboard view of the connected Automotive Cloud org.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "export_config",
    description: "Export Automotive Cloud configuration as JSON.",
    inputSchema: {
      type: "object",
      properties: { outPath: { type: "string" } },
    },
  },
  {
    name: "import_config",
    description: "Import Automotive Cloud configuration from a JSON export (preview by default).",
    inputSchema: {
      type: "object",
      properties: { path: { type: "string" }, apply: { type: "boolean", default: false } },
      required: ["path"],
    },
  },
  {
    name: "get_release_notes",
    description: "Get Automotive Cloud release notes for a specific Salesforce release.",
    inputSchema: {
      type: "object",
      properties: { release: { type: "string" } },
      required: ["release"],
    },
  },
  {
    name: "diff_orgs",
    description: "Compare configuration between two Automotive Cloud orgs.",
    inputSchema: {
      type: "object",
      properties: { source: { type: "string" }, target: { type: "string" } },
      required: ["source", "target"],
    },
  },
  // ───────── User mgmt tools ─────────
  {
    name: "list_users",
    description: "List active users with filters (by profile, permission set, territory).",
    inputSchema: {
      type: "object",
      properties: { profile: { type: "string" }, permissionSet: { type: "string" }, territory: { type: "string" } },
    },
  },
  {
    name: "list_permission_sets",
    description: "List Automotive permission sets and PSLs with assignment counts and capacity.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "assign_permission_set",
    description: "Assign a permission set to one or more users by label/API name.",
    inputSchema: {
      type: "object",
      properties: { permSet: { type: "string" }, userIds: { type: "array", items: { type: "string" } } },
      required: ["permSet", "userIds"],
    },
  },
  {
    name: "unassign_permission_set",
    description: "Remove a permission set assignment from one or more users.",
    inputSchema: {
      type: "object",
      properties: { permSet: { type: "string" }, userIds: { type: "array", items: { type: "string" } } },
      required: ["permSet", "userIds"],
    },
  },
  {
    name: "check_user_config",
    description: "Check user-management configuration (PSL capacity, profile setup, territory associations).",
    inputSchema: { type: "object", properties: {} },
  },
  // ───────── Feature config check tools ─────────
  {
    name: "check_account_config",
    description: "Check Account Management configuration (Person Account, RTs, ACR/AAR, Asset Participants).",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "check_visit_config",
    description: "Check Partner Visit Management configuration.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "check_finance_config",
    description: "Check Captive Finance + Vehicle and Asset Lending configuration.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "check_warranty_config",
    description: "Check Warranty Lifecycle / Claims / Supplier Recovery configuration.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "check_inventory_config",
    description: "Check vehicle inventory + Criteria-Based Search configuration.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "check_connected_services_config",
    description: "Check Vehicle Connected Services + Actionable Event Orchestration configuration.",
    inputSchema: { type: "object", properties: {} },
  },
  // ───────── SDET-focused tools ─────────
  {
    name: "scaffold_test_data",
    description: "SDET — load a sample Automotive Cloud test fixture (Person Account + Vehicle + Asset + Financial Account + Claim graph).",
    inputSchema: {
      type: "object",
      properties: {
        profile: {
          type: "string",
          enum: ["default", "lead-only", "finance-only", "warranty-only"],
          default: "default",
          description: "Which fixture profile to load",
        },
        teardownId: { type: "string", description: "Optional fixture id to tear down (removes previously loaded records)" },
      },
    },
  },
];

function notImplemented(toolName: string): {
  content: { type: "text"; text: string }[];
  isError: boolean;
} {
  return {
    content: [
      {
        type: "text",
        text:
          `[auto MCP server stub] Tool "${toolName}" is registered but not yet implemented.\n\n` +
          `This is a v0.1.0 scaffold. The implementation should target the Automotive Cloud\n` +
          `object model and admin settings.\n` +
          `See JOURNEY_MAP.md and skills/auto-data-model/SKILL.md for the canonical Automotive object list.`,
      },
    ],
    isError: false,
  };
}

async function main() {
  const server = new Server(
    { name: SERVER_NAME, version: SERVER_VERSION },
    { capabilities: { tools: {} } }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const toolName = request.params.name;
    const known = tools.find((t) => t.name === toolName);
    if (!known) {
      return {
        content: [{ type: "text", text: `Unknown tool: ${toolName}` }],
        isError: true,
      };
    }
    return notImplemented(toolName);
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`[auto] MCP server v${SERVER_VERSION} ready on stdio`);
}

main().catch((err) => {
  console.error("[auto] Fatal error:", err);
  process.exit(1);
});
