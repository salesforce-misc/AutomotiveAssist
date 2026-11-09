#!/usr/bin/env node
/**
 * MCP server for Salesforce Automotive Cloud (`auto`).
 *
 * Tool *names* are stable and match what skills + commands expect. Only tools
 * with a handler are registered; org-config checks (health, status, export,
 * import, diff, test data) are slash commands built from these generic tools.
 *
 * Tool catalog:
 *   - Knowledge tools:      list_auto_modules, get_auto_module_docs, search_auto_knowledge,
 *                           explain_auto_concept, get_auto_help_doc, list_auto_help_docs,
 *                           get_auto_guide, get_auto_troubleshooting, get_auto_exercise,
 *                           get_release_notes
 *   - Salesforce org tools: check_auto_setup, install_sf_cli, list_sf_orgs, set_target_org,
 *                           open_org, run_soql, describe_sobject, get_record, create_record,
 *                           update_record, delete_record, run_apex, bulk_create_records,
 *                           bulk_update_records, deploy_metadata, retrieve_metadata
 *   - Audit tools:          audit_auto_config, list_validation_groups, diagnose_auto_issue
 *   - User mgmt tools:      list_users, list_permission_sets, assign_permission_set,
 *                           unassign_permission_set
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  type Tool,
} from "@modelcontextprotocol/sdk/types.js";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { AutoKnowledgeLoader } from "./knowledge-loader.js";
import {
  checkSetup,
  deployMetadata,
  describeSObject,
  getTargetOrg,
  installCli,
  listOrgs,
  openOrg,
  rest,
  retrieveMetadata,
  runApex,
  runSoql,
  setTargetOrg,
  sf,
  SfCliMissingError,
} from "./salesforce/index.js";
import { executeRules, loadRules } from "./validation/index.js";

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
    description: "Execute a SOQL query against the connected Automotive Cloud org. Not for metadata (Setup settings, page layouts, quick actions) — use retrieve_metadata for those.",
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
      properties: { sourceDir: { type: "string" }, testLevel: { type: "string" }, dryRun: { type: "boolean", description: "Validate only (sf --dry-run); nothing is saved to the org" } },
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
  // ───────── Audit tools ─────────
  {
    name: "audit_auto_config",
    description: "Run validation rules against the connected org.",
    inputSchema: {
      type: "object",
      properties: { group: { type: "string", description: "Validation group (see list_validation_groups); omit to run all" } },
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
    name: "get_release_notes",
    description: "Get Automotive Cloud release notes for a specific Salesforce release.",
    inputSchema: {
      type: "object",
      properties: { release: { type: "string" } },
      required: ["release"],
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
];

const knowledgeRoot = join(dirname(fileURLToPath(import.meta.url)), "..", "knowledge");
const knowledge = new AutoKnowledgeLoader(knowledgeRoot);
const rulesRoot = join(knowledgeRoot, "validation-rules");

type Args = Record<string, any>;
type Handler = (args: Args) => Promise<unknown>;

const KNOWLEDGE_TOOLS = new Set([
  "list_auto_modules", "get_auto_module_docs", "search_auto_knowledge", "explain_auto_concept", "list_auto_help_docs",
  "get_auto_help_doc", "get_auto_guide", "get_auto_troubleshooting", "get_auto_exercise", "get_release_notes",
  "list_validation_groups", "diagnose_auto_issue",
]);

// Values below are interpolated into REST paths and SOQL, so validate them at the boundary.
function apiName(v: unknown, label = "object"): string {
  if (typeof v !== "string" || !/^[A-Za-z]\w*$/.test(v)) throw new Error(`Invalid ${label} API name: ${JSON.stringify(v)}`);
  return v;
}
function recordId(v: unknown): string {
  if (typeof v !== "string" || !/^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$/.test(v)) throw new Error(`Invalid record Id: ${JSON.stringify(v)}`);
  return v;
}
const soqlString = (s: string) => `'${String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;

function chunks<T>(items: T[], size = 200): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

/** sObject Collections results; partial failures surface as a tool error with the full per-record detail. */
function batchResult(results: { id?: string; success: boolean; errors?: unknown[] }[]) {
  const failed = results.filter((r) => !r.success).length;
  if (failed) throw new Error(`${failed} of ${results.length} records failed (allOrNone=false, the rest were saved):\n${JSON.stringify(results, null, 2)}`);
  return { count: results.length, results };
}

async function collection(method: "POST" | "PATCH", type: string, records: Args[]) {
  if (!Array.isArray(records) || !records.length) throw new Error("records must be a non-empty array");
  const results = [];
  for (const batch of chunks(records)) {
    results.push(...(await rest(method, "composite/sobjects", { allOrNone: false, records: batch.map((r) => ({ attributes: { type }, ...r })) })));
  }
  return batchResult(results);
}

