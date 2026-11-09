import { describe, expect, it, vi } from "vitest";

vi.mock("../salesforce/cli.js", () => ({
  describeSObject: vi.fn(async () => ({ recordTypeInfos: [{ developerName: "Vehicle" }] })),
  runSoql: vi.fn(async (q: string) => (q.includes("PermissionSetLicense WHERE") ? { totalSize: 1, records: [{ Id: "0PL000000000001" }] } : { totalSize: 3, records: [] })),
}));

const { executeRules } = await import("./rules-executor.js");

const rule = (id: string, severity: "error" | "warning", check: Record<string, unknown>) => ({ id, group: "g", description: id, severity, check });

describe("executeRules", () => {
  it("maps outcomes to pass/fail/warn/skip", async () => {
    const results = await executeRules([
      rule("rt-ok", "error", { type: "metadata", object: "Asset", hasRecordTypes: ["Vehicle"] }),
      rule("rt-missing", "warning", { type: "metadata", object: "Asset", hasRecordTypes: ["Vehicle", "Parts"] }),
      rule("psl", "error", { type: "psl-assignment", psl: "Automotive Foundation User", target: "all-active-users" }),
      rule("admin", "error", { type: "admin-setting", category: "x", setting: "y" }),
    ]);
    expect(results.map((r) => [r.rule.id, r.status])).toEqual([
      ["rt-ok", "pass"],
      ["rt-missing", "warn"],
      ["psl", "fail"],
      ["admin", "skip"],
    ]);
    expect(results[1].message).toContain("Parts");
    expect(results[2].message).toContain("3 active");
  });
});
