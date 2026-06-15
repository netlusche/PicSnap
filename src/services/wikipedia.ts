import { cacheGet, cacheSet } from './cache';

// Wikipedia client for canonical "lead" (infobox) images. The page image is
// editorially curated to represent the subject, so for people it reliably
// returns a recognizable portrait — far cleaner than raw Commons categories,
// which are full of plaques, coins, signatures and unrelated material.
// Uses the action API with origin=* (CORS-friendly, no key required).
const API = 'https://en.wikipedia.org/w/api.php';
const BATCH_SIZE = 40; // pageimages allows many titles per request

/**
 * Resolve canonical lead images for many article titles at once, batching the
 * requests (40 titles each) and caching per title. Returns a title -> URL map
 * (missing titles are simply absent).
 */
export async function fetchLeadImages(titles: string[]): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  const todo: string[] = [];

  for (const title of titles) {
    const cached = cacheGet<string>(`wpimg:${title}`);
    if (cached) result.set(title, cached);
    else todo.push(title);
  }

  for (let i = 0; i < todo.length; i += BATCH_SIZE) {
    const chunk = todo.slice(i, i + BATCH_SIZE);
    const params = new URLSearchParams({
      action: 'query',
      format: 'json',
      origin: '*',
      prop: 'pageimages',
      piprop: 'thumbnail',
      pithumbsize: '900',
      pilimit: String(BATCH_SIZE),
      redirects: '1',
      titles: chunk.join('|'),
    });

    try {
      const res = await fetch(`${API}?${params.toString()}`);
      if (!res.ok) continue;
      const data = await res.json();

      // Map normalized / redirected titles back to the ones we asked for.
      const backref = new Map<string, string>();
      for (const r of data?.query?.redirects ?? []) backref.set(r.to, r.from);
      for (const r of data?.query?.normalized ?? []) backref.set(r.to, r.from);

      for (const page of Object.values<any>(data?.query?.pages ?? {})) {
        const src: string | undefined = page?.thumbnail?.source;
        if (!src) continue;
        const requested = backref.get(page.title) ?? page.title;
        result.set(requested, src);
        cacheSet(`wpimg:${requested}`, src);
      }
    } catch {
      // skip this batch on error
    }
  }

  return result;
}