async function permissionSetId(permSet: string): Promise<string> {
  const ps = await runSoql(`SELECT Id, Name, Label FROM PermissionSet WHERE IsOwnedByProfile = false AND (Name = ${soqlString(permSet)} OR Label = ${soqlString(permSet)})`);
  if (ps.totalSize !== 1) throw new Error(ps.totalSize ? `"${permSet}" matches several permission sets: ${ps.records.map((r) => r.Name).join(", ")}` : `Permission set "${permSet}" not found`);
  return ps.records[0].Id;
}

const handlers: Record<string, Handler> = {
  // ───────── Knowledge ─────────
  list_auto_modules: () => knowledge.listModules(),
  get_auto_module_docs: ({ module }) => knowledge.getModuleDocs(module),
  search_auto_knowledge: ({ query, limit }) => knowledge.searchKnowledge(query, limit ?? 10),
  explain_auto_concept: ({ concept }) => knowledge.searchKnowledge(concept, 5),
  list_auto_help_docs: async () => {
    const grouped: Record<string, string[]> = {};
    for (const doc of await knowledge.listDocs()) (grouped[doc.split("/")[0]] ??= []).push(doc);
    return grouped;
  },
  get_auto_help_doc: ({ topic }) => knowledge.getDoc("help", topic),
  get_auto_guide: ({ guide }) => knowledge.getDoc("guides", guide),
  get_auto_troubleshooting: ({ issue }) => knowledge.getDoc("troubleshooting", issue),
  get_auto_exercise: ({ exercise }) => knowledge.getDoc("exercises", exercise),
  get_release_notes: ({ release }) => knowledge.getDoc("release-notes", release),

  // ───────── Org connection ─────────
  check_auto_setup: () => checkSetup(),
  install_sf_cli: async () => {
    try {
      return `Salesforce CLI already installed: ${(await sf(["--version"])).trim()}`;
    } catch (err) {
      if (!(err instanceof SfCliMissingError)) throw err;
    }
    return installCli();
  },
  list_sf_orgs: async () => ({ targetOrg: getTargetOrg(), orgs: await listOrgs() }),
  set_target_org: async ({ alias }) => ({ targetOrg: await setTargetOrg(alias), note: "Used for every org tool for the rest of this session." }),
  open_org: async ({ path }) => {
    await openOrg(path);
    return `Opened the org in the browser${path ? ` at ${path}` : ""}.`;
  },

  // ───────── Data ─────────
  run_soql: ({ query }) => runSoql(query),
  describe_sobject: async ({ object }) => {
    const d = await describeSObject(apiName(object));
    // Raw describe runs to hundreds of KB; keep what callers actually use.
    return {
      name: d.name,
      label: d.label,
      keyPrefix: d.keyPrefix,
      custom: d.custom,
      recordTypes: (d.recordTypeInfos ?? []).map((rt: any) => ({ name: rt.name, developerName: rt.developerName, id: rt.recordTypeId, active: rt.active })),
      fields: (d.fields ?? []).map((f: any) => ({
        name: f.name,
        label: f.label,
        type: f.type,
        ...(f.length ? { length: f.length } : {}),
        ...(f.referenceTo?.length ? { referenceTo: f.referenceTo } : {}),
        ...(f.picklistValues?.length ? { picklistValues: f.picklistValues.filter((p: any) => p.active).map((p: any) => p.value) } : {}),
        nillable: f.nillable,
        custom: f.custom,
      })),
      childRelationships: (d.childRelationships ?? []).filter((c: any) => c.relationshipName).map((c: any) => ({ childSObject: c.childSObject, field: c.field, relationshipName: c.relationshipName })),
    };
  },
  get_record: ({ object, id, fields }) => {
    const query = Array.isArray(fields) && fields.length ? `?fields=${fields.map((f: unknown) => apiName(f, "field")).join(",")}` : "";
    return rest("GET", `sobjects/${apiName(object)}/${recordId(id)}${query}`);
  },
  create_record: ({ object, fields }) => rest("POST", `sobjects/${apiName(object)}`, fields),
  update_record: async ({ object, id, fields }) => {
    await rest("PATCH", `sobjects/${apiName(object)}/${recordId(id)}`, fields);
    return { id, updated: true };
  },
  delete_record: async ({ object, id }) => {
    await rest("DELETE", `sobjects/${apiName(object)}/${recordId(id)}`);
    return { id, deleted: true };
  },
  bulk_create_records: ({ object, records }) => collection("POST", apiName(object), records),
  bulk_update_records: ({ object, records }) => {
    if (Array.isArray(records)) records.forEach((r: Args) => recordId(r.Id));
    return collection("PATCH", apiName(object), records);
  },
  run_apex: async ({ code }) => {
    const r = await runApex(code);
    if (!r.success) throw new Error(r.compiled ? `Runtime exception: ${r.exceptionMessage}\n${r.exceptionStackTrace ?? ""}\n\n${r.logs ?? ""}` : `Compile error: ${r.compileProblem}`);
    return r;
  },

  // ───────── Metadata ─────────
  deploy_metadata: ({ sourceDir, testLevel, dryRun }) => deployMetadata(sourceDir, testLevel, dryRun === true),
  retrieve_metadata: ({ manifest, targetDir }) => {
    if (!manifest) throw new Error("manifest (path to a package.xml) is required");
    return retrieveMetadata(manifest, targetDir);
  },

  // ───────── Validation ─────────
  list_validation_groups: async () => {
    const counts: Record<string, number> = {};
    for (const r of await loadRules(rulesRoot)) counts[r.group] = (counts[r.group] ?? 0) + 1;
    return counts;
  },
  audit_auto_config: async ({ group }) => {
    const results = await executeRules(await loadRules(rulesRoot), group);
    if (!results.length) throw new Error(`No validation rules${group ? ` in group "${group}"` : ""}`);
    const summary: Record<string, number> = {};
    for (const r of results) summary[r.status] = (summary[r.status] ?? 0) + 1;
    return {
      summary,
      results: results.map((r) => ({ id: r.rule.id, severity: r.rule.severity, status: r.status, message: r.message, remediation: r.rule.remediation, docs: r.rule.docs })),
    };
  },
  diagnose_auto_issue: async ({ query }) => {
    const terms = String(query).toLowerCase().split(/\s+/).filter(Boolean);
    const rules = (await loadRules(rulesRoot)).filter((r) => terms.some((t) => `${r.id} ${r.description} ${r.remediation ?? ""}`.toLowerCase().includes(t)));
    return { matchingRules: rules, knowledgeHits: await knowledge.searchKnowledge(query, 5) };
  },

  // ───────── Users / permission sets ─────────
  list_users: ({ profile, permissionSet, territory }) => {
    const where = ["IsActive = true"];
    if (profile) where.push(`Profile.Name = ${soqlString(profile)}`);
    if (permissionSet) where.push(`Id IN (SELECT AssigneeId FROM PermissionSetAssignment WHERE PermissionSet.Name = ${soqlString(permissionSet)} OR PermissionSet.Label = ${soqlString(permissionSet)})`);
    if (territory) where.push(`Id IN (SELECT UserId FROM UserTerritory2Association WHERE Territory2.Name = ${soqlString(territory)})`);
    return runSoql(`SELECT Id, Name, Username, Email, Profile.Name, UserType FROM User WHERE ${where.join(" AND ")} ORDER BY Name LIMIT 200`);
  },
  list_permission_sets: async () => ({
    permissionSetLicenses: (await runSoql("SELECT MasterLabel, DeveloperName, Status, TotalLicenses, UsedLicenses, ExpirationDate FROM PermissionSetLicense ORDER BY MasterLabel")).records,
    permissionSetAssignmentCounts: (await runSoql("SELECT PermissionSet.Name name, PermissionSet.Label label, COUNT(Id) assigned FROM PermissionSetAssignment WHERE PermissionSet.IsOwnedByProfile = false GROUP BY PermissionSet.Name, PermissionSet.Label ORDER BY PermissionSet.Label")).records,
  }),
  assign_permission_set: async ({ permSet, userIds }) => {
    const psId = await permissionSetId(permSet);
    return collection("POST", "PermissionSetAssignment", (userIds ?? []).map((u: unknown) => ({ AssigneeId: recordId(u), PermissionSetId: psId })));
  },
  unassign_permission_set: async ({ permSet, userIds }) => {
    const psId = await permissionSetId(permSet);
    const ids = (userIds ?? []).map((u: unknown) => `'${recordId(u)}'`);
    if (!ids.length) throw new Error("userIds must be a non-empty array");
    const psa = await runSoql(`SELECT Id FROM PermissionSetAssignment WHERE PermissionSetId = '${psId}' AND AssigneeId IN (${ids.join(",")})`);
    if (!psa.totalSize) return "None of these users have that permission set assigned.";
    const results = [];
    for (const batch of chunks(psa.records.map((r) => r.Id))) results.push(...(await rest("DELETE", `composite/sobjects?ids=${batch.join(",")}&allOrNone=false`)));
    return batchResult(results);
  },
};

async function main() {
  const server = new Server(
    { name: SERVER_NAME, version: SERVER_VERSION },
    { capabilities: { tools: {} } }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const toolName = request.params.name;
    const handler = handlers[toolName];
    if (!handler) return { content: [{ type: "text", text: `Unknown tool: ${toolName}` }], isError: true };
    try {
      const result = await handler((request.params.arguments ?? {}) as Args);
      let text = typeof result === "string" ? result : JSON.stringify(result, null, 2);
      const target = getTargetOrg();
      if (!KNOWLEDGE_TOOLS.has(toolName) && target) text = `[org: ${target.org} — ${target.source}]\n\n${text}`;
      return { content: [{ type: "text", text }] };
    } catch (err) {
      return { content: [{ type: "text", text: `${toolName} failed: ${(err as Error).message}` }], isError: true };
    }
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`[auto] MCP server v${SERVER_VERSION} ready on stdio`);
}

main().catch((err) => {
  console.error("[auto] Fatal error:", err);
  process.exit(1);
});
