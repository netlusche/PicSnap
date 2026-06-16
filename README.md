# PicSnap 📸

A fast-paced, local **pass-the-device multiplayer picture quiz** built with React, Vite, and TypeScript. One device, one image at a time — the active player taps the correct answer as fast as possible; the quicker the answer, the more points. No account, no backend, no setup required.

> Architecture is modeled on the MelodyMatch music quiz, but PicSnap is a fresh, standalone project — images instead of audio, with its own categories and image sources (Wikimedia Commons, Wikipedia, and Mapillary).

---

## ✨ Features

### 🎮 Gameplay
- **Local Multiplayer**: Pass one device between 2–6 players — each gets their own timed turn to guess the image.
- **Speed Scoring**: Points scale down linearly the longer a player takes to answer, rewarding fast, confident taps.
- **Round-Based Categories**: All players in the same round see the same category — categories are shuffled into a cycle so they're distributed evenly across rounds instead of one category dominating consecutive turns.
- **Category Enforcement**: No category is pre-selected; "Start Game" stays disabled until at least one is chosen.

### 🖼️ Image Pool & Categories
| Category | Entries | Image source |
|---|---|---|
| 🗺️ Places & Landmarks | 199 | Wikimedia Commons |
| 🧑 Famous People | 239 | Wikipedia infobox portraits |
| 🏛️ History | 108 | Wikimedia Commons |
| 🎬 Movies | 86 | Wikimedia Commons |
| 🎸 Bands & Musicians | 79 | Wikimedia Commons |
| 🏅 Sport | 68 | Wikimedia Commons |
| 🌍 Geo-Roulette | 85 cities across all continents | Mapillary *(requires token)* |

- **Editorial Portraits over Noisy Categories**: Famous People uses Wikipedia's curated infobox lead image instead of Commons person-categories, which tend to mix in plaques, coins, and house photos.
- **Non-Photo Filter**: Maps, diagrams, coins, stamps, signatures, and logos are filtered out of Wikimedia Commons results via filename pattern matching before they reach the pool.
- **Per-Category Distractors**: Wrong answers are drawn only from the same category, so a places image never shows a person's name as a wrong answer. Distractor pools are built from the full per-category fetch queue (not just the small round-ordered game pool), so multiple-choice always has enough options even in short games.
- **Dynamic Pool Sizing**: Target pool size is `max(200, players × rounds × 2)`, fetched in parallel across all selected categories as a buffer against load failures and duplicates.

### ❤️ Liked Images
- **Save Images**: Heart any image on the turn-result screen or the final leaderboard to add it to your persistent Liked Images list (backed by `localStorage`), capped at **40 images**.
- **Collapsible List & Lightbox**: A collapsible "Liked" section on the start screen shows saved images as thumbnails; tap any one to view it full-size in a lightbox with a close button.
- **Persists Across Games**: Liked Images survive "Play Again" and "Start Over" — only an explicit unlike removes one.

### 📊 Live Score & Game Footer
- A persistent footer bar is shown during active gameplay (Pass Device, Quiz, Turn Result) with three buttons: **Selected Categories** (chip list of active categories), **Score** (live leaderboard overlay), and **Start Over** (confirmation dialog before resetting).

### 🏆 End Screen
- **Winner Screen**: Confetti animation, final leaderboard, and full played-image history with per-image points breakdown.
- **Replay & Like**: Every played image is shown as a thumbnail with a like-button and lightbox zoom, so you can revisit and save your favorites after the game.

### 🎨 Themes & Visuals
- **16 Visual Themes** — including the PicSnap-branded **Default** theme (navy background, electric blue and orange accents, matching the app logo) and **Neon Party**, each with its own canvas background animation (bubbles, neon grid, stars, fireflies, nebula, snowflakes, and more).
- Plain CSS with custom properties — no external UI framework.

### 🌐 Localization
- Full **English** and **German** localization, including localized category answers (country, era, "known for") resolved at pool-build time.

### 📱 PWA & Installation
- **Screen stays on**: The app uses the **Wake Lock API** to prevent the screen from dimming or locking during active gameplay (Pass Device, Quiz, and Turn Result screens). The lock is re-acquired automatically if the tab is backgrounded and brought back. Supported on iOS 16.4+ and Android Chrome 84+.
- **Installable as an app** on iOS and Android — no App Store required.
- **Offline-capable app shell**: The full UI loads instantly from cache, including a service worker with runtime caching for Wikimedia/Wikipedia API responses.
- App icon, splash screen, and Open Graph image for WhatsApp/social sharing.
- **Install on iOS**: Safari → Share → "Add to Home Screen"
- **Install on Android/Desktop**: Chrome address bar install button, or browser menu → "Install app"

---

## 🚀 Usage

### Local Development
```bash
npm install
cp .env.example .env   # add your VITE_MAPILLARY_TOKEN
npm run dev
```
Runs the Vite dev server at `http://localhost:5173`.

### Production Build
```bash
npm run build
npm run preview
```
Outputs a static bundle to `dist/`. Because all image sources are fetched client-side, **the app can be hosted on any static web server** — GitHub Pages, Netlify, Vercel, Strato, IONOS, cPanel — with zero backend required.

## 🔑 Environment Variables

| Variable | Required for | Description |
|---|---|---|
| `VITE_MAPILLARY_TOKEN` | Geo-Roulette category | Free Mapillary API token |

If the token is absent, the app degrades gracefully — the Geo-Roulette pool is simply empty for that category.

---

## ⚖️ Disclaimers & API Terms

This application is a **non-commercial hobby project** developed solely for entertainment and educational purposes.

- 🚫 **No Commercial Intent**: No revenue, no ads, no user charges.
- 🔌 **API Utilization**: Images and metadata are fetched in real-time from the public APIs of **Wikimedia Commons**, **Wikipedia**, and **Mapillary**.
- ©️ **Ownership**: All images, names, and metadata are the intellectual property of their respective owners/contributors. This project is not affiliated with or endorsed by the Wikimedia Foundation, Mapillary, or any of their subsidiaries.

---

## Status

All features complete and playable. v0.2.7.
