## Repo snapshot

- Framework: React + TypeScript scaffolded for Vite (see `package.json` scripts: `dev` -> `vite`, `build` -> `vite build`).
- Styling: Tailwind CSS (configured in `tailwind.config.js` and wired in `vite.config.ts` via postcss/tailwind plugin).
- Routing: `react-router-dom` with routes mounted in `src/index.tsx` and pages under `src/screens/*`.
- UI pattern: small, reusable UI primitives live under `src/components/ui` (e.g. `button.tsx`, `separator.tsx`). The app composes those via `Layout` in `src/components/Layout.tsx`.

## What to know up-front (quick commands)

- Install deps: `npm install` (project README). Use Node + npm as usual.
- Start dev server: `npm run dev` — Vite serves at http://localhost:5173/ by default.
- Build for production: `npm run build`.

## Project-specific patterns and conventions

- Page structure: each screen lives in `src/screens/<Name>/` with a `index.ts` entry and the main component (e.g. `src/screens/Home/Home.tsx`). To add a page, add a folder and wire a Route in `src/index.tsx`.
- Layout and navigation: `src/components/Layout.tsx` holds header/nav/footer and composes pages. Navigation labels use a leading underscore (e.g. `_about-me`) — preserve this pattern when adding nav items.
- UI primitives: look in `src/components/ui/`. Components often accept `asChild` (see `Button` usage) to render element wrappers like `<Link>` or `<a>`.
- Class merging: use the helper `cn` in `src/lib/utils.ts` (it wraps `clsx` + `tailwind-merge`) to combine Tailwind class names safely.

## Tooling and config notes

- Aliasing: package.json contains an `alias` mapping: `@/*` → `./src/components/ui/$1` — be mindful when importing (the project generator created this; verify path resolver if you change tsconfig/IDE settings).
- Tailwind: content paths include `src/**/*.{html,js,ts,jsx,tsx}`. Add new component file globs if you deviate from this pattern.
- Dark mode: enabled via class strategy (`darkMode: ['class']`). Follow existing CSS variable-based colors in `tailwind.config.js`.

## Examples to reference for common edits

- Add a new route/page: copy `src/screens/Home` folder structure and add a `<Route path="/new" element={<Layout><New /></Layout>} />` entry into `src/index.tsx`.
- Create a UI button: follow `src/components/ui/button.tsx` API (supports `variant="ghost"`, `asChild`, and className merging with `cn`). Use `cn` to conditionally apply active styles.
- Use assets: images referenced in Layout are in the `public/` root (e.g. `/frame.svg`). Place static assets there.

## Things the agent should avoid or check before changing

- Don't change the Vite `base` or `css.postcss` wiring unless you also update `tailwind.config.js` and postcss chain — styling will break otherwise.
- Be cautious with imports that rely on the `@/*` alias; if you change folder names update path mappings in tsconfig / vite if necessary.
- There are no test scripts in `package.json`. If you add tests, also add `test`/`lint` scripts and document how to run them.

## Where to look for more context

- Root README.md — basic setup steps and dev commands.
- `src/index.tsx` — canonical routing and composition pattern.
- `src/components/Layout.tsx` — header/nav/footer conventions and nav item examples.
- `src/components/ui/*` — canonical small components to reuse style/props patterns.
- `src/lib/utils.ts` — className merging helper used across components.

If any section is unclear or you'd like the agent to favor a different convention (for example a different aliasing scheme or explicit test setup), tell me which area to expand and I'll update these instructions.
