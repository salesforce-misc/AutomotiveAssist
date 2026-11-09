/**
 * Knowledge loader — reads the `knowledge/` directory tree.
 *
 * Module slugs are the folder names under knowledge/modules/ (see INDEX.md).
 * Doc lookups (help, guides, troubleshooting, exercises, release notes) match the
 * requested name against file paths in that category, and fall back to a search there.
 */

import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

export interface AutoModule {
  slug: string;
  title: string;
  category: string;
  filePath: string;
}

export interface SearchHit {
  source: string;
  title: string;
  snippet: string;
  score: number;
}

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export class AutoKnowledgeLoader {
  constructor(private knowledgeRoot: string) {}

  /** Relative paths of every .md file under knowledgeRoot/sub. */
  async listDocs(sub = ""): Promise<string[]> {
    const entries = await readdir(join(this.knowledgeRoot, sub), { recursive: true, withFileTypes: true });
    return entries
      .filter((e) => e.isFile() && e.name.endsWith(".md"))
      .map((e) => relative(this.knowledgeRoot, join(e.parentPath, e.name)))
      .sort();
  }

  private read(rel: string): Promise<string> {
    return readFile(join(this.knowledgeRoot, rel), "utf8");
  }

  async listModules(): Promise<AutoModule[]> {
    const dirs = (await readdir(join(this.knowledgeRoot, "modules"), { withFileTypes: true })).filter((d) => d.isDirectory());
    return Promise.all(
      dirs.map(async (d) => {
        const filePath = join("modules", d.name, "README.md");
        const title = (await this.read(filePath).catch(() => "")).match(/^# (.+)$/m)?.[1] ?? d.name;
        return { slug: d.name, title, category: "module", filePath };
      })
    );
  }

  async getModuleDocs(slug: string): Promise<string> {
    const docs = await this.listDocs(join("modules", slugify(slug))).catch(() => []);
    if (!docs.length) throw new Error(`Unknown module "${slug}". Available: ${(await this.listModules()).map((m) => m.slug).join(", ")}`);
    return (await Promise.all(docs.map(async (d) => `<!-- ${d} -->\n${await this.read(d)}`))).join("\n\n");
  }

  async searchKnowledge(query: string, limit = 10, sub = ""): Promise<SearchHit[]> {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    const hits: SearchHit[] = [];
    for (const doc of await this.listDocs(sub)) {
      const text = await this.read(doc);
      const lower = text.toLowerCase();
      const score = terms.reduce((n, t) => n + lower.split(t).length - 1, 0);
      if (!score) continue;
      const at = Math.max(0, lower.indexOf(lower.includes(query.toLowerCase()) ? query.toLowerCase() : terms[0]) - 200);
      hits.push({
        source: doc,
        title: text.match(/^# (.+)$/m)?.[1] ?? doc,
        snippet: text.slice(at, at + 600).trim(),
        score,
      });
    }
    return hits.sort((a, b) => b.score - a.score).slice(0, limit);
  }

  /** One file whose path matches `name` → its content; several → list them; none → search the category. */
  async getDoc(category: string, name: string): Promise<string> {
    const docs = await this.listDocs(category);
    const wanted = slugify(name);
    const matches = docs.filter((d) => slugify(d.replace(/\.md$/, "")).includes(wanted));
    if (matches.length === 1) return this.read(matches[0]);
    if (matches.length > 1) return `Several ${category} docs match "${name}" — ask for one of:\n${matches.map((m) => `- ${m}`).join("\n")}`;
    const hits = await this.searchKnowledge(name, 5, category);
    if (hits.length) return `No ${category} doc is named "${name}". Closest search hits:\n\n` + hits.map((h) => `## ${h.title} (${h.source})\n\n${h.snippet}`).join("\n\n---\n\n");
    return `No ${category} doc matches "${name}". Available:\n${docs.map((d) => `- ${d}`).join("\n")}`;
  }
}
