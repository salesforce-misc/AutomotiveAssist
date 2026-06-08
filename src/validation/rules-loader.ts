/**
 * Validation rule YAML loader skeleton — to be implemented.
 *
 * Reads knowledge/validation-rules/*.yaml and returns parsed rule objects.
 */

import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import yaml from "yaml";

export interface ValidationRule {
  id: string;
  group: string;
  description: string;
  severity: "error" | "warning" | "info";
  check: Record<string, unknown>;
  remediation?: string;
  docs?: string;
}

export async function loadRules(rulesRoot: string): Promise<ValidationRule[]> {
  const files = await readdir(rulesRoot);
  const rules: ValidationRule[] = [];
  for (const f of files) {
    if (!f.endsWith(".yaml") || f.startsWith("_")) continue;
    const text = await readFile(join(rulesRoot, f), "utf8");
    const docs = yaml.parseAllDocuments(text);
    for (const d of docs) {
      const obj = d.toJSON();
      if (obj && typeof obj === "object") rules.push(obj as ValidationRule);
    }
  }
  return rules;
}
