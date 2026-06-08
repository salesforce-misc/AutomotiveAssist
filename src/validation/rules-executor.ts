/**
 * Validation rule execution engine skeleton — to be implemented.
 *
 * Walks each loaded rule, runs the corresponding check (SOQL / Tooling / metadata / PSL / trigger handler),
 * and returns pass/fail/warn results.
 */

import type { ValidationRule } from "./rules-loader.js";

export interface RuleResult {
  rule: ValidationRule;
  status: "pass" | "fail" | "warn" | "skip";
  message?: string;
}

export async function executeRules(rules: ValidationRule[], _group?: string): Promise<RuleResult[]> {
  const filtered = _group ? rules.filter((r) => r.group === _group) : rules;
  // TODO: implement per-check-type executors (tooling-soql, soql, admin-setting, psl-assignment, trigger-handler, metadata)
  return filtered.map((r) => ({ rule: r, status: "skip" as const, message: "Executor not implemented yet" }));
}
