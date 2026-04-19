import { defineAgent } from "@lifetimesoft/agent-sdk"

export default defineAgent({
  async run(ctx) {
    while (true) {
      ctx.log.info("hello world")
      await new Promise(resolve => setTimeout(resolve, 10_000))
    }
  },
})
