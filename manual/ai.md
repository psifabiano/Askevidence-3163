# Setup AI Agent

We are using the [AI SDK](https://v6.ai-sdk.dev) with OpenAI-compatible endpoints for building AI agents.

## Supported Models
- `anthropic/claude-sonnet-4.5`
- `anthropic/claude-haiku-4.5`
- `anthropic/claude-opus-4.5`
- `openai/gpt-5.2`
- `openai/gpt-5-nano`
- `openai/gpt-5-mini`
- `google/gemini-3-pro-preview`
- `google/gemini-3-pro-image`
- `google/gemini-2.5-flash-image`

## Agent Config
1. Add the following agent config at `src/api/agent/index.ts` file.

```typescript
import { stepCountIs, SystemModelMessage, ToolLoopAgent } from "ai"
import dedent from 'dedent'
import { env } from "cloudflare:workers"
import { createOpenAI } from "@ai-sdk/openai"
import { calculate } from "./calculate-tool"

const openai = createOpenAI({
    baseURL: env.AI_GATEWAY_BASE_URL,
    apiKey: env.AI_GATEWAY_API_KEY
})

const INSTRUCTIONS: SystemModelMessage[] = [{
    role: "system",
    content: dedent`You are a helpful assistant. Your job is to support the user.`
}]

export const agent = new ToolLoopAgent({
    model: openai.chat("anthropic/claude-haiku-4.5"),
    instructions: INSTRUCTIONS,
    tools: {
        calculate,
    },
    stopWhen: [stepCountIs(100)]
})
```

## Tools
2. Add tools in the `src/api/agent/` directory. Below is an example calculator tool showing the full pattern including backend definition, type export, and frontend component.

**Backend Tool (`src/api/agent/calculate-tool.ts`):**
```typescript
import z from "zod"
import { evaluate } from "mathjs"
import { tool, UIToolInvocation } from "ai"

export const calculate = tool({
    description: "Calculate a mathematical expression.",
    inputSchema: z.object({
        expression: z.string().describe("The mathematical expression to calculate.")
    }),
    async execute({ expression }) {
        try {
            const result = evaluate(expression);
            return result
        } catch (error) {
            return String(error)
        }
    }
})

// Export type for frontend use
export type CalculateToolResult = UIToolInvocation<typeof calculate>
```

**Frontend Component (in chat page):**
```tsx
import type { CalculateToolResult } from "../../api/agent/calculate-tool"

function CalculateTool({ tool }: { tool: CalculateToolResult }) {
    if (tool.state !== "output-available") {
        return <div>Calculating...</div>
    }
    return (
        <div className="rounded-lg border p-4">
            <p className="font-mono">{tool.output}</p>
        </div>
    )
}
```

### Adding New Tools
- Create tool file in `src/api/agent/` with tool definition
- Export type: `export type MyToolResult = UIToolInvocation<typeof myTool>`
- Import tool in agent config and add to `tools` object
- Create frontend component to render tool output (follow `CalculateTool` pattern)
- Add case in `MessagePart` for `part.type === "tool-{toolName}"`

## API Routes
3. Add the agent routes to your API in `src/api/index.ts`:

```ts
import { agentRoutes } from './routes/agent';

app.route('/agent', agentRoutes)
```

4. Create the agent routes file at `src/api/routes/agent.ts`:

```ts
import { Hono } from "hono"
import { createAgentUIStreamResponse } from "ai"
import { agent } from '../agent'

export const agentRoutes = new Hono();

agentRoutes.post("/messages", async (c) => {
    const { messages } = await c.req.json();
    return createAgentUIStreamResponse({
        agent,
        messages,
    });
})
```

## Frontend Integration
5. Add the chat page at `src/web/pages/chat.tsx`:

```tsx
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport, type UIMessage } from "ai"
import { useState } from "react"
import type { CalculateToolResult } from "../../api/agent/calculate-tool"

function MessagePart({ part }: { part: UIMessage["parts"][number] }) {
    if (part.type === "text") {
        return <span>{part.text}</span>
    }
    // Tool parts are named "tool-{toolName}" - add cases for each tool
    if (part.type === "tool-calculate") {
        return <CalculateTool tool={part as unknown as CalculateToolResult} />
    }
    return null
}

function Chat() {
    const { messages, sendMessage, status } = useChat({
        transport: new DefaultChatTransport({ api: "/api/agent/messages" }),
    })
    const [input, setInput] = useState("")
    const isLoading = status === "streaming" || status === "submitted"

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim()) return
        sendMessage({ text: input })
        setInput("")
    }

    return (
        <div className="flex flex-col h-screen max-w-3xl mx-auto">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div key={message.id} className={message.role === "user" ? "text-right" : ""}>
                        {message.parts.map((part, i) => <MessagePart key={i} part={part} />)}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="border-t p-4 flex gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask something..."
                    className="flex-1 border rounded px-3 py-2"
                    disabled={isLoading}
                />
                <button type="submit" disabled={isLoading || !input.trim()}>Send</button>
            </form>
        </div>
    )
}

export default Chat
```