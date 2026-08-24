.PHONY: install run run-web run-api lint test build seed clean help

# Load repo-root .env for make targets (seed, etc.). Never commit .env.
ifneq (,$(wildcard $(CURDIR)/.env))
  include $(CURDIR)/.env
  export
endif

# Resolve relative GOOGLE_APPLICATION_CREDENTIALS against the repo root
# (npm workspace scripts may run with cwd = apps/functions).
CRED_PATH := $(GOOGLE_APPLICATION_CREDENTIALS)
ifneq ($(CRED_PATH),)
  ifeq ($(filter /%,$(CRED_PATH)),)
    export GOOGLE_APPLICATION_CREDENTIALS := $(CURDIR)/$(patsubst ./%,%,$(CRED_PATH))
  endif
endif

help:
	@echo "CodeMat targets:"
	@echo "  make install  - Install dependencies (web + functions)"
	@echo "  make run      - Start Next.js frontend (dev)"
	@echo "  make run-web  - Alias for make run"
	@echo "  make run-api  - Start Firebase Functions emulator"
	@echo "  make lint     - Lint frontend and functions"
	@echo "  make test     - Run unit tests"
	@echo "  make build    - Build content + functions + web"
	@echo "  make seed     - Seed Firestore (reads GOOGLE_APPLICATION_CREDENTIALS from .env)"
	@echo "  make clean    - Remove build artifacts"

install:
	npm install
	npm run build:content

run run-web:
	npm run build:content
	npm run dev -w apps/web

run-api:
	npm run build:content
	cd apps/functions && npm run build && cd ../.. && npx firebase emulators:start --only functions,firestore --config firebase.json

lint:
	npm run lint

test:
	npm run test

build:
	npm run build

seed:
	@if [ -z "$(GOOGLE_APPLICATION_CREDENTIALS)" ]; then \
	  echo "Missing GOOGLE_APPLICATION_CREDENTIALS. Copy .env.example to .env and set the path."; \
	  exit 1; \
	fi
	@if [ ! -f "$(GOOGLE_APPLICATION_CREDENTIALS)" ]; then \
	  echo "Credentials file not found: $(GOOGLE_APPLICATION_CREDENTIALS)"; \
	  echo "Place your service-account JSON at backend/credentials/service-account.json"; \
	  exit 1; \
	fi
	npm run seed

clean:
	rm -rf apps/web/.next apps/functions/lib apps/functions/data/public apps/functions/data/private-cases
	rm -rf coverage
