/**
 * Salesforce CLI wrapper skeleton — to be implemented.
 *
 * Provides:
 *   - sf(args) — typed wrapper around `sf` CLI invocations
 *   - runSoql(query, useTooling=false)
 *   - describeSObject(name)
 *   - listOrgs()
 *   - setTargetOrg(alias)
 *   - openOrg(path?)
 *   - runApex(code)
 *   - retrieveMetadata(manifest, dir)
 *   - deployMetadata(dir, testLevel?)
 */

import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export async function sf(args: string[]): Promise<string> {
  const { stdout } = await execFileAsync("sf", args, { maxBuffer: 50 * 1024 * 1024 });
  return stdout;
}

export async function runSoql(query: string, useTooling = false): Promise<unknown> {
  const args = ["data", "query", "--query", query, "--json"];
  if (useTooling) args.push("--use-tooling-api");
  const stdout = await sf(args);
  return JSON.parse(stdout);
}

export async function describeSObject(name: string): Promise<unknown> {
  const stdout = await sf(["sobject", "describe", "--sobject", name, "--json"]);
  return JSON.parse(stdout);
}

export async function listOrgs(): Promise<unknown> {
  const stdout = await sf(["org", "list", "--json"]);
  return JSON.parse(stdout);
}

export async function setTargetOrg(alias: string): Promise<void> {
  await sf(["config", "set", `target-org=${alias}`]);
}

export async function openOrg(path?: string): Promise<void> {
  const args = ["org", "open"];
  if (path) args.push("--path", path);
  await sf(args);
}

export async function runApex(code: string): Promise<unknown> {
  const stdout = await sf(["apex", "run", "--file", "/dev/stdin", "--json"]);
  return JSON.parse(stdout);
}
