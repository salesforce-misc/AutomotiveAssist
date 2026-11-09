/**
 * Salesforce CLI wrapper.
 *
 * Every org-touching call goes through `orgArgs()`, which pins an explicit
 * `--target-org` so results never depend on the server process's cwd config.
 * Org resolution order: set_target_org (session) → sf config target-org → the
 * only authenticated org. The selection is session-only; we never write sf config.
 */

import { execFile } from "node:child_process";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export class SfCliMissingError extends Error {
  constructor() {
    super("Salesforce CLI (sf) not found on PATH. Install it with `npm install -g @salesforce/cli` (or the install_sf_cli tool).");
  }
}

/** Pull a readable message out of sf `--json` error output or a REST error body. */
function errorMessage(stdout?: string): string | undefined {
  if (!stdout?.trim()) return undefined;
  try {
    const parsed = JSON.parse(stdout);
    if (Array.isArray(parsed)) return parsed.map((e) => `${e.errorCode ?? ""} ${e.message ?? JSON.stringify(e)}`.trim()).join("; ");
    if (parsed?.body) return errorMessage(JSON.stringify(parsed.body)) ?? JSON.stringify(parsed.body);
    if (parsed?.message) return `${parsed.name ? `${parsed.name}: ` : ""}${String(parsed.message).trim()}`;
    return stdout.trim();
  } catch {
    return stdout.trim();
  }
}

export async function sf(args: string[]): Promise<string> {
  try {
    const { stdout } = await execFileAsync("sf", args, {
      maxBuffer: 50 * 1024 * 1024,
      env: { ...process.env, SF_AUTOUPDATE_DISABLE: "true" },
    });
    return stdout;
  } catch (err) {
    const e = err as NodeJS.ErrnoException & { stdout?: string; stderr?: string };
    if (e.code === "ENOENT") throw new SfCliMissingError();
    throw new Error(errorMessage(e.stdout) ?? (e.stderr?.trim() || e.message));
  }
}

/** Run `sf <args> --json` and return its `result`. */
export async function sfJson<T = any>(args: string[]): Promise<T> {
  const parsed = JSON.parse(await sf([...args, "--json"]));
  if (parsed.status !== 0) throw new Error(parsed.message ?? JSON.stringify(parsed));
  return parsed.result as T;
}

export interface OrgInfo {
  alias?: string;
  username: string;
  instanceUrl: string;
  orgId?: string;
  isDefaultUsername?: boolean;
}

export async function listOrgs(): Promise<OrgInfo[]> {
  const result = await sfJson<Record<string, OrgInfo[]>>(["org", "list", "--skip-connection-status"]);
  // devHubs/sandboxes overlap nonScratchOrgs, so dedupe by username.
  const byUser = new Map<string, OrgInfo>();
  for (const org of Object.values(result).flat()) {
    byUser.set(org.username, { alias: org.alias, username: org.username, instanceUrl: org.instanceUrl, orgId: org.orgId, isDefaultUsername: org.isDefaultUsername });
  }
  return [...byUser.values()];
}

let targetOrg: string | undefined;
let targetOrgSource: "set_target_org" | "sf config target-org" | "only authenticated org" | undefined;

export function getTargetOrg() {
  return targetOrg ? { org: targetOrg, source: targetOrgSource } : undefined;
}

export async function resolveTargetOrg(): Promise<string> {
  if (targetOrg) return targetOrg;
  const config = await sfJson<{ value?: string }[]>(["config", "get", "target-org"]);
  if (config[0]?.value) {
    targetOrgSource = "sf config target-org";
    return (targetOrg = config[0].value);
  }
  const orgs = await listOrgs();
  if (orgs.length === 1) {
    targetOrgSource = "only authenticated org";
    return (targetOrg = orgs[0].alias ?? orgs[0].username);
  }
  if (orgs.length === 0) throw new Error("No authenticated Salesforce orgs. Run `sf org login web --alias my-auto-org` in a terminal.");
  throw new Error(`Multiple orgs are authenticated and none is selected. Call set_target_org with one of: ${orgs.map((o) => o.alias ?? o.username).join(", ")}`);
}

