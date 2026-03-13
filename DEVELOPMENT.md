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
@tiny-design/tokens   →   @tiny-design/react   →   @tiny-design/docs
```

Each package's build step:

| Package | Build Steps |
|---------|-------------|
| **@tiny-design/tokens** | `node scripts/build.js` — sass compiles `scss/base.scss` into `css/base.css` |
| **@tiny-design/react** | `tsdown` (TS to JS) → `build-styles.js` (copies base.css from tokens, compiles 78 component SCSS files) → `inject-style-imports.js` (adds CSS imports into JS entry files) |
| **@tiny-design/docs** | `vite build` |

## CI (GitHub Actions)

Three workflows triggered on push/PR to `master`:

1. **CI** (`ci.yml`) — install → lint → build → test with coverage
2. **Release** (`release.yml`) — uses `changesets/action` to either create a "Version Packages" PR or publish to npm. The docs package is excluded from publishing.
3. **Deploy Site** (`deploy-site.yml`) — builds docs with `--base /tiny-design/`, deploys to GitHub Pages with SPA routing support.

## Release Flow

All three packages use **fixed versioning** — they always share the same version number. A changeset touching any package bumps all three together.

1. Add a changeset: `pnpm changeset`
2. Merge to `master`
3. The Release workflow creates a "Version Packages" PR (bumps versions, updates changelogs)
4. Merging that PR triggers publish to npm and site deploy
