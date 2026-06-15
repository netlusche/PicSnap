# PicSnap API Manual

## Overview

PicSnap fetches images from three external sources — **Wikimedia Commons**, **Wikipedia pageimages**, and **Mapillary** — plus a bundled **curated JSON database** for categories that don't map well to live APIs (Bands, Movies, Sport).

All external calls are made directly from the browser. No proxy is needed because every API supports `origin=*` CORS headers or JSONP. The Mapillary API requires an access token.

---

## 1. Wikimedia Commons API

**Used for:** Places, History, Bands, Movies, Sport categories.  
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

With 239 people entries, the service sends **6 batched requests** (40 titles each, last batch smaller). All batches resolve concurrently via `Promise.all`-style iteration.

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

## 4. TypeScript Data Files (Bands, Movies, Sport)

**Used for:** Bands & Musicians, Movies, Sport categories.  
**Files:** `src/data/bands.ts`, `src/data/movies.ts`, `src/data/sports.ts`

These categories use the same Wikimedia Commons API as Places and History (see Section 1), but with their own curated entry lists. Each entry carries a `category` field that maps to a Commons category title.

### Entry Schemas

```ts
// bands.ts
interface BandEntry {
  name: string;       // primary answer
  category: string;  // Wikimedia Commons category title
  genre: { en: string; de: string };  // secondary answer
}

// movies.ts
interface MovieEntry {
  title: string;     // primary answer
  category: string;  // Wikimedia Commons category title
}

// sports.ts
interface SportEntry {
  name: string;       // primary answer
  category: string;  // Wikimedia Commons category title
  country: { en: string; de: string };  // secondary answer
}
```

### Why Commons for these categories?

- **Bands:** Band/artist Commons categories contain concert photos, press shots, and live-performance images — far more freely licensed images than Wikipedia lead images (which are often non-free for musicians).
- **Movies:** Film categories contain production stills, promotional materials, and set photos. Silent-era and pre-1960s films have particularly rich PD archives. Modern films (1980s+) may have fewer freely licensed stills.
- **Sport:** Athlete Commons categories contain action shots from competitions, award ceremonies, and press events.

### Building the Pool

`buildForCategory()` in `imageFetcher.ts` calls `buildWikimedia()` for all three categories, identical to how Places and History work. The generic helper shuffles entries, fetches up to `perEntry + 6` images per Commons category (to compensate for NON_PHOTO filtering), and assembles `QuizItem[]`.

### Current Entry Counts

| File | Entries | Theoretical pool (perEntry = 5) |
|---|---|---|
| `bands.ts` | 79 | ~395 |
| `movies.ts` | 86 | ~430 |
| `sports.ts` | 68 | ~340 |

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
