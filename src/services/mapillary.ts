import { cacheGet, cacheSet } from './cache';

// Mapillary Graph API client for street-level images. Requires a free API token
// (VITE_MAPILLARY_TOKEN). Without a token this returns an empty list, so the
// Geo-Roulette category simply contributes nothing to the pool until a token
// is provided (pool validation will warn if the pool ends up too small).
const TOKEN = import.meta.env.VITE_MAPILLARY_TOKEN;
const ENDPOINT = 'https://graph.mapillary.com/images';
const MAX_PAGES = 10;
const MAX_RETRY = 3;

const shrinkBbox = (
  bbox: [number, number, number, number]
): [number, number, number, number] => {
  const [minLng, minLat, maxLng, maxLat] = bbox;
  const cx = (minLng + maxLng) / 2;
  const cy = (minLat + maxLat) / 2;
  const hw = (maxLng - minLng) / 4;
  const hh = (maxLat - minLat) / 4;
  return [cx - hw, cy - hh, cx + hw, cy + hh];
};

async function fetchOneBbox(
  bbox: [number, number, number, number],
  maxImages: number,
  attempt: number
): Promise<string[]> {
  const params = new URLSearchParams({
    access_token: TOKEN as string,
    fields: 'thumb_1024_url',
    bbox: bbox.join(','),
    limit: '50',
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
    // Mapillary returns error code 1 when the bbox covers too many images.
    // Retry with a smaller box (halved each attempt) up to MAX_RETRY times.
    if (data?.error?.code === 1) {
      if (attempt < MAX_RETRY) return fetchOneBbox(shrinkBbox(bbox), maxImages, attempt + 1);
      return [];
    }
    for (const img of data?.data ?? []) {
      if (img?.thumb_1024_url) out.push(img.thumb_1024_url);
    }
    url = data?.paging?.next ?? null;
  }
  return out;
}

/**
 * Fetch street-level image URLs within a bounding box, following the cursor-based
 * `paging.next` links until `maxImages` is reached or results are exhausted.
 * Automatically retries with a smaller box if Mapillary's data-size limit is hit.
 * bbox order is [minLng, minLat, maxLng, maxLat].
 */
export async function fetchBboxImages(
  bbox: [number, number, number, number],
  maxImages: number
): Promise<string[]> {
  if (!TOKEN) return [];

  const cacheKey = `mapillary:${bbox.join(',')}:${maxImages}`;
  const cached = cacheGet<string[]>(cacheKey);
  if (cached) return cached;

  const out = await fetchOneBbox(bbox, maxImages, 0);

  if (out.length > 0) cacheSet(cacheKey, out);
  return out.slice(0, maxImages);
}
