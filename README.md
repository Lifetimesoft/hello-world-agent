# hello-world-agent

A simple hello world agent built with [`@lifetimesoft/agent-sdk`](https://www.npmjs.com/package/@lifetimesoft/agent-sdk).

---

## 📦 Features

* Minimal agent using `defineAgent()` from `@lifetimesoft/agent-sdk`
* Logs `"hello world"` via `ctx.log.info`
* TypeScript with strict mode

---

## 🚀 Getting Started

```bash
lifectl ai agent pull hello-world-agent
lifectl ai agent run hello-world-agent
lifectl ai agent logs hello-world-agent
lifectl ai agent stop hello-world-agent
```

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

The agent is triggered by the `lifectl` runtime. Each run calls `run(ctx)` once — the runtime handles scheduling, logging, and lifecycle.

---

## 🧩 Related Tools

* [`lifectl`](https://www.npmjs.com/package/@lifetimesoft/lifectl) – CLI for running and managing agents
* [`@lifetimesoft/agent-sdk`](https://www.npmjs.com/package/@lifetimesoft/agent-sdk) – SDK for building portable AI agents

---

## 📄 License

MIT
