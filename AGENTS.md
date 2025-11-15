# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Build/Lint/Test Commands
- Build: `npm run build`
- Lint: `npm run lint`
- Test: `npm run test`

## Code Style Guidelines
- Use Tailwind CSS for styling with the configuration defined in `tailwind.config.js`
- Follow the TypeScript configuration defined in `tsconfig.json` and its references
- Use the `cn` utility function for class merging in `src/lib/utils.ts`

## Critical Patterns
- The `cn` utility function combines `clsx` and `tailwind-merge` for class merging