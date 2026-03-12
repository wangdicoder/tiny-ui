# Development Workflow

## Local Development

```bash
pnpm dev          # Start the Vite docs site
pnpm build        # Build all packages (via turborepo)
pnpm test         # Run tests across all packages
pnpm lint         # Lint all packages
pnpm lint:style   # Lint SCSS files
```

A **pre-commit hook** (husky) runs `lint-staged`, which auto-fixes SCSS via stylelint.

## Build Pipeline

Turborepo handles the dependency graph via `"dependsOn": ["^build"]`:

```
@tiny-ui/tokens   →   @tiny-ui/react   →   @tiny-ui/docs
```

Each package's build step:

| Package | Build Steps |
|---------|-------------|
| **@tiny-ui/tokens** | `node scripts/build.js` — sass compiles `scss/base.scss` into `css/base.css` |
| **@tiny-ui/react** | `tsdown` (TS to JS) → `build-styles.js` (copies base.css from tokens, compiles 78 component SCSS files) → `inject-style-imports.js` (adds CSS imports into JS entry files) |
| **@tiny-ui/docs** | `vite build` |

## CI (GitHub Actions)

Three workflows triggered on push/PR to `master`:

1. **CI** (`ci.yml`) — install → lint → build → test with coverage
2. **Release** (`release.yml`) — uses `changesets/action` to either create a "Version Packages" PR or publish to npm. The docs package is excluded from publishing.
3. **Deploy Site** (`deploy-site.yml`) — builds docs with `--base /tiny-ui/`, deploys to GitHub Pages with SPA routing support.

## Release Flow

1. Add a changeset: `pnpm changeset`
2. Merge to `master`
3. The Release workflow creates a version PR (bumps versions, updates changelogs)
4. Merging that PR triggers publish to npm and site deploy
