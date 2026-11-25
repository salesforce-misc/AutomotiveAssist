/**
 * Opt-in, anonymous usage telemetry. Off unless AUTO_TELEMETRY=1 and AUTO_TELEMETRY_URL are set
 * (DO_NOT_TRACK=1 always wins). Sends only the fields in TelemetryEvent: never tool arguments,
 * org ids/aliases, SOQL or record data. Failures are swallowed so a tool call is never affected.
 */

import { randomUUID } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir, platform } from "node:os";
import { dirname, join } from "node:path";

export interface TelemetryEvent {
  event: "server_start" | "tool_call";
  tool?: string;
  ok?: boolean;
  durationMs?: number;
  serverVersion: string;
  os: string;
  nodeVersion: string;
  installId: string;
  ts: string;
}

type Env = Record<string, string | undefined>;

export function telemetryUrl(env: Env = process.env): string | undefined {
  if (env.DO_NOT_TRACK === "1" || env.AUTO_TELEMETRY !== "1") return undefined;
  return env.AUTO_TELEMETRY_URL || undefined;
}

const ID_FILE = join(homedir(), ".claude", "auto-plugin", "telemetry.json");
let cachedId: string | undefined;

/** Random per-install id; kept in memory only if the file can't be read or written (e.g. sandbox). */
function installId(): string {
  if (cachedId) return cachedId;
  try {
    cachedId = JSON.parse(readFileSync(ID_FILE, "utf8")).installId;
  } catch {
    /* no file yet */
  }
  if (!cachedId) {
    cachedId = randomUUID();
    try {
      mkdirSync(dirname(ID_FILE), { recursive: true });
      writeFileSync(ID_FILE, JSON.stringify({ installId: cachedId }));
    } catch {
      /* in-memory id for this session */
    }
  }
  return cachedId as string;
}

export function track(
  fields: Pick<TelemetryEvent, "event" | "tool" | "ok" | "durationMs" | "serverVersion">,
  env: Env = process.env,
  send: typeof fetch = fetch,
): void {
  const url = telemetryUrl(env);
  if (!url) return;
  const event: TelemetryEvent = {
    ...fields,
    os: platform(),
    nodeVersion: process.version,
    installId: installId(),
    ts: new Date().toISOString(),
  };
  send(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(event),
    signal: AbortSignal.timeout(2000),
  }).catch(() => {});
}
