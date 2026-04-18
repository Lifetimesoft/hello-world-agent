import { describe, it, expect, vi } from "vitest"
import { createMockContext } from "@lifetimesoft/agent-sdk/testing"
import agent from "./index"

describe("hello-world-agent", () => {
  it("has __isAgent flag", () => {
    expect(agent.__isAgent).toBe(true)
  })

  it("calls ctx.log.info with 'hello world'", async () => {
    const mockInfo = vi.fn()

    const ctx = createMockContext({
      log: { info: mockInfo },
    })

    await agent.run(ctx)

    expect(mockInfo).toHaveBeenCalledOnce()
    expect(mockInfo).toHaveBeenCalledWith("hello world")
  })

  it("returns undefined (no output)", async () => {
    const ctx = createMockContext()
    const result = await agent.run(ctx)
    expect(result).toBeUndefined()
  })
})
