# PicSnap API Manual

## Overview

PicSnap fetches images from three external sources — **Wikimedia Commons**, **Wikipedia pageimages**, and **Mapillary** — plus a bundled **curated JSON database** for categories that don't map well to live APIs (Bands, Movies, Sport).

All external calls are made directly from the browser. No proxy is needed because every API supports `origin=*` CORS headers or JSONP. The Mapillary API requires an access token.

---

## 1. Wikimedia Commons API

**Used for:** Places, History categories.  
**File:** `src/services/wikimedia.ts`

### Endpoint

```
https://commons.wikimedia.org/w/api.php
```

### Method: `fetchCategoryImages(category, maxImages)`

Fetches image files that are direct members of a Commons category. Uses `gcmcontinue` pagination to collect up to `maxImages` files across multiple pages.

### Request Parameters

| Parameter | Value | Notes |
|---|---|---|
| `action` | `query` | |
| `format` | `json` | |
| `origin` | `*` | Required for browser CORS |
| `generator` | `categorymembers` | Iterate members of a category |
| `gcmtitle` | `Category:{name}` | e.g. `Category:Eiffel Tower` |
| `gcmtype` | `file` | Files only (no subcategories) |
| `gcmnamespace` | `6` | File namespace |
| `gcmlimit` | `50` | Files per page (max) |
| `prop` | `imageinfo` | Fetch image metadata |
| `iiprop` | `url\|mime` | Direct URL + MIME type |
| `iiurlwidth` | `900` | Thumbnail width (px) |
| `gcmcontinue` | *(from previous response)* | Pagination token |

### Pagination

The response includes `query-continue.categorymembers.gcmcontinue` when more results exist. The service loops up to **20 pages** (1000 files max) collecting results until either `maxImages` is reached or no continuation token is returned.

### Filtering

After fetching, files are filtered to JPEG/PNG only (`image/jpeg`, `image/png`). The `NON_PHOTO` regex (in `imageFetcher.ts`) is applied to filenames before adding to the quiz pool, dropping maps, diagrams, coins, signatures, etc.

### Response Shape (simplified)

```json
{
  "query": {
    "pages": {
      "-1": {
        "title": "File:Eiffel_Tower_day.jpg",
        "imageinfo": [{ "url": "https://upload.wikimedia.org/…/900px-…", "mime": "image/jpeg" }]
      }
    }
  },
  "query-continue": {
    "categorymembers": { "gcmcontinue": "20231012…|12345" }
  }
}
```

### Caching

Results cached per category with key `wmc:{category}`, 24 h TTL (two-tier: memory + localStorage).

---

## 2. Wikipedia Pageimages API (Lead Portraits)

**Used for:** People category (canonical infobox portraits).  
**File:** `src/services/wikipedia.ts`

### Why this API?

Wikimedia Commons person-categories are noisy — they contain coins, plaques, paintings of paintings, roses named after the person, etc. The Wikipedia **pageimages** action returns the single image that Wikipedia editors chose for the infobox — always a recognizable portrait. This is the cleanest image source for famous people.

### Endpoint

```
https://en.wikipedia.org/w/api.php
```

### Method: `fetchLeadImages(titles[])`

Batch-fetches lead images for up to 40 article titles per request. Returns a `Map<string, string>` (article title → image URL). Missing titles are simply absent from the map.

### Request Parameters (per batch)

| Parameter | Value | Notes |
|---|---|---|
| `action` | `query` | |
| `format` | `json` | |
| `origin` | `*` | Required for browser CORS |
| `prop` | `pageimages` | |
| `piprop` | `thumbnail` | Return a resized thumbnail |
| `pithumbsize` | `900` | Thumbnail width (px) |
| `pilimit` | `40` | Max articles per request (API limit) |
| `redirects` | `1` | Follow redirects automatically |
| `titles` | `Title1\|Title2\|…` | Pipe-separated list, max 40 |

### Redirect / Normalize Handling

The API may normalize titles (spaces → underscores) or redirect them. The response includes `query.normalized` and `query.redirects` arrays mapping `from → to`. The service builds a `backref` map to resolve `page.title` back to the original requested title.

### Batching

With 202 people entries, the service sends **6 batched requests** (40 titles each, last batch smaller). All batches resolve concurrently via `Promise.all`-style iteration.

### Response Shape (simplified)

```json
{
  "query": {
    "normalized": [{ "from": "albert_einstein", "to": "Albert Einstein" }],
    "redirects": [{ "from": "Einstein", "to": "Albert Einstein" }],
    "pages": {
      "736": {
        "title": "Albert Einstein",
        "thumbnail": { "source": "https://upload.wikimedia.org/…/900px-Albert_Einstein.jpg" }
      }
    }
  }
}
```

