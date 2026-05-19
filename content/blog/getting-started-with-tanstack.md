---
title: "Getting Started with TanStack Start"
date: "2026-01-15"
summary: "TanStack Start brings full-stack superpowers to TanStack Router. This post walks through setting up a new project, defining server functions, and deploying to Netlify in under an hour."
tags: ["TanStack", "React", "TypeScript", "Netlify"]
author: "Alex Johnson"
---

TanStack Start is the full-stack framework built on top of TanStack Router, one of the most capable client-side routers in the React ecosystem. Unlike Next.js or Remix, Start leans into type-safe routing from day one — every route param, search param, and loader return type is fully inferred.

## Setting Up a Project

```bash
npm create tanstack@latest
```

Choose the **Start** template and you're off. The scaffolded project gives you:

- File-based routing under `src/routes/`
- Vite as the build tool
- TypeScript in strict mode

## Server Functions

Server functions are the killer feature. Define a function with `createServerFn`, and you can call it directly from a component — no API route boilerplate needed:

```ts
import { createServerFn } from '@tanstack/react-start'

export const getUser = createServerFn().handler(async () => {
  return db.query.users.findFirst()
})
```

The framework handles serialization and type safety end to end.

## Deploying to Netlify

Add the Netlify plugin to your `vite.config.ts`:

```ts
import netlify from '@netlify/vite-plugin-tanstack-start'

export default defineConfig({
  plugins: [netlify()],
})
```

Push to GitHub, connect the repo in Netlify, and your full-stack app is live. Edge functions, background functions, and Netlify Blobs all work out of the box.

TanStack Start is still maturing but is already production-ready for the use cases I've thrown at it. Give it a try.
