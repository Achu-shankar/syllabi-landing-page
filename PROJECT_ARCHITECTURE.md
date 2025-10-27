# Syllabi Landing Page - Hybrid Architecture Documentation

## Overview

This project implements a hybrid Next.js architecture that combines both App Router (Next.js 15) and Pages Router to support a landing page with integrated documentation powered by Nextra.

## Architecture Decision

Due to compatibility constraints between Next.js 15 App Router and Nextra v2 (which only supports Pages Router), this project uses a dual-router approach:

- **App Router**: Used for the main landing page (`/`)
- **Pages Router**: Used exclusively for documentation (`/docs/*`)

## Project Structure

```
syllabi-landing-page/
├── src/app/                    # App Router (Next.js 15)
│   ├── layout.tsx             # Root layout for landing page
│   ├── page.tsx               # Landing page component
│   └── globals.css            # Global styles with Nextra integration
├── pages/docs/                # Pages Router (Nextra documentation)
│   ├── _meta.json            # Nextra navigation config
│   ├── index.mdx             # Documentation home
│   └── getting-started/
│       └── index.mdx         # Getting started guide
├── src/mdx-components.tsx     # MDX component overrides for Nextra
├── theme.config.jsx          # Nextra theme configuration
├── next.config.ts            # Next.js config with Nextra wrapper
└── tailwind.config.js        # Tailwind v3 configuration
```

## Key Configuration Files

### next.config.ts
```typescript
import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

export default withNextra({
  // Add regular Next.js options here
})
```

### Dependencies
- **Next.js**: v15.3.5 (App Router support)
- **Nextra**: v2.13.4 (Pages Router only)
- **Tailwind CSS**: v3.4.0 (compatibility with Nextra v2)
- **React**: v19.0.0

### Styling Integration

The project uses a unified styling approach:
- Nextra theme styles imported in `src/app/globals.css`
- Tailwind v3 configuration includes Nextra theme paths
- CSS variables for consistent theming across both routers

## Routing Behavior

1. **Landing Page** (`/`): Served by App Router
   - File: `src/app/page.tsx`
   - Layout: `src/app/layout.tsx`

2. **Documentation** (`/docs/*`): Served by Pages Router
   - Files: `pages/docs/**/*.mdx`
   - Powered by Nextra with automatic navigation

## Benefits of This Approach

1. **Modern Features**: App Router provides latest Next.js 15 features for the landing page
2. **Documentation Excellence**: Nextra provides superior documentation experience
3. **Compatibility**: Avoids breaking changes between Next.js 15 and Nextra v2
4. **Unified Styling**: Single Tailwind configuration works across both routers

## Trade-offs

- **Complexity**: Managing two routing systems requires careful configuration
- **Bundle Size**: Both routing systems are included in the build
- **State Management**: Potential complexity when sharing state between routers

## Future Considerations

When Nextra adds full App Router support, consider migrating the documentation to App Router for a unified architecture while maintaining the same URL structure and user experience.