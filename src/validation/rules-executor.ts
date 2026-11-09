/**
 * Validation rule execution engine.
 *
 * Runs each rule's check against the target org and returns pass/fail/warn/skip.
 * Implemented check types: metadata (object + hasRecordTypes), psl-assignment (all-active-users).
 * Anything else, or a check that errors, is reported as "skip" with the reason — never as a pass.
 */

import { describeSObject, runSoql } from "../salesforce/cli.js";
import type { ValidationRule } from "./rules-loader.js";

export interface RuleResult {
  rule: ValidationRule;
  status: "pass" | "fail" | "warn" | "skip";
  message?: string;
}

type CheckOutcome = { ok: boolean; message: string } | { skip: string };

const soqlString = (s: string) => `'${s.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;

async function runCheck(check: Record<string, any>): Promise<CheckOutcome> {
  switch (check.type) {
    case "metadata": {
      if (!check.object || !Array.isArray(check.hasRecordTypes)) break;
      const describe = await describeSObject(check.object);
      const present = new Set((describe.recordTypeInfos ?? []).map((rt: any) => rt.developerName));
      const missing = check.hasRecordTypes.filter((rt: string) => !present.has(rt));
      return missing.length
        ? { ok: false, message: `${check.object} is missing record types: ${missing.join(", ")}` }
        : { ok: true, message: `${check.object} has record types: ${check.hasRecordTypes.join(", ")}` };
    }
    case "psl-assignment": {
      if (!check.psl || check.target !== "all-active-users") break;
      const label = soqlString(check.psl);
      const psl = await runSoql(`SELECT Id FROM PermissionSetLicense WHERE MasterLabel = ${label} OR DeveloperName = ${label}`);
      if (psl.totalSize === 0) return { ok: false, message: `Permission set license "${check.psl}" is not provisioned in this org` };
      const missing = await runSoql(
        `SELECT COUNT() FROM User WHERE IsActive = true AND UserType = 'Standard' AND Id NOT IN ` +
          `(SELECT AssigneeId FROM PermissionSetLicenseAssign WHERE PermissionSetLicenseId = '${psl.records[0].Id}')`
      );
      return missing.totalSize
        ? { ok: false, message: `${missing.totalSize} active standard user(s) lack the "${check.psl}" PSL` }
        : { ok: true, message: `All active standard users have the "${check.psl}" PSL` };
    }
  }
  return { skip: `Check type "${check.type}" with these fields is not supported by the executor yet — verify manually` };
}

export async function executeRules(rules: ValidationRule[], group?: string): Promise<RuleResult[]> {
  const filtered = group ? rules.filter((r) => r.group === group) : rules;
  const results: RuleResult[] = [];
  for (const rule of filtered) {
    try {
      const outcome = await runCheck(rule.check ?? {});
      if ("skip" in outcome) results.push({ rule, status: "skip", message: outcome.skip });
      else results.push({ rule, status: outcome.ok ? "pass" : rule.severity === "error" ? "fail" : "warn", message: outcome.message });
    } catch (err) {
      results.push({ rule, status: "skip", message: `Check could not run: ${(err as Error).message}` });
    }
  }
  return results;
}
