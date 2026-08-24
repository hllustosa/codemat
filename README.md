# CodeMat

[![CI](https://github.com/hllustosa/codemat/actions/workflows/ci.yml/badge.svg)](https://github.com/hllustosa/codemat/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Functions%20%2B%20Firestore-orange.svg)](https://firebase.google.com/)

**CodeMat** is the open-source name of **Code & Mat** — a free learning platform for beginners who want to practice **programming** and **mathematics** in the browser.

> Live site: [https://codematbr.web.app](https://codematbr.web.app)  
> Display brand: **Code & Mat** · Open-source project: **CodeMat** · License: **MIT**  
> Repository: [github.com/hllustosa/codemat](https://github.com/hllustosa/codemat/)

## Features

- Interactive JavaScript exercises with an in-browser runner (`input` / `output`)
- Official grading on **Cloud Functions** (returns only **right / wrong**; expected outputs stay off the client)
- Curriculum (exercises + lessons) treated as **data**, built from `legacy/` and served via Functions / Firestore
- Next.js App Router + TypeScript for SEO-friendly pages (`generateMetadata`, sitemap)
- Ant Design UI with a Comp & Mat visual identity
- Makefile + GitHub Actions for local DX and deploy to the existing Firebase project

## Architecture

```
apps/web          Next.js 15 (App Router, TypeScript, Ant Design)
apps/functions    Firebase Cloud Functions (Express API, TypeScript)
legacy/           Source curriculum used by the content build script
assets/           Reference materials (exercise solutions) — not shipped in the app
firestore.rules   Public content read; exerciseSecrets deny-all for clients
```

Grading flow:

1. Student runs code locally for feedback (example inputs only).
2. Submit sends `{ exerciseId, code }` + Firebase ID token to `POST /grade`.
3. Server loads hidden cases, re-runs the code, updates `UserStats`, responds `{ correct: boolean }`.

This is a **study** platform, not a certification / anti-cheat product.

## Quick start

```bash
# Node 18+ (20 recommended for Functions runtime)
cp .env.example .env
# Set GOOGLE_APPLICATION_CREDENTIALS (default path is fine once the JSON is in place)

# Frontend: create apps/web/.env.local with NEXT_PUBLIC_FIREBASE_* from
# Firebase console → Project settings → Your apps

make install   # npm install + build content
make run       # Next.js on http://localhost:3000
```

Optional API emulator:

```bash
make run-api
```

Point `NEXT_PUBLIC_API_BASE_URL` at the emulator URL printed by Firebase (typically  
`http://127.0.0.1:5001/codematbr/us-central1/api`).

### Makefile

| Target | Description |
|--------|-------------|
| `make install` | Install deps + build content |
| `make run` / `make run-web` | Frontend dev server |
| `make run-api` | Functions + Firestore emulators |
| `make lint` | Lint web + functions |
| `make test` | Unit tests |
| `make build` | Production build |
| `make seed` | Seed Firestore (loads `GOOGLE_APPLICATION_CREDENTIALS` from `.env`) |

## Content pipeline

```bash
npm run build:content
```

Reads `legacy/exercises` and `legacy/classes`, writes:

- `apps/functions/data/public/` — statements, catalogs, lesson HTML (**no expected outputs**)
- `apps/functions/data/private-cases/` — hidden test cases (used only by Functions; not exposed via public API)

Optional Firestore seed (Admin SDK):

```bash
# Put the JSON at backend/credentials/service-account.json and set the path in .env
make seed
# Optional: set CONTENT_SOURCE=firestore in .env so Functions read Firestore instead of local JSON
```

## Environment

- Repo-root [`.env`](.env.example) — Admin credentials for `make seed` (gitignored; copy from `.env.example`).
- `apps/web/.env.local` — Firebase web config for Next.js (gitignored).

Never commit service account JSON; keep it under `backend/credentials/` (gitignored).

## Deploy / CI

- **CI** (`.github/workflows/ci.yml`): lint, test, full build on pull requests and `main`.
- **CD — backend** (`.github/workflows/deploy.yml`): on push to `main`, deploy Functions, Firestore rules, and Storage only.
- **CD — frontend**: Firebase App Hosting GitHub integration (backend `codemat`) deploys the Next.js app on push to `main`.

Required GitHub secrets for backend deploy:

- `FIREBASE_SERVICE_ACCOUNT` — JSON key with deploy permissions (Actions secret, not in git)

App Hosting env vars for the web build live in `apphosting.yaml` (not GitHub secrets).

Default site URL: **https://codematbr.web.app**

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).  
Security reports: [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE) © Hermano Lustosa