### Caching

Each title cached individually with key `wpimg:{title}`, 24 h TTL. Only un-cached titles are fetched on subsequent pool builds.

---

## 3. Mapillary Graph API

**Used for:** Geo-Roulette category (street-level imagery by geographic bbox).  
**File:** `src/services/mapillary.ts`

### Authentication

Requires `VITE_MAPILLARY_TOKEN` in `.env`. Without a token, `fetchBboxImages()` returns `[]` immediately and the Geo-Roulette pool will be empty. The app warns the user during pool validation.

### Endpoint

```
https://graph.mapillary.com/images
```

### Method: `fetchBboxImages(bbox, maxImages)`

Fetches geotagged street images within a bounding box. Uses cursor-based pagination.

### Request Parameters

| Parameter | Value | Notes |
|---|---|---|
| `access_token` | `{VITE_MAPILLARY_TOKEN}` | Required |
| `fields` | `id,thumb_1024_url` | Only fetch what we need |
| `bbox` | `{minLng},{minLat},{maxLng},{maxLat}` | WGS84 bounding box |
| `limit` | `50` | Results per page |

### Pagination

The response includes `paging.next` — a full URL for the next page. The service follows `paging.next` until either `maxImages` is reached or `paging.next` is absent.

### City Bounding Boxes

Defined in `src/data/cities.ts`:

```ts
interface City {
  name: string;
  country: { en: string; de: string };
  bbox: [minLng: number, minLat: number, maxLng: number, maxLat: number];
}
```

12 cities currently configured: Paris, New York, Tokyo, London, Berlin, Sydney, Barcelona, Rome, Amsterdam, Cape Town, Buenos Aires, Mumbai.

### Response Shape (simplified)

```json
{
  "data": [
    { "id": "123456789", "thumb_1024_url": "https://scontent-…/1024-…jpg" }
  ],
  "paging": {
    "cursors": { "after": "…" },
    "next": "https://graph.mapillary.com/images?…&after=…"
  }
}
```

### Caching

Mapillary results are **not cached** (street imagery changes frequently and token-based requests shouldn't be stored in plaintext localStorage).

---

## 4. Curated JSON Database (Step 8)

**Used for:** Bands & Musicians, Film & Series, Sport categories.  
**File:** `src/data/picsnap_db.json`

Live APIs for music/film are either CORS-blocked in browsers (Discogs), require server-side proxies, or don't provide freely licensed images. A curated static JSON database solves all three problems.

### Schema

```json
[
  {
    "id": "bands:beatles",
    "category": "bands",
    "imageUrl": "https://upload.wikimedia.org/…/Beatles.jpg",
    "answers": {
      "primary": "The Beatles",
      "secondary": "British Invasion"
    },
    "distractors": {
      "primary": ["The Rolling Stones", "The Who", "Led Zeppelin"],
      "secondary": ["Psychedelic Rock", "Hard Rock", "Punk"]
    },
    "hint": "British Invasion"
  }
]
```

### Image Sources for JSON Entries

All `imageUrl` values point to Wikimedia Commons (freely licensed, stable URLs). Images must be:
- Direct Commons upload URLs (`https://upload.wikimedia.org/wikipedia/commons/…`)
- Minimum resolution 400 × 400 px
- Clearly identifiable photo of the subject (band, film poster, athlete in action)

### Building the Pool from JSON

`buildForCategory()` in `imageFetcher.ts` falls through to `buildFromJson(category)` for `bands`, `movies`, and `sport`. This function filters `picsnap_db.json` by category and returns `QuizItem[]` directly (no API call needed).

### Target Entry Count

≥ 50 entries per category to ensure variety across multiple play sessions.

---

## 5. Rate Limits & Etiquette

| API | Rate limit | Notes |
|---|---|---|
| Wikimedia Commons | No hard limit (reasonable use) | Set `User-Agent` header if building a server-side tool; browser requests use the browser UA |
| Wikipedia pageimages | No hard limit (reasonable use) | Batched to minimize requests (40/batch) |
| Mapillary Graph API | Depends on token tier | Free tier: typically 50k requests/month |

All Wikimedia/Wikipedia requests include `origin=*` for CORS. The `format=json` parameter is required — `format=xml` is not CORS-safe.

---

## 6. CORS Notes

| API | CORS support | Method |
|---|---|---|
| Wikimedia Commons | Yes (`origin=*`) | Fetch |
| Wikipedia pageimages | Yes (`origin=*`) | Fetch |
| Mapillary Graph API | Yes (token in query param) | Fetch |

No JSONP, no proxy required. All requests use the standard browser `fetch()` API.
