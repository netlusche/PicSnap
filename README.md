# PicSnap 📸

A local, pass-the-device multiplayer **picture quiz**. The active player is shown an
image and has to tap the correct answer as fast as possible — the quicker the answer,
the more points. Built as a client-only React + Vite + TypeScript PWA.

> Architecture is modeled on the MelodyMatch music quiz, but PicSnap is a fresh,
> standalone project — images instead of audio, with its own categories and image
> sources (Wikimedia Commons, Mapillary, and a curated JSON database).

## Stack

- React 18 + TypeScript
- Vite (PWA via `vite-plugin-pwa`)
- No external UI framework — plain CSS with custom properties (16 themes)
- `canvas-confetti` for the winner screen

## Getting started

```bash
npm install
cp .env.example .env   # add your VITE_MAPILLARY_TOKEN
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Environment variables

| Variable | Required for | Description |
|---|---|---|
| `VITE_MAPILLARY_TOKEN` | Geo-Roulette category | Free Mapillary API token |

## Status

Scaffolding in progress. See the build roadmap in the project brief.
