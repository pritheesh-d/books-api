# Books API

A Node.js + Express + MongoDB CRUD API for managing a reading list across three environments (`staging`, `preprod`, `prod`).

## Running Environments
- `npm run staging` (port 3000, `books_staging`)
- `npm run preprod` (port 4000, `books_preprod`)
- `npm run prod` (port 5000, `books_prod`)

## Endpoints (`/books`)
- `POST /books` — Add a book
- `GET /books` — List all books
- `GET /books/:id` — Get one book
- `PUT /books/:id` — Update a book
- `DELETE /books/:id` — Delete a book

## Collaborative Workflow
- **Git Flow:** Features branch from `develop`, merge via PR, and release to `main` via `release/1.0.0`.
- **Local Guardrails:** Husky + Commitlint enforce Conventional Commits.
- **GitHub Ruleset:** `main` requires Pull Requests, up-to-date branches, and passing `quality` and `build-and-test` CI checks.