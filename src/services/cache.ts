// Lightweight two-tier cache (in-memory + localStorage) with a TTL.
// Used to avoid re-hitting the image APIs on replay / start-over, analogous to
// MelodyMatch's album-art caching.

const MEMORY = new Map<string, { t: number; v: unknown }>();
const PREFIX = 'picsnap_cache_';
const DEFAULT_TTL = 1000 * 60 * 60 * 24; // 24 hours

export function cacheGet<T>(key: string, ttl = DEFAULT_TTL): T | null {
  const mem = MEMORY.get(key);
  if (mem && Date.now() - mem.t < ttl) return mem.v as T;
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (raw) {
      const obj = JSON.parse(raw) as { t: number; v: T };
      if (Date.now() - obj.t < ttl) {
        MEMORY.set(key, obj);
        return obj.v;
      }
    }
  } catch {
    // ignore corrupt / unavailable storage
  }
  return null;
}

export function cacheSet<T>(key: string, value: T): void {
  const entry = { t: Date.now(), v: value };
  MEMORY.set(key, entry);
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(entry));
  } catch {
    // ignore quota errors — cache is best-effort
  }
}
