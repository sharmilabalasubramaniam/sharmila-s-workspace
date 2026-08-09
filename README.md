# Lumora Studio

Premium freelance website for **Sharmila Balasubramaniam** — AI & Data Science Enthusiast and Freelance Web Developer.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React, React Hook Form, and Zod.

## Getting started

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/           Next.js App Router pages and layouts
  components/    Reusable UI components
  data/          Editable data files (site config, projects, services, skills, journey)
  lib/           Utilities
  styles/        Global CSS (Tailwind layers)
public/          Static assets (favicon, robots.txt, og image)
```

## Before deploying

1. Replace all `TODO_ADD_*` placeholders in `src/data/site.ts` with your real details.
2. Add a social preview image at `public/og-image.png` (1200x630px).
3. Update `src/data/site.ts` `domain` field and `public/robots.txt` with your real domain.

## Deployment

Deploy to Vercel by importing this repository. No environment variables required for v1.
