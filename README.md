# hello-world-agent

A simple hello world agent built with [`@lifetimesoft/agent-sdk`](https://www.npmjs.com/package/@lifetimesoft/agent-sdk).

---

## 📦 Features

* Minimal agent using `defineAgent()` from `@lifetimesoft/agent-sdk`
* Logs `"hello world"` via `ctx.log.info`
* TypeScript with strict mode
* Scheduler support — configure via platform dashboard (none / interval / cron)

---

## 🚀 Getting Started

```bash
lifectl ai agent pull hello-world-agent
lifectl ai agent run hello-world-agent
lifectl ai agent logs hello-world-agent
lifectl ai agent stop hello-world-agent
```

![lifectl ai agent demo](assets/lifectl-ai-agent-01.gif)

---

## 🧠 How It Works

```ts
import { defineAgent } from "@lifetimesoft/agent-sdk"

export default defineAgent({
  async run(ctx) {
    ctx.log.info("hello world")
  },
})
```

The `lifectl` runtime handles everything automatically:
- Detects your package manager and runs `install`
- Starts the agent via `agent-runtime` (from `@lifetimesoft/agent-sdk`)
- Maintains a **WebSocket connection** to SaaS for heartbeat (hibernates between messages — near-zero cost)
- Detects offline immediately when connection drops
- Manages lifecycle and graceful shutdown — agent code never needs to know
- Runs `run()` on schedule or on manual trigger — based on scheduler config from the platform

---

## 🕐 Scheduler

Scheduler config is set from the platform dashboard — no code changes needed.

| type | behavior |
|---|---|
| `none` | manual trigger only — click Trigger in the dashboard |
| `interval` | runs every N milliseconds |
| `cron` | runs on a cron schedule (e.g. `0 9 * * 1-5`) |

---

## 📁 Project Structure

```
src/
  index.ts        ← agent logic (only thing you write)
dist/
  index.js        ← compiled output (built by tsc)
package.json      ← dependencies including @lifetimesoft/agent-sdk
agent.json        ← agent metadata
```

---

## 📋 agent.json

```json
{
  "name": "hello-world-agent",
  "version": "0.0.8",
  "runtime": "node20",
  "main": "dist/index.js",
  "public": true,
  "keywords": ["hello", "example", "test"]
}
```

---

## 🧩 Related Tools

* [`lifectl`](https://www.npmjs.com/package/@lifetimesoft/lifectl) – CLI for running and managing agents
* [`@lifetimesoft/agent-sdk`](https://www.npmjs.com/package/@lifetimesoft/agent-sdk) – SDK for building portable AI agents

---

## 📄 License

MIT
