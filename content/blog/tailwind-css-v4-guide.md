---
title: "Tailwind CSS v4: What Changed and Why It Matters"
date: "2026-02-01"
summary: "Tailwind v4 ditches the config file, embraces CSS-native features, and ships a new Vite plugin that's 10x faster. Here's what you need to know before upgrading."
tags: ["CSS", "Tailwind", "Frontend", "Design"]
author: "Alex Johnson"
---

Tailwind CSS v4 is a full rewrite. The team rebuilt the engine in Rust (via Lightning CSS) and rethought the configuration model from scratch. The result is dramatically faster builds and a leaner setup — but there are real breaking changes.

## No More `tailwind.config.js`

The biggest shift: configuration moves into your CSS file. Instead of a JS config object, you define your theme with CSS custom properties:

```css
@import "tailwindcss";

@theme {
  --color-brand: oklch(0.62 0.22 256);
  --font-display: "Cal Sans", sans-serif;
  --radius-card: 1rem;
}
```

This approach aligns Tailwind with modern CSS tooling and makes the output more predictable — what you write in CSS is what ends up in the bundle.

## Automatic Content Detection

The `content` array is gone. Tailwind v4 uses your Vite (or PostCSS) config to detect which files to scan. For most projects, zero configuration is required.

## CSS Variables Everywhere

Every design token is now a CSS custom property, which means you can use them in arbitrary CSS without `theme()` calls:

```css
.my-element {
  background: var(--color-brand);
  border-radius: var(--radius-card);
}
```

## Performance

On a large project (8,000+ classes used), cold build times dropped from ~4s to ~400ms. Hot reload is near-instant.

## Upgrading

The official upgrade guide is thorough. The biggest breaking changes to watch for:

1. `@layer utilities` and `@layer components` are still supported but some plugin APIs changed
2. Some color utilities changed names (e.g., `bg-opacity-*` is now a modifier: `bg-black/50`)
3. The PostCSS plugin is now separate from the Vite plugin

Run the codemod first, then check your build output. In my experience, most projects need only minor fixups.
