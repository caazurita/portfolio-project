# Developer Portfolio

A personal portfolio website showcasing projects, professional experience, and writing. Built with TanStack Start and deployed on AWS S3.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Routing | TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI primitives + custom components |
| Content | Content Collections (type-safe markdown) |
| Language | TypeScript 5 (strict mode) |
| Deployment | AWS S3 |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero landing page with intro, skills, and featured projects |
| `/projects` | Full project grid |
| `/resume` | Work experience and education |
| `/blog` | Blog post listing |
| `/blog/$slug` | Individual blog post |
| `/contact` | Contact form (powered by Netlify Forms) |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts on [http://localhost:3000](http://localhost:3000). 

## Content

All content lives in `content/` as Markdown files with YAML frontmatter:

- `content/jobs/` — Work experience entries
- `content/education/` — Education entries  
- `content/projects/` — Project showcase entries
- `content/blog/` — Blog posts

Schemas are defined in `content-collections.ts` and validated with Zod at build time.

## Customizing

1. Replace "Carlos Alvarado" with your name in:
   - `src/components/Header.tsx`
   - `src/routes/index.tsx`
   - `src/routes/__root.tsx`
2. Update social links in `src/routes/index.tsx`
3. Replace `public/headshot-on-white.jpg` with your own photo
4. Edit content markdown files with your real experience

## Deployment

1. Create a AWS S3 Bucket (stores as static files)
2. Upload the React build
3. Enable static website hosting and set index document.
4. Add bucket policy.
5. Open your web site.
