# Place your Firebase Admin / Google Cloud service account JSON in this folder.

This directory is gitignored except for this README.

1. Firebase console → Project settings → Service accounts → Generate new private key.
2. Save it as `service-account.json` in this folder.
3. Set the path once in the **repo-root** `.env` (see `.env.example`):

```env
GOOGLE_APPLICATION_CREDENTIALS=./backend/credentials/service-account.json
```

Then use `make seed` — the Makefile loads `.env` and resolves the path. No shell `export` needed.

Never commit private keys.
