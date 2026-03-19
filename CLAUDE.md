# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

This is a collection of standalone, single-file HTML apps — no build system, no dependencies to install, no compilation step. Each app is fully self-contained with inline CSS and JavaScript.

| File | Purpose |
|------|---------|
| `Portfolio/EngineeringPortfolio.html` | Static personal portfolio site |
| `Job Searcher/JobSearcher.html` | Kanban-style job application tracker with AI analysis |
| `Recipe Manager/RecipeManager.html` | Personal recipe manager with favorites and filters |

## Running

Open any `.html` file directly in a browser. No server required.

## Storage abstraction

`Job Searcher` and `Recipe Manager` use `window.storage` (a `{ get(key), set(key, value) }` async API) rather than `localStorage` directly. This object is expected to be injected by the host environment at runtime (e.g. a native shell). If running standalone in a browser without that injection, storage calls will fail silently or throw.

## External dependencies (CDN)

- **SortableJS** `1.15.0` — drag-and-drop in Job Searcher and Recipe Manager
- **Google Fonts** — each app uses its own font pairing (DM Mono + Playfair Display, IBM Plex Mono + IBM Plex Sans, Lora + DM Sans)

## Job Searcher — key details

- AI analysis powered by **Gemini API** (`gemini-2.0-flash` / `gemini-1.5-flash` fallback)
- Gemini API key stored in `sessionStorage` under `ek-scout-gemini` — must be re-entered each browser session
- App state persisted under key `ek-hq-v5` via `window.storage`
- Dark theme with CSS custom properties defined in `:root`

## Design conventions

- All three apps use CSS custom properties (`:root` variables) for theming — edit colors there, not inline
- Styles are minified/compact in Portfolio and Job Searcher; expanded in Recipe Manager
- No JavaScript frameworks — vanilla JS only
