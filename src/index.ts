import { defineAgent } from "@lifetimesoft/agent-sdk"

export default defineAgent({
    async run(ctx) {
        ctx.log.info('scheduler type: ' + ctx.config.scheduler?.type)
        ctx.log.info("hello world")
    },
})
