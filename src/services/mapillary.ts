import { cacheGet, cacheSet } from './cache';

// Mapillary Graph API client for street-level images. Requires a free API token
// (VITE_MAPILLARY_TOKEN). Without a token this returns an empty list, so the
// Geo-Roulette category simply contributes nothing to the pool until a token
// is provided (pool validation will warn if the pool ends up too small).
const TOKEN = import.meta.env.VITE_MAPILLARY_TOKEN;
const ENDPOINT = 'https://graph.mapillary.com/images';
const MAX_PAGES = 10;

/**
 * Fetch street-level image URLs within a bounding box, following the cursor-based
 * `paging.next` links until `maxImages` is reached or results are exhausted.
 * bbox order is [minLng, minLat, maxLng, maxLat].
 */
export async function fetchBboxImages(
  bbox: [number, number, number, number],
  maxImages: number
): Promise<string[]> {
  if (!TOKEN) return [];

  const cacheKey = `mapillary:${bbox.join(',')}`;
  const cached = cacheGet<string[]>(cacheKey);
  if (cached && cached.length >= maxImages) return cached.slice(0, maxImages);

  const params = new URLSearchParams({
    access_token: TOKEN,
    fields: 'thumb_1024_url',
    bbox: bbox.join(','),
    limit: '100',
  });
  let url: string | null = `${ENDPOINT}?${params.toString()}`;

  const out: string[] = [];
  let pages = 0;
  while (url && out.length < maxImages && pages < MAX_PAGES) {
    pages++;
    let data: any;
    try {
      const res = await fetch(url);
      if (!res.ok) break;
      data = await res.json();
    } catch {
      break;
    }
    for (const img of data?.data ?? []) {
      if (img?.thumb_1024_url) out.push(img.thumb_1024_url);
    }
    // Cursor-based paging: follow the next link if present.
    url = data?.paging?.next ?? null;
  }

  if (out.length > 0) cacheSet(cacheKey, out);
  return out.slice(0, maxImages);
}
