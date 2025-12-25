# Website

React + Vite + Hono + Tailwind + Cloudflare Workers

## Scripts
- `bun run check` — Run before committing to verify types, build, and deployment config
- `bun run cf-typegen` — Run after modifying Cloudflare bindings to regenerate types

## Quick Start

```bash
# Install dependencies
bun install

# Generate types and run migrations
bun cf-typegen
bun db:generate
bun db:migrate

# Start dev server
bun dev
```

## shadcn/ui

Add components you need, customize them however you want.

```bash
bun x shadcn@latest add button card dialog
```

Components land in `src/web/components/ui/`, import with `@/components/ui/button`.

```tsx
import { Button } from "@/components/ui/button"

<Button variant="outline">Click me</Button>
```

## Routing

Client-side routing uses [wouter](https://github.com/molefrog/wouter). Add routes in `src/web/app.tsx`:

```tsx
import { Route, Switch } from "wouter";

<Switch>
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
</Switch>
```

## Database

Uses [Drizzle ORM](https://orm.drizzle.team/) with Cloudflare D1.

```bash
bun db:generate       # Generate migrations from schema
bun db:migrate        # Apply migrations locally
```

Schema is in `src/api/database/schema.ts`, migrations in `src/api/migrations/`.

## Coding Style

- Functional programming preferred (use `const`, avoid `let`)
- Extract types into separate interfaces
- No explicit return types unless necessary
- Prefer early returns to reduce nesting
- Use switch statements or key-value maps instead of nested if statements
- Keep code simple—minimize complex state and prop drilling
- Use existing libraries over custom implementations
- Prefer built-in Node modules over custom utils
- Write tests for complex functionality