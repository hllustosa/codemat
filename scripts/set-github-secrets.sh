#!/usr/bin/env bash
# Uploads Firebase deploy secrets to GitHub Actions for this repo.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GH="${ROOT}/.tools/bin/gh"
command -v gh >/dev/null 2>&1 && GH="$(command -v gh)"
test -x "$GH" || { echo "Install GitHub CLI (gh) first."; exit 1; }

cd "$ROOT"
"$GH" auth status

ENV_LOCAL="$ROOT/apps/web/.env.local"
SA="$ROOT/backend/credentials/service-account.json"
test -f "$ENV_LOCAL" || { echo "Missing $ENV_LOCAL"; exit 1; }
test -f "$SA" || { echo "Missing $SA"; exit 1; }

get() { grep -E "^$1=" "$ENV_LOCAL" | head -1 | cut -d= -f2-; }

"$GH" secret set FIREBASE_SERVICE_ACCOUNT < "$SA"
"$GH" secret set NEXT_PUBLIC_FIREBASE_API_KEY -b "$(get NEXT_PUBLIC_FIREBASE_API_KEY)"
"$GH" secret set NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN -b "$(get NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN)"
"$GH" secret set NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET -b "$(get NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET)"
"$GH" secret set NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID -b "$(get NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID)"
"$GH" secret set NEXT_PUBLIC_FIREBASE_APP_ID -b "$(get NEXT_PUBLIC_FIREBASE_APP_ID)"
"$GH" secret set NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID -b "$(get NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID)"

echo "Done. Secrets now set:"
"$GH" secret list
