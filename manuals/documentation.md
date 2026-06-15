# PicSnap — System Documentation

## Table of Contents

1. [Overview](#1-overview)
2. [Tech Stack & Project Structure](#2-tech-stack--project-structure)
3. [State Management](#3-state-management)
4. [Game Flow](#4-game-flow)
5. [Scoring](#5-scoring)
6. [Image Sources & Pool Building](#6-image-sources--pool-building)
7. [Data Layer](#7-data-layer)
8. [Caching](#8-caching)
9. [Components](#9-components)
10. [Themes & Canvas Animations](#10-themes--canvas-animations)
11. [Localization](#11-localization)
12. [PWA](#12-pwa)
13. [Build & Deployment](#13-build--deployment)
14. [Known Design Decisions & Constraints](#14-known-design-decisions--constraints)

---

## 1. Overview

PicSnap is a **local, pass-the-device multiplayer picture quiz**. One device is shared between 2–6 players. The active player sees an image and taps the correct answer as fast as possible — speed determines points. No account, no backend, no server required.

The app is a pure **static single-page application**: all data comes from public APIs called directly from the browser (Wikimedia Commons, Wikipedia, Mapillary). All category entries are curated TypeScript arrays bundled with the app; no external database is required.

Architecture is modeled on **MelodyMatch** (music quiz), but PicSnap is a fully independent project with its own category system, image-fetching pipeline, and quiz UX.

---

## 2. Tech Stack & Project Structure

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Styling | Pure CSS (`src/styles.css`) — no CSS framework |
| Icons | lucide-react |
| Confetti | canvas-confetti |
| State | React `useReducer` + Context |
| Persistence | `localStorage` (debounced, 300 ms) |
| Image sources | Wikimedia Commons, Wikipedia pageimages API, Mapillary Graph API |
| PWA | vite-plugin-pwa + Workbox |

### Directory Structure

```
src/
├── App.tsx                    # Root component, phase router, game footer + in-game overlays
├── main.tsx                   # React entry point
├── styles.css                 # Global styles, 16 themes, animations
├── vite-env.d.ts              # TypeScript: VITE_MAPILLARY_TOKEN
├── types/
│   └── index.ts               # Shared types (QuizItem, Player, GameState, …)
├── state/
│   ├── GameContext.tsx         # Context provider, localStorage sync
│   └── gameReducer.ts         # Pure reducer + initialState + GameAction union
├── services/
│   ├── imageFetcher.ts         # Pool builder: buildImagePool(), buildForCategory()
│   ├── wikimedia.ts            # Wikimedia Commons API (gcmcontinue pagination)
│   ├── wikipedia.ts            # Wikipedia pageimages batch API (lead portraits)
│   ├── mapillary.ts            # Mapillary Graph API (cursor-based pagination)
│   └── cache.ts                # Two-tier cache (memory Map + localStorage, 24h TTL)
├── data/
│   ├── categories.ts           # 7 category definitions (id, emoji, keys, source)
│   ├── people.ts               # 239 famous-person entries
│   ├── places.ts               # 199 landmark entries
│   ├── historyItems.ts         # 108 historical-subject entries
│   ├── bands.ts                # 79 band/musician entries
│   ├── movies.ts               # 86 film entries
│   ├── sports.ts               # 68 athlete entries
│   └── cities.ts               # 85 city bounding boxes for Geo-Roulette (all continents)
├── components/
│   ├── SetupScreen.tsx
│   ├── CategoryScreen.tsx      # Category picker + pool fetch + validation
│   ├── PassDeviceScreen.tsx
│   ├── QuizScreen.tsx          # Timer + question + answer input
│   ├── TurnResultScreen.tsx
│   ├── FinalResultsScreen.tsx
│   └── BackgroundEffects.tsx   # 14 canvas animations (rendered outside transforms)
└── utils/
    ├── scoring.ts              # Speed-scoring formula
    └── arrayUtils.ts           # Fisher-Yates shuffle
```

---

## 3. State Management

All game state lives in a single `GameState` managed by `useReducer`. The context is provided at the root via `GameContext.tsx`, which also handles persistence.

### Key State Fields

| Field | Type | Description |
|---|---|---|
| `phase` | `GamePhase` | Current screen (see Game Flow) |
| `players` | `Player[]` | Name + accumulated score per player |
| `currentPlayerIndex` | `number` | Index into `players` |
| `pool` | `QuizItem[]` | Pre-fetched, shuffled image pool |
| `poolIndex` | `number` | Pointer into the pool for the current turn |
| `history` | `RoundResult[]` | Rounds already played (for final results screen) |
| `likedItems` | `RoundResult[]` | Images the player liked; persists across PLAY_AGAIN and RESET_GAME |
| `lang` | `'en' \| 'de'` | UI + answer language |
| `theme` | `ThemeId` | One of 16 visual themes |
| `selectedCategories` | `CategoryId[]` | Categories chosen for this game |

### Actions

| Action | Effect |
|---|---|
| `SET_THEME` | Switch visual theme |
| `SET_LANG` | Switch language |
| `CONTINUE_TO_CATEGORIES` | Advance from setup to category selection |
| `SET_POOL` | Store fetched image pool, advance to game |
| `START_GAME` | Transition to first turn |
| `BEGIN_TURN` | Advance `currentPlayerIndex` |
| `END_TURN` | Add points, push round to history |
| `NEXT_TURN` | Advance `poolIndex`, transition to next player |
| `TOGGLE_LIKE` | Add/remove a `RoundResult` from `likedItems` (toggled by `item.id`) |
| `PLAY_AGAIN` | Keep players + `likedItems`, reset scores/history/pool |
| `RESET_GAME` | Reset to setup, keep `theme`, `lang`, and `likedItems` |

### Persistence

`GameContext.tsx` saves state to `localStorage` on every change (debounced 300 ms). On load it restores the last state, so a page refresh does not lose the game.

---

## 4. Game Flow

```
SETUP
  ↓  (player names, round count, theme, language)
CATEGORY_SELECTION
  ↓  (pool fetch + validation warning if pool too small)
PASS_DEVICE  (→ active player picks up device)
  ↓
QUIZ
  ├─ 3-2-1 countdown
  ├─ Primary question (name / landmark / person)
  └─ Secondary question (country / era / known-for) if available
  ↓
TURN_RESULT  (points awarded, correct answer shown)
  ↓
  ├─ More turns? → PASS_DEVICE
  └─ Final round done? → FINAL_RESULTS
                          ↓
                       PLAY_AGAIN → CATEGORY_SELECTION (players kept, scores reset)
                       RESET_GAME → SETUP
```

Each player plays one turn per round. A "turn" consumes one `QuizItem` from the pool.

---

## 5. Scoring

Defined in `src/utils/scoring.ts`.

- **1000 points** for answering within 3 seconds
- **Linear decay** from 1000 → 0 between 3 s and 30 s
- **0 points** if time runs out (30 s) or wrong answer
- Secondary question (if correct): **+200 points**, no time bonus

Formula:
```ts
const MAX_POINTS = 1000;
const MIN_TIME = 3;    // seconds — full points if answered within this
const MAX_TIME = 30;   // seconds — zero points at or after this

function scoreForTime(elapsedSeconds: number): number {
  if (elapsedSeconds <= MIN_TIME) return MAX_POINTS;
  if (elapsedSeconds >= MAX_TIME) return 0;
  return Math.round(MAX_POINTS * (MAX_TIME - elapsedSeconds) / (MAX_TIME - MIN_TIME));
}
```

---

## 6. Image Sources & Pool Building

All image fetching is coordinated by `src/services/imageFetcher.ts`.

### Pool Size Formula

```ts
Math.max(200, players * rounds * 2)
```

The ×2 factor buffers for load failures, deduplication, and distractors. Minimum 200 ensures even short games have variety.

### Per-Category Builders

| Category | Source | Builder |
|---|---|---|
| `places` | Wikimedia Commons | `buildWikimedia(PLACES, …)` |
| `history` | Wikimedia Commons | `buildWikimedia(HISTORY, …)` |
| `bands` | Wikimedia Commons | `buildWikimedia(BANDS, …)` |
| `movies` | Wikimedia Commons | `buildWikimedia(MOVIES, …)` |
| `sport` | Wikimedia Commons | `buildWikimedia(SPORTS, …)` |
| `people` | Wikipedia pageimages API | `buildPeople(lang)` |
| `geo_roulette` | Mapillary Graph API | `buildGeoRoulette(target, lang)` |

### NON_PHOTO Filter

Applied to Wikimedia Commons results to drop maps, diagrams, coins, signatures, logos etc. before adding images to the pool:

```ts
const NON_PHOTO = /\b(map|karte|diagram|plan|grundriss|chart|graph|logo|wappen|
  coin|münze|stamp|banknote|signature|signatur|document|urkunde|
  reconstruction|schema|drawing|zeichnung|engraving|sketch|inscription)\b/i;
```

### Per-Category Distractors

Distractors (wrong answers shown alongside the correct one) are drawn only from answers within the **same category**. A places image never shows a person's name as a wrong answer. `withDistractors()` builds per-category answer pools and attaches 3 distractors per question.

### QuizItem Interface

```ts
interface QuizItem {
  id: string;           // 'category:source-page-title'
  category: CategoryId;
  imageUrl: string;
  answers: {
    primary: string;    // e.g. landmark name, person name
    secondary?: string; // e.g. country, era, known-for
  };
  distractors: {
    primary: string[];
    secondary: string[];
  };
  hint?: string;        // shown on PassDevice screen (same as secondary)
}
```

---

## 7. Data Layer

### `src/data/people.ts`

239 entries: `{ name, knownFor: { en, de } }`. `name` doubles as the Wikipedia article title for the lead-image fetch. Covers politicians, scientists, artists, musicians, actors/directors, writers/philosophers, athletes, explorers, business figures.

### `src/data/places.ts`

199 entries: `{ category, name, country: { en, de } }`. `category` is a Wikimedia Commons category title (without "Category:" prefix). Covers worldwide landmarks, natural wonders, UNESCO sites.

### `src/data/historyItems.ts`

108 entries: `{ category, name, era: { en, de } }`. `category` is a Wikimedia Commons category title. Covers prehistory, ancient Egypt, antiquity (Greece, Rome, Near East), Middle Ages, early modern, 18th–20th century.

### `src/data/bands.ts`

79 entries: `{ name, category, genre: { en, de } }`. `category` is a Wikimedia Commons category title — band/artist categories contain concert photos, press shots, and live-performance images. Covers classic rock, metal, grunge, punk/new wave, electronic, pop, hip-hop, soul, jazz, and K-pop.

### `src/data/movies.ts`

86 entries: `{ title, category }`. `category` is a Wikimedia Commons category title. Covers silent era, Disney animation classics, and films from the 1930s through the 1990s.

### `src/data/sports.ts`

68 entries: `{ name, category, country: { en, de } }`. `category` is a Wikimedia Commons category title — athlete categories contain action shots, press photos, and award ceremonies. Covers football, basketball, tennis, athletics, boxing, swimming, gymnastics, Formula One, cycling, golf, and more.

### `src/data/categories.ts`

Defines 7 categories: `places`, `geo_roulette`, `people`, `bands`, `movies`, `sport`, `history`. Each has `id`, `emoji`, `nameKey` (i18n key), `questionKeys`, `source` (`wikimedia | mapillary | wikipedia`).

### `src/data/cities.ts`

85 city bounding boxes (`bbox: [minLng, minLat, maxLng, maxLat]`) for Mapillary Geo-Roulette queries. Covers Europe (30), Asia (19), Americas (18), Africa (8), Middle East (5), Oceania (5). Each bbox is ~0.003° × 0.003° (~300 m) around a well-covered city center.

---

## 8. Caching

`src/services/cache.ts` provides a two-tier cache:

- **Memory tier**: plain JS `Map<string, {value, expiresAt}>` — zero latency, cleared on page reload
- **Persistence tier**: `localStorage` — survives reloads, 24 h default TTL

API: `cacheGet<T>(key, ttl?)` / `cacheSet<T>(key, value, ttl?)`.

Wikipedia lead images are cached per article title (`wpimg:{title}`). Wikimedia Commons results per category (`wmc:{category}`).

---

## 9. Components

| Component / module | Responsibility |
|---|---|
| `SetupScreen` | Player names, round count, theme/language picker; collapsible "Liked ❤️" section with lightbox; app footer with API credits + version |
| `CategoryScreen` | Category selection — none pre-selected, Start Game disabled until ≥1 chosen; triggers pool fetch; shows warning if pool too small |
| `PassDeviceScreen` | Hand-off screen — shows active player name, blurred until "Begin Turn" tapped |
| `QuizScreen` | 3-2-1 countdown → image display → primary question → secondary question; dispatches `END_TURN` with score |
| `TurnResultScreen` | Shows correct answer, points earned, updated leaderboard; like-button (❤️) on the revealed image |
| `FinalResultsScreen` | Trophy, winner, leaderboard, played-image history with like-buttons and lightbox zoom; cannon confetti |
| `BackgroundEffects` | 14 canvas animations; rendered **outside** any CSS-transformed ancestor to keep `position:fixed` anchored correctly |
| `App.tsx` (`MainApp`) | Game footer bar (3 pill buttons: Selected categories, Score, Start over) + three modal overlays. Visible only during PASS_DEVICE / QUIZ / TURN_RESULT phases. |

### BackgroundEffects Placement

`BackgroundEffects` must be a **sibling** of the main container in a React fragment (`<>…</>`), never nested inside a `div` with `transform`, `perspective`, `filter`, or `will-change`. CSS transforms create a new containing block for `position:fixed` elements, which offsets the canvas from the viewport origin.

---

## 10. Themes & Canvas Animations

16 visual themes defined as CSS custom properties in `src/styles.css`. Theme key stored in state, applied as a `data-theme` attribute on `<html>`.

| Theme | Canvas animation |
|---|---|
| Default | Floating bubbles |
| Neon | Neon grid |
| Retro | Pixel rain |
| Minimalist | Subtle particles |
| Dark | Stars |
| Synthwave | Sunset + grid |
| Ocean | Waves |
| Forest | Fireflies |
| Space | Nebula + stars |
| Candy | Confetti stream |
| Cyberpunk | Glitch scanlines |
| Vintage | Dust particles |
| Arctic | Snowflakes |
| Sunset | Color gradients |
| Jungle | Leaves |
| Desert | Sand particles |

Animations are rendered on a `<canvas>` element with `position:fixed; inset:0; z-index:0; pointer-events:none`.

---

## 11. Localization

Language is stored in `GameState.lang` (`'en' | 'de'`). All UI strings come from a translation map (`src/i18n/translations.ts` or inline). Category answers are localized at pool-build time — `buildForCategory()` receives `lang` and resolves country/era/knownFor strings before creating `QuizItem`s.

Supported languages: **English (en)**, **German (de)**.

---

## 12. PWA

Configured via `vite-plugin-pwa` in `vite.config.ts`. Workbox generates a service worker for offline support and asset caching.

- `public/manifest.webmanifest` — app name, icons, `display: standalone`
- Service worker pre-caches all Vite build assets
- Runtime caching: Wikimedia/Wikipedia API responses cached with NetworkFirst strategy
- Installable as PWA on iOS (Add to Home Screen) and Android

For Mapillary Geo-Roulette to work, the user must provide `VITE_MAPILLARY_TOKEN` in `.env`. The app degrades gracefully (empty pool for that category) when the token is absent.

---

## 13. Build & Deployment

```bash
# Development
npm run dev          # starts Vite dev server on port 5173

# Production build
npm run build        # outputs to dist/
npm run preview      # preview production build locally
```

Deployment target: **Vercel** (static site). `vercel.json` routes all paths to `index.html` for SPA support.

Environment variables:
| Variable | Required | Description |
|---|---|---|
| `VITE_MAPILLARY_TOKEN` | Optional | Mapillary Graph API access token. Without it, Geo-Roulette returns no images. |

---

## 14. Known Design Decisions & Constraints

**No backend / no accounts.** All state in `localStorage`. Multiplayer is pass-the-device, not networked.

**Wikipedia pageimages API for People.** Wikimedia Commons person-categories contain many non-photos (coins, plaques, paintings, bread names). The Wikipedia lead/infobox image is editorially curated and reliably returns a recognizable portrait. Fetched in batches of 40 per request.

**Per-category distractors.** Wrong answers are drawn only from the same category to avoid absurd combos (e.g. a photo of the Eiffel Tower with "Albert Einstein" as a distractor).

**Pool target ≥ 200.** Even a 2-player, 5-round game uses `max(200, 2×5×2) = 200` images. This ensures variety and a buffer for failed image loads.

**BackgroundEffects outside transforms.** CSS `transform` on an ancestor makes it the containing block for `position:fixed` children, shifting the canvas off-center. The fix is a React fragment that places `<BackgroundEffects />` as a sibling of the `.fade-in` container.

**Mapillary token optional.** If `VITE_MAPILLARY_TOKEN` is absent, `fetchBboxImages()` returns `[]` immediately. The pool validation step warns the player if the Geo-Roulette pool is empty so they can deselect it.

**Mapillary bbox retry.** If the API returns error code 1 ("data too large"), `shrinkBbox()` halves the bounding box dimensions (keeping the center) and retries — up to 3 times. This handles dense city centers without hard-coding smaller boxes.

**Commons categories vs. Wikipedia titles.** For Wikimedia-backed categories (places, history) the `category` field is a Commons category title. For people it is a Wikipedia article title. These are different namespaces and different APIs.

**Liked images persist across resets.** `likedItems` is explicitly excluded from both `PLAY_AGAIN` and `RESET_GAME` resets. This lets a player collect favorites across multiple game sessions in the same browser tab. `localStorage` merge uses `{ ...initialState, ...(loaded) }` to ensure new state fields (like `likedItems`) are always present even when loading an older cached state.

**Category pre-selection enforcement.** `CategoryScreen` initialises with an empty selection (`useState<CategoryId[]>([])`). The Start Game button is `disabled` until at least one category is selected. This prevents accidentally starting a game with an empty pool.

**App footer — version injection.** `vite.config.ts` exposes `__APP_VERSION__` via Vite's `define` (sourced from `process.env.npm_package_version`, set automatically by npm). The `SetupScreen` footer renders this at build time — no runtime fetch needed.

**Game footer — fixed bar + paddingBottom wrapper.** During active play (PASS_DEVICE / QUIZ / TURN_RESULT), `MainApp` renders a `position:fixed` pill-button bar at the bottom of the screen. To prevent the bar from overlapping page content, `<MainContent />` is wrapped in a div with `paddingBottom: '3.5rem'` whenever `inGame` is true. The three buttons open modal overlays: "Selected categories" (chip list of active categories), "Score" (live leaderboard), "Start over" (warning dialog with `RESET_GAME` dispatch). The restart warning overlay does not close on backdrop click to prevent accidental resets.
