import { cacheGet, cacheSet } from './cache';

// Wikimedia Commons API client. Category-based image queries, no API key required.
// CORS works for anonymous requests via the `origin=*` parameter.
const API = 'https://commons.wikimedia.org/w/api.php';

export interface WikiImage {
  imageUrl: string; // ~800px thumbnail URL
  sourcePage: string; // unique file page title (used for dedupe / ids)
}

const MAX_PAGES = 20; // safety cap on pagination loops

/**
 * Fetch image files from a Commons category, following `gcmcontinue` pagination
 * until `maxImages` is reached or the category is exhausted. Only bitmap images
 * (JPEG/PNG) are kept. Results are cached per category.
 */
export async function fetchCategoryImages(category: string, maxImages: number): Promise<WikiImage[]> {
  const cacheKey = `wiki:${category}`;
  const cached = cacheGet<WikiImage[]>(cacheKey);
  if (cached && cached.length >= maxImages) {
    return cached.slice(0, maxImages);
  }

  const out: WikiImage[] = [];
  let cont: Record<string, string> | undefined;
  let pages = 0;

  while (out.length < maxImages && pages < MAX_PAGES) {
    pages++;
    const params = new URLSearchParams({
      action: 'query',
      format: 'json',
      origin: '*',
      generator: 'categorymembers',
      gcmtitle: `Category:${category}`,
      gcmtype: 'file',
      gcmlimit: '100',
      prop: 'imageinfo',
      iiprop: 'url|mime',
      iiurlwidth: '800',
    });
    // Merge continuation params from the previous response (gcmcontinue + continue).
    if (cont) {
      for (const [k, v] of Object.entries(cont)) params.set(k, v);
    }

    let data: any;
    try {
      const res = await fetch(`${API}?${params.toString()}`);
      if (!res.ok) break;
      data = await res.json();
    } catch {
      break;
    }

    const resultPages = data?.query?.pages ?? {};
    for (const page of Object.values<any>(resultPages)) {
      const info = page?.imageinfo?.[0];
      if (info?.thumburl && (info.mime === 'image/jpeg' || info.mime === 'image/png')) {
        out.push({ imageUrl: info.thumburl, sourcePage: page.title });
      }
    }

    if (data?.continue) {
      cont = data.continue as Record<string, string>;
    } else {
      break; // no more pages
    }
  }

  if (out.length > 0) cacheSet(cacheKey, out);
  return out.slice(0, maxImages);
}
