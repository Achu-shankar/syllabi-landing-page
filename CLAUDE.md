# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
npm run dev          # Start Next.js development server on http://localhost:3000

# Build and production
npm run build        # Build the application for production
npm run start        # Start production server

# Code quality
npm run lint         # Run ESLint for code quality checks
```

## Architecture Overview

This project uses a **hybrid Next.js architecture** combining App Router and Pages Router:

- **App Router** (`src/app/`): Landing page with Next.js 15 features
- **Pages Router** (`pages/docs/`): Documentation powered by Nextra v2

### Key Architecture Points

1. **Dual Router System**: App Router serves `/` while Pages Router handles `/docs/*`
2. **Nextra Integration**: Documentation uses Nextra theme with MDX files
3. **Unified Styling**: Single Tailwind config works across both routers
4. **shadcn/ui Ready**: Components.json configured for shadcn/ui components

## Project Structure

```
src/app/                    # App Router (landing page)
├── layout.tsx             # Root layout
├── page.tsx               # Landing page
└── globals.css            # Global styles + Nextra integration

pages/docs/                # Pages Router (documentation)
├── _meta.json            # Nextra navigation config
└── **/*.mdx              # Documentation pages

src/lib/utils.ts           # Utility functions (cn helper)
src/mdx-components.tsx     # MDX component overrides for Nextra
theme.config.jsx          # Nextra theme configuration
```

## Key Configuration Files

- **next.config.ts**: Nextra wrapper around Next.js config
- **tailwind.config.js**: Includes Nextra theme paths and shadcn/ui variables
- **components.json**: shadcn/ui configuration with path aliases
- **theme.config.jsx**: Nextra theme settings

## Technology Stack

- Next.js 15.3.5 (App Router + Pages Router)
- React 19
- Nextra 2.13.4 (documentation)
- Tailwind CSS 3.4.0
- TypeScript 5
- shadcn/ui components (configured)

## Working with Documentation

Documentation files are in `pages/docs/` as MDX files. Use `_meta.json` files to configure navigation structure. The Nextra theme handles automatic routing and navigation generation.

## Styling Approach

- CSS variables for theming (both App and Pages Router)
- Tailwind utility classes
- Nextra theme styles imported in globals.css
- shadcn/ui component library support

## Important Notes

- Do not mix App Router patterns in `pages/docs/` (Nextra compatibility)
- MDX components can be customized in `src/mdx-components.tsx`
- Both routing systems share the same Tailwind configuration
- Use `cn()` utility from `src/lib/utils.ts` for conditional classes