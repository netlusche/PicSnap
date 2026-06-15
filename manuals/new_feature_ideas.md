# PicSnap — Feature Ideas & Roadmap

## Current Roadmap

| Step | Description | Status |
|---|---|---|
| 8 | Bands, Movies & Sport categories — Wikimedia Commons, curated TypeScript entry lists | ✅ Done |
| 9 | PWA polish: icons, offline splash, install prompt | Pending |
| 10 | Localization completeness: DE/EN audit, missing i18n keys | Pending |
| — | Geo-Roulette: Mapillary API token setup | Pending (deferred) |

**Step 8 summary:** All three categories implemented using `buildWikimedia()` against curated Commons category lists — 79 bands, 86 films (silent era through 1990s), 68 athletes. Concert/action photos replace the earlier Wikipedia lead-image approach, giving much larger pools.

---

## Future Ideas

### New Categories

**Art** — Famous paintings and sculptures  
Source: Wikipedia pageimages API (article = artwork title)  
Answer: artwork name (primary) + artist (secondary)  
Example: "Girl with a Pearl Earring" → "Johannes Vermeer"

**Science & Inventions** — Microscope photos, lab equipment, famous inventions  
Source: Commons categories  
Answer: invention name (primary) + inventor / era (secondary)

**Animals** — Wildlife photos  
Source: Commons categories (e.g. "Bengal tiger", "Giant panda")  
Answer: species name (primary) + habitat / continent (secondary)

**Food & Cuisine** — Iconic dishes from around the world  
Source: Commons categories  
Answer: dish name (primary) + country of origin (secondary)

**Architecture** — Detail shots of famous architectural styles  
Source: Commons categories  
Answer: style or architect (primary) + era (secondary)

### Gameplay Enhancements

**Joker system** — Each player gets one joker per game to skip a question without losing points

**Team mode** — Players divided into two teams; team score combined

**Time Attack mode** — All answers must come within 10 seconds; no secondary question

**Expert mode** — No multiple choice; free text input (mobile keyboard)

**Liked Images** — Bookmark interesting images during play to review after the game (modeled on MelodyMatch's liked songs)

**Image Zoom** — Tap to zoom into a detail of the image before guessing

**Progressive reveal** — Image starts blurred or cropped; reveals over 10 seconds

**Hint countdown** — Secondary question unlocks after 5 seconds if primary not answered

### Technical Enhancements

**Mapillary Geo-Roulette token flow** — In-app Mapillary OAuth instead of requiring manual `.env` setup (allows production deployment without `.env` exposure)

**Offline image caching** — Pre-cache a fixed set of 100 images for fully offline play after first load

**QR code** — At game end, show a QR code linking to the Wikipedia article of the most-disputed image

**Score sharing** — Export final leaderboard as an image (canvas screenshot)

**Admin panel** — Hidden settings screen for managing the curated JSON database entries without editing code

**More languages** — French (fr), Spanish (es), Italian (it) for categories that have multi-language answers

### Content Improvements

**Seasonal packs** — Extra places/history entries themed around holidays (Christmas markets, carnival, etc.)

**Difficulty tiers** — Easy (famous landmarks), Medium (lesser-known), Hard (obscure details)

**Regional packs** — Country-specific modes where all answers come from one country (great for school groups)

**Verified image quality scores** — Rate Commons images by aspect ratio, sharpness, and subject centrality; prefer higher-quality images in the pool

---

## Discarded Ideas

**Online multiplayer** — Would require a backend; contradicts the pass-the-device design philosophy and the "no account required" principle.

**Audio descriptions** — Adds complexity without clear UX benefit for a visual game; conflicts with the "calm and uncluttered" UI goal.

**Leaderboards (global)** — Requires a backend and account system; not in scope.
