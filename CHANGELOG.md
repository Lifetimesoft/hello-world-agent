# Changelog

All notable changes to `hello-world-agent` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.0.5] - 2026-04-19

### Changed

- Updated `@lifetimesoft/agent-sdk` dependency from `0.0.1` to `0.0.2`

---

## [0.0.4] - 2026-04-18

### Changed

- Migrated to [`@lifetimesoft/agent-sdk`](https://www.npmjs.com/package/@lifetimesoft/agent-sdk) — replaced raw `index.js` loop with `defineAgent()`
- Converted codebase from JavaScript to TypeScript (`src/index.ts`)
- Agent entry point changed from `node index.js` to `node dist/index.js`
- Added `package.json`, `tsconfig.json` for TypeScript build
- Added `npm install` to `agent.json` install script
- Updated `.agentignore` to exclude `node_modules` and `dist`
- Updated README to reflect new structure and SDK usage

---

## [0.0.3] - 2026-04-16

### Added

- `pull_public` flag in `agent.json`

### Removed

- `stop` script from `agent.json`

---

## [0.0.2] - 2026-04-07

### Added

- `public` and `version_public` flags in `agent.json`
- Additional entries in `.agentignore`

---

## [0.0.1] - 2026-04-02

### Added

- Initial `hello-world-agent` — logs `"hello world"` every 10 seconds
- `agent.json` with node20 runtime config
- README
