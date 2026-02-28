# Spencesa.co.za

Content-first Next.js 14 blog using App Router + Tailwind.

## Route map

- `/` blog index (hero + Spline + pinned + latest posts)
- `/<slug>` content page/post from `content/posts/*.mdx`
- `/tag/<tag>` tag archive
- `/blogs` → redirect to `/`
- `/blogs/[slug]` → redirect to `/<slug>`

## Content structure

- `content/posts/*.mdx` for all posts/pages.
- `content/data/projects.json` for project data.
- `content/data/skills.json` for skills data.

### Frontmatter schema

```yaml
title: string
date: "YYYY-MM-DD"
description: string
tags: string[]
type: "post" | "page"
pinned: boolean
navLabel: string
```

## Add a new post

1. Create `content/posts/my-post.mdx`.
2. Add required frontmatter.
3. Write content.
4. It appears automatically on the homepage if `type: "post"`.

## Sanity one-time export (optional)

If you still want to export directly from your Sanity dataset before fully retiring it:

```bash
SANITY_API_READ_TOKEN=<token> npx tsx scripts/export-sanity-to-local.ts
```

The script writes:

- `content/data/projects.json`
- `content/data/skills.json`

> If you don't have local Sanity access configured, keep the committed JSON files and continue without Sanity.

## Local development

```bash
npm run dev
npm run build
```
