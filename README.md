# bullybear — RedwoodJS workspace

This repository has a **nested RedwoodJS application** under [`bullybear/`](bullybear/), not at the repository root. The previous root README did not identify the actual source.

## Navigate the app

The nested project contains `api/` and `web/` workspaces, `redwood.toml`, a `package.json`/Yarn lockfile, GraphQL configuration, Jest configuration, and separate environment templates. See the [nested RedwoodJS README](bullybear/README.md) for the original framework instructions.

**Run commands belong inside `bullybear/`**, not at the root. The nested README describes a historical RedwoodJS/Node/Yarn version range; verify the pinned dependency/tool versions before attempting installation. Do not assume the current RedwoodJS CLI is compatible with this checkout or that its APIs are available.

## Security and operations

Keep secrets in ignored local environment files or a managed secret provider, not in `.env.defaults` or `.env.example`. Review Prisma/database migration behavior, auth resolvers, seed data, and GraphQL authorization before running migrations or exposing endpoints. Use disposable development data.

**Status:** source-backed repository index; dependencies, tests, database migrations, and deployment were not executed for this update.
