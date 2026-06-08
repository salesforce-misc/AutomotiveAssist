/**
 * Org detection + selection skeleton — to be implemented.
 *
 * Provides:
 *   - checkSetup() — returns SF CLI install status + authenticated orgs + current target
 *   - autoSelectOrg() — if exactly 1 authenticated org, return its alias; else null
 */

import { listOrgs } from "./cli.js";

export interface SetupStatus {
  cliInstalled: boolean;
  cliVersion?: string;
  authenticatedOrgs: { alias: string; username: string; instanceUrl: string }[];
  targetOrg?: string;
}

export async function checkSetup(): Promise<SetupStatus> {
  // TODO: execFile sf --version; on ENOENT return { cliInstalled: false }
  // TODO: parse listOrgs() into authenticatedOrgs
  // TODO: read sf config get target-org for current target
  const _orgs = await listOrgs();
  return {
    cliInstalled: true,
    authenticatedOrgs: [],
  };
}
