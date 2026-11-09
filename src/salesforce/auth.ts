/**
 * Setup status: SF CLI install + authenticated orgs + the org this session will use.
 */

import { getTargetOrg, listOrgs, resolveTargetOrg, sf, SfCliMissingError, type OrgInfo } from "./cli.js";

export interface SetupStatus {
  cliInstalled: boolean;
  cliVersion?: string;
  authenticatedOrgs: OrgInfo[];
  targetOrg?: string;
  targetOrgSource?: string;
  targetOrgNote?: string;
}

export async function checkSetup(): Promise<SetupStatus> {
  let cliVersion: string;
  try {
    cliVersion = (await sf(["--version"])).trim();
  } catch (err) {
    if (err instanceof SfCliMissingError) return { cliInstalled: false, authenticatedOrgs: [], targetOrgNote: err.message };
    throw err;
  }
  const authenticatedOrgs = await listOrgs();
  try {
    await resolveTargetOrg();
  } catch (err) {
    return { cliInstalled: true, cliVersion, authenticatedOrgs, targetOrgNote: (err as Error).message };
  }
  const target = getTargetOrg()!;
  return { cliInstalled: true, cliVersion, authenticatedOrgs, targetOrg: target.org, targetOrgSource: target.source };
}
