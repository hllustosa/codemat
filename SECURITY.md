# Security Policy

## Supported versions

Security fixes are applied on the `main` branch of CodeMat.

## Reporting a vulnerability

Please **do not** open a public GitHub issue for security problems.

Email the maintainer (see the GitHub profile linked from the live site
[codematbr.web.app](https://codematbr.web.app)) with:

- A short description of the issue
- Steps to reproduce
- Impact assessment if known

We will acknowledge receipt when possible and work on a fix before any public disclosure.

## Secrets

Never commit Firebase Admin / Google Cloud service account JSON files, `.env` files,
or private keys. Use `backend/credentials/` locally (gitignored) and GitHub Actions secrets for CI/CD.
