# hello-world-agent

A simple hello world agent built with [`@lifetimesoft/agent-sdk`](https://www.npmjs.com/package/@lifetimesoft/agent-sdk).

Runs on both the **Node.js host** (`lifectl`) and the **Chrome Extension host** — same code, no changes needed.

---

## 🚀 Getting Started

```bash
lifectl ai agent pull hello-world-agent
lifectl ai agent run hello-world-agent
lifectl ai agent logs hello-world-agent
lifectl ai agent stop hello-world-agent
```

---

## 🧠 Agent Code

```ts
import { defineAgent } from "@lifetimesoft/agent-sdk"

export default defineAgent({
  async run(ctx) {
    ctx.log.info("scheduler type: " + ctx.config.scheduler?.type)
    ctx.log.info("hello world")
  },
})
```

---

## 🔨 Build

This project uses `agent-build` from `@lifetimesoft/agent-sdk` — no separate esbuild config needed.

```bash
npm run build   # bundles src/index.ts → dist/index.js
npm run dev     # watch mode
```

`agent-build` defaults:
- bundles all dependencies inline (self-contained — no `node_modules` needed at runtime)
- outputs CJS format (required by `agent-runtime`)
- `--platform=neutral` — works on both Node.js and Chrome Extension sandbox

---

## 📋 agent.json

```json
{
  "name": "hello-world-agent",
  "version": "0.0.10",
  "runtime": "node20",
  "main": "dist/index.js",
  "public": true
}
```

No `capabilities` declared → compatible with **all hosts** (Node, Chrome, future mobile).

---

## 🕐 Scheduler

Scheduler config is set from the platform dashboard — no code changes needed.

| type | behavior |
|---|---|
| `none` | manual trigger only |
| `interval` | runs every N milliseconds |
| `cron` | runs on cron schedule (e.g. `0 9 * * 1-5`) |

---

## 📁 Project Structure

```
src/
  index.ts        ← agent logic (only thing you write)
dist/
  index.js        ← self-contained bundle (built by agent-build)
agent.json        ← agent metadata
package.json
```

---

## 🧩 Related

* [`lifectl`](https://www.npmjs.com/package/@lifetimesoft/lifectl) — CLI for running agents on Node.js
* [`@lifetimesoft/agent-sdk`](https://www.npmjs.com/package/@lifetimesoft/agent-sdk) — SDK + `agent-build` + `agent-runtime`
* [`chrome-extension-host`](https://github.com/Lifetimesoft/chrome-extension-host) — Chrome Extension host

---

## 📄 License

MIT
