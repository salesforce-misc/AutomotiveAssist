# Open Source Dependencies

This document lists the open source dependencies currently declared in this project and their reported licenses.

## Scope

- Source of truth: `package.json`
- Coverage: direct runtime and development dependencies
- Last generated: 2026-07-31

## Dependency Inventory

| Package | Version Range | License | Source Repository |
|---|---|---|---|
| `@modelcontextprotocol/sdk` | `^1.0.0` | `MIT` | `https://github.com/modelcontextprotocol/typescript-sdk` |
| `@types/node` | `^20.0.0` | `MIT` | `https://github.com/DefinitelyTyped/DefinitelyTyped` |
| `@typescript-eslint/eslint-plugin` | `^7.0.0` | `MIT` | `https://github.com/typescript-eslint/typescript-eslint` |
| `@typescript-eslint/parser` | `^7.0.0` | `MIT` | `https://github.com/typescript-eslint/typescript-eslint` |
| `eslint` | `^8.57.0` | `MIT` | `https://github.com/eslint/eslint` |
| `prettier` | `^3.0.0` | `MIT` | `https://github.com/prettier/prettier` |
| `tsx` | `^4.7.0` | `MIT` | `https://github.com/privatenumber/tsx` |
| `typescript` | `^5.4.0` | `Apache-2.0` | `https://github.com/microsoft/TypeScript` |
| `vitest` | `^1.6.0` | `MIT` | `https://github.com/vitest-dev/vitest` |
| `yaml` | `^2.4.0` | `ISC` | `https://github.com/eemeli/yaml` |
| `zod` | `^3.23.0` | `MIT` | `https://github.com/colinhacks/zod` |

## Notes

- License values come from npm package metadata and should be validated during legal review.
- This report does not include transitive dependencies.
- For release readiness, add or verify repository-level `LICENSE` and `CONTRIBUTING.md` files.

## Regeneration

Regenerate inventory JSON:

```bash
node -e 'const fs=require("fs");const pkg=JSON.parse(fs.readFileSync("package.json","utf8"));const deps={...pkg.dependencies,...pkg.devDependencies};const {execSync}=require("child_process");const rows=[];for(const [name,range] of Object.entries(deps)){let license="UNKNOWN";let repo="";try{license=execSync(`npm view ${name} license --json`,{encoding:"utf8"}).trim();if(license.startsWith("\"")||license.startsWith("[")) license=JSON.parse(license);if(Array.isArray(license)) license=license.join(", ");}catch(e){}try{repo=execSync(`npm view ${name} repository.url --json`,{encoding:"utf8"}).trim();if(repo.startsWith("\"")) repo=JSON.parse(repo);}catch(e){}rows.push({name,versionRange:range,license,repo});}rows.sort((a,b)=>a.name.localeCompare(b.name));fs.mkdirSync("docs/open-source",{recursive:true});fs.writeFileSync("docs/open-source/dependency-inventory.json",JSON.stringify(rows,null,2));console.log(`wrote ${rows.length} dependencies`);'
```
