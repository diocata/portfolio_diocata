# AGENTS.md

## Build/Lint/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run lint` - Run ESLint
- No test framework configured yet. To add: `npm install -D jest @testing-library/react`

## Code Style Guidelines
- **TypeScript**: Strict mode enabled. Use explicit types for function params and exports.
- **Imports**: Use `@/*` alias for src/ imports (e.g., `import { Component } from "@/components/Component"`).
- **Components**: Use function declarations (`export default function ComponentName()`), not arrow functions.
- **Formatting**: 2-space indentation. Use Tailwind CSS for styling (no CSS modules).
- **Naming**: PascalCase for components, camelCase for functions/variables, kebab-case for files.
- **React**: Use Next.js App Router conventions. Server components by default; add `"use client"` only when needed.
- **Error Handling**: Use try/catch for async operations. Leverage Next.js error boundaries.
- **Props**: Define prop types inline with `Readonly<{}>` wrapper for component props.
- **Images**: Use `next/image` for all images. Use `next/font` for fonts.
