import { mkdirSync, mkdtempSync, realpathSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it, vi } from "vitest";
import { projectRoot } from "./cli.js";

describe("projectRoot", () => {
  const tmp = realpathSync(mkdtempSync(join(tmpdir(), "auto-root-")));
  const project = join(tmp, "proj");
  const source = join(project, "force-app", "main", "default");
  mkdirSync(source, { recursive: true });
  writeFileSync(join(project, "sfdx-project.json"), "{}");
  const outside = join(tmp, "loose");
  mkdirSync(outside);

  it("finds the project that contains the path", () => {
    expect(projectRoot(source)).toBe(project);
    expect(projectRoot(join(project, "package.xml"))).toBe(project);
  });

  it("returns the real path when the source is reached through a symlink", () => {
    const link = join(tmp, "link");
    symlinkSync(project, link);
    expect(projectRoot(join(link, "force-app"))).toBe(project);
  });

  it("falls back to the project containing the server cwd", () => {
    vi.spyOn(process, "cwd").mockReturnValueOnce(source);
    expect(projectRoot(outside)).toBe(project);
  });

  it("throws when neither is in a project", () => {
    vi.spyOn(process, "cwd").mockReturnValueOnce(outside);
    expect(() => projectRoot(outside)).toThrow(/not inside a Salesforce DX project/);
  });
});