async function orgArgs(): Promise<string[]> {
  return ["--target-org", await resolveTargetOrg()];
}

const apiVersions = new Map<string, string>();

/** Validates the alias/username against the CLI's auth store, then pins it for this session. */
export async function setTargetOrg(alias: string): Promise<OrgInfo> {
  const info = await sfJson<{ alias?: string; username: string; instanceUrl: string; id: string; apiVersion: string }>(["org", "display", "--target-org", alias]);
  targetOrg = alias;
  targetOrgSource = "set_target_org";
  apiVersions.set(alias, info.apiVersion);
  return { alias: info.alias, username: info.username, instanceUrl: info.instanceUrl, orgId: info.id };
}

async function apiVersion(): Promise<string> {
  const org = await resolveTargetOrg();
  if (!apiVersions.has(org)) apiVersions.set(org, (await sfJson<{ apiVersion: string }>(["org", "display", "--target-org", org])).apiVersion);
  return apiVersions.get(org)!;
}

export async function runSoql(query: string, useTooling = false): Promise<{ totalSize: number; done: boolean; records: any[] }> {
  const args = ["data", "query", "--query", query, ...(await orgArgs())];
  if (useTooling) args.push("--use-tooling-api");
  return sfJson(args);
}

export async function describeSObject(name: string): Promise<any> {
  return sfJson(["sobject", "describe", "--sobject", name, ...(await orgArgs())]);
}

/** Opens the org in the browser. The returned frontdoor URL carries a session id, so callers must not echo it. */
export async function openOrg(path?: string): Promise<void> {
  const args = ["org", "open", ...(await orgArgs())];
  if (path) args.push("--path", path);
  await sfJson(args);
}

export async function runApex(code: string): Promise<{ success: boolean; compiled: boolean; compileProblem?: string; exceptionMessage?: string; exceptionStackTrace?: string; logs?: string }> {
  const dir = await mkdtemp(join(tmpdir(), "auto-apex-"));
  try {
    const file = join(dir, "anon.apex");
    await writeFile(file, code, "utf8");
    return await sfJson(["apex", "run", "--file", file, ...(await orgArgs())]);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

/** REST call relative to /services/data/vXX.X/. Returns the parsed body (undefined for 204). */
export async function rest(method: "GET" | "POST" | "PATCH" | "DELETE", path: string, body?: unknown): Promise<any> {
  const args = ["api", "request", "rest", `/services/data/v${await apiVersion()}/${path}`, "--method", method, ...(await orgArgs())];
  if (body !== undefined) args.push("--body", JSON.stringify(body));
  const stdout = (await sf(args)).trim();
  if (!stdout) return undefined;
  let parsed: any;
  try {
    parsed = JSON.parse(stdout);
  } catch {
    return stdout;
  }
  // Older sf versions exit 0 on HTTP errors, so detect the Salesforce error shape too.
  if (Array.isArray(parsed) && parsed.length && parsed.every((e) => e?.errorCode)) throw new Error(errorMessage(stdout));
  return parsed;
}

export async function deployMetadata(sourceDir: string, testLevel?: string, dryRun = false): Promise<any> {
  const args = ["project", "deploy", "start", "--source-dir", sourceDir, "--wait", "30", ...(await orgArgs())];
  if (testLevel) args.push("--test-level", testLevel);
  if (dryRun) args.push("--dry-run");
  return sfJson(args);
}

export async function retrieveMetadata(manifest: string, targetDir?: string): Promise<any> {
  const args = ["project", "retrieve", "start", "--manifest", manifest, "--wait", "30", ...(await orgArgs())];
  if (targetDir) args.push("--output-dir", targetDir);
  return sfJson(args);
}

export async function installCli(): Promise<string> {
  const { stdout, stderr } = await execFileAsync("npm", ["install", "-g", "@salesforce/cli"], { maxBuffer: 10 * 1024 * 1024 });
  return `${stdout}${stderr}`.trim();
}
