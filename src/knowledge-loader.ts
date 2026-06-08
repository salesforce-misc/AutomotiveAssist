/**
 * Knowledge loader skeleton — to be implemented.
 *
 * Reads the `knowledge/` directory tree and exposes:
 *   - listModules()
 *   - getModuleDocs(slug)
 *   - searchKnowledge(query, limit)
 *   - getHelpDoc(topic)
 *   - getGuide(name)
 *   - getTroubleshooting(issue)
 *   - getExercise(name)
 *
 * Module slugs are defined in knowledge/modules/INDEX.md.
 */

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

export class AutoKnowledgeLoader {
  constructor(private knowledgeRoot: string) {}

  async listModules(): Promise<AutoModule[]> {
    // TODO: enumerate knowledge/modules/<slug>/README.md
    return [];
  }

  async getModuleDocs(_slug: string): Promise<string> {
    // TODO: read knowledge/modules/<slug>/*.md
    return "";
  }

  async searchKnowledge(_query: string, _limit = 10): Promise<SearchHit[]> {
    // TODO: full-text search across knowledge/**/*.md
    return [];
  }

  async getHelpDoc(_topic: string): Promise<string> {
    return "";
  }

  async getGuide(_name: string): Promise<string> {
    return "";
  }

  async getTroubleshooting(_issue: string): Promise<string> {
    return "";
  }

  async getExercise(_name: string): Promise<string> {
    return "";
  }
}
