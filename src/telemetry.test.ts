import { describe, expect, it, vi } from "vitest";
import { track } from "./telemetry.js";

const fields = { event: "tool_call", tool: "run_soql", ok: true, durationMs: 12, serverVersion: "0.1.0" } as const;
const on = { AUTO_TELEMETRY: "1", AUTO_TELEMETRY_URL: "http://localhost:1/e" };

describe("telemetry", () => {
  it("does nothing unless opted in with a URL", () => {
    const send = vi.fn();
    track(fields, {}, send as any);
    track(fields, { AUTO_TELEMETRY: "1" }, send as any);
    track(fields, { AUTO_TELEMETRY_URL: "http://x" }, send as any);
    expect(send).not.toHaveBeenCalled();
  });

  it("DO_NOT_TRACK overrides opt-in", () => {
    const send = vi.fn();
    track(fields, { ...on, DO_NOT_TRACK: "1" }, send as any);
    expect(send).not.toHaveBeenCalled();
  });

  it("sends only the allowed fields", () => {
    const send = vi.fn().mockResolvedValue({});
    track(fields, on, send as any);
    const body = JSON.parse(send.mock.calls[0][1].body);
    expect(Object.keys(body).sort()).toEqual(
      ["durationMs", "event", "installId", "nodeVersion", "ok", "os", "serverVersion", "tool", "ts"],
    );
  });

  it("never throws when the endpoint is down", async () => {
    const send = vi.fn().mockRejectedValue(new Error("ECONNREFUSED"));
    expect(() => track(fields, on, send as any)).not.toThrow();
    await Promise.resolve();
  });
});
