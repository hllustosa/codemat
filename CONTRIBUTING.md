# Contributing to CodeMat

Thanks for your interest in improving CodeMat (Comp & Mat).

## Development setup

1. Use Node.js 18+ (20+ recommended).
2. Copy `.env.example` to `apps/web/.env.local` and fill Firebase web config values.
3. Run:

```bash
make install
make run
```

API emulator (optional):

```bash
make run-api
```

## Workflow

1. Fork and create a branch (`feature/...` or `fix/...`).
2. Keep changes focused; prefer small PRs.
3. Run `make lint`, `make test`, and `make build` before opening a PR.
4. Describe *why* the change is needed in the PR body.

## Content

Curriculum lives as data (built into `apps/functions/data/` and optionally seeded to Firestore).

- Do not put expected exercise outputs in the Next.js app.
- Add or edit exercises under `legacy/exercises/` and run `make build` / seed, or extend the content build script.
- Lesson bodies should be Markdown/HTML in the content pipeline, not React components in `public/`.

## Code style

- TypeScript for new code in `apps/web` and `apps/functions`.
- Prefer clear names and small modules over clever abstractions.
- Ant Design for UI; keep accessibility in mind (labels, keyboard use).

## License

By contributing, you agree that your contributions are licensed under the MIT License.
