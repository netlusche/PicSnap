# PicSnap 📸

A local, pass-the-device multiplayer **picture quiz**. The active player is shown an
image and has to tap the correct answer as fast as possible — the quicker the answer,
the more points. Built as a client-only React + Vite + TypeScript PWA.

> Architecture is modeled on the MelodyMatch music quiz, but PicSnap is a fresh,
> standalone project — images instead of audio, with its own categories and image
> sources (Wikimedia Commons, Wikipedia, and Mapillary).

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

## Categories

| Category | Entries | Image source |
|---|---|---|
| Places & Landmarks | 199 | Wikimedia Commons |
| Famous People | 239 | Wikipedia infobox portraits |
| History | 108 | Wikimedia Commons |
| Movies | 86 | Wikimedia Commons |
| Bands & Musicians | 79 | Wikimedia Commons |
| Sport | 68 | Wikimedia Commons |
| Geo-Roulette | 85 cities across all continents | Mapillary *(requires token)* |

## Features

- **Round-based categories** — all players in the same round see the same category; categories cycle evenly across rounds
- **Liked Images** — heart-button on the result screen saves images (max 40); persists across games; collapsible list on the start screen with lightbox zoom
- **Lightbox** — tap any played or liked image thumbnail to view full-size with a ✕ close button
- **Category enforcement** — no category pre-selected; Start Game is disabled until at least one is chosen
- **15 visual themes** with matching canvas background animations (including the PicSnap-branded Default theme)
- **EN / DE** localization
- **PWA** — installable on iOS and Android; app icon, splash, OG image for WhatsApp/social sharing

## Status

All features complete and playable. v0.2.6.
