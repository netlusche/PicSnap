import { QuizItem, CategoryId, Language } from '../types';
import { shuffleArray } from '../utils/arrayUtils';
import { PLACES } from '../data/places';
import { PEOPLE } from '../data/people';
import { HISTORY } from '../data/historyItems';
import { BANDS } from '../data/bands';
import { MOVIES } from '../data/movies';
import { SPORTS } from '../data/sports';
import { CITIES } from '../data/cities';
import { fetchCategoryImages } from './wikimedia';
import { fetchLeadImages } from './wikipedia';
import { fetchBboxImages } from './mapillary';

// Filenames that are clearly not a photo of the subject (maps, diagrams,
// documents, money, logos, signatures, …). Applied to category-based sources
// (places/history) to drop the occasional non-photo file.
const NON_PHOTO = /\b(map|karte|diagram|plan|grundriss|chart|graph|logo|wappen|coat[_ ]of[_ ]arms|coin|m[üu]nze|stamp|briefmarke|banknote|signature|signatur|unterschrift|document|urkunde|reconstruction|schema|model|modell|drawing|zeichnung|engraving|sketch|inscription)\b/i;

/**
 * Target pool size. The x2 factor is a buffer for load failures, duplicate
 * images and distractor needs. Mirrors the spec's formula.
 */
export const poolTargetSize = (players: number, rounds: number): number =>
  Math.max(200, players * rounds * 2);

/** Pick `n` distinct distractors from `pool`, excluding the correct answer. */
const pickDistractors = (pool: string[], correct: string, n: number): string[] =>
  shuffleArray(pool.filter((x) => x !== correct)).slice(0, n);

/**
 * Attach distractors to each item, drawn from other answers in the *same
 * category* so a places image never gets a person as a wrong answer.
 */
const withDistractors = (items: QuizItem[]): QuizItem[] => {
  const primaryByCat = new Map<CategoryId, string[]>();
  const secondaryByCat = new Map<CategoryId, string[]>();
  for (const it of items) {
    if (!primaryByCat.has(it.category)) {
      const list = items.filter((x) => x.category === it.category);
      primaryByCat.set(it.category, [...new Set(list.map((i) => i.answers.primary))]);
      secondaryByCat.set(
        it.category,
        [...new Set(list.map((i) => i.answers.secondary).filter(Boolean) as string[])]
      );
    }
  }
  return items.map((it) => ({
    ...it,
    distractors: {
      primary: pickDistractors(primaryByCat.get(it.category) ?? [], it.answers.primary, 3),
      secondary: it.answers.secondary
        ? pickDistractors(secondaryByCat.get(it.category) ?? [], it.answers.secondary, 3)
        : [],
    },
  }));
};

/** Generic builder for a Wikimedia-Commons-backed category (curated category list). */
async function buildWikimedia<T extends { category: string }>(
  entries: T[],
  categoryId: CategoryId,
  target: number,
  toAnswers: (e: T) => { primary: string; secondary?: string }
): Promise<QuizItem[]> {
  const shuffled = shuffleArray(entries);
  const perEntry = Math.max(4, Math.ceil(target / shuffled.length) + 2);

  const results = await Promise.all(
    shuffled.map(async (entry): Promise<QuizItem[]> => {
      try {
        // Over-fetch a little to compensate for non-photo files we filter out.
        const raw = await fetchCategoryImages(entry.category, perEntry + 6);
        const images = raw.filter((img) => !NON_PHOTO.test(img.sourcePage)).slice(0, perEntry);
        const answers = toAnswers(entry);
        return images.map((img): QuizItem => ({
          id: `${categoryId}:${img.sourcePage}`,
          category: categoryId,
          imageUrl: img.imageUrl,
          answers,
          distractors: { primary: [], secondary: [] },
          hint: answers.secondary,
        }));
      } catch {
        return [];
      }
    })
  );
  return results.flat();
}

/**
 * "Famous People": one canonical Wikipedia lead portrait per person. Commons
 * person-categories are too noisy (plaques, coins, houses), so we use the
 * editorially-curated infobox image instead — a recognizable portrait.
 */
async function buildPeople(lang: Language): Promise<QuizItem[]> {
  const images = await fetchLeadImages(PEOPLE.map((p) => p.name));
  const items: QuizItem[] = [];
  for (const entry of PEOPLE) {
    const url = images.get(entry.name);
    if (!url) continue;
    const knownFor = lang === 'de' ? entry.knownFor.de : entry.knownFor.en;
    items.push({
      id: `people:${entry.name}`,
      category: 'people',
      imageUrl: url,
      answers: { primary: entry.name, secondary: knownFor },
      distractors: { primary: [], secondary: [] },
      hint: knownFor,
    });
  }
  return items;
}

/** Mapillary-backed "Geo-Roulette": street images per city bounding box. */
async function buildGeoRoulette(target: number, lang: Language): Promise<QuizItem[]> {
  const cities = shuffleArray(CITIES);
  const perCity = Math.max(4, Math.ceil(target / cities.length) + 2);

  const results = await Promise.all(
    cities.map(async (city): Promise<QuizItem[]> => {
      try {
        const urls = await fetchBboxImages(city.bbox, perCity);
        const country = lang === 'de' ? city.country.de : city.country.en;
        return urls.map((url, i): QuizItem => ({
          id: `geo_roulette:${city.name}:${i}:${url.slice(-24)}`,
          category: 'geo_roulette',
          imageUrl: url,
          answers: { primary: city.name, secondary: country },
          distractors: { primary: [], secondary: [] },
          hint: country,
        }));
      } catch {
        return [];
      }
    })
  );
  return results.flat();
}

function buildForCategory(cat: CategoryId, target: number, lang: Language): Promise<QuizItem[]> {
  switch (cat) {
    case 'places':
      return buildWikimedia(PLACES, 'places', target, (e) => ({
        primary: e.name,
        secondary: lang === 'de' ? e.country.de : e.country.en,
      }));
    case 'people':
      return buildPeople(lang);
    case 'history':
      return buildWikimedia(HISTORY, 'history', target, (e) => ({
        primary: e.name,
        secondary: lang === 'de' ? e.era.de : e.era.en,
      }));
    case 'geo_roulette':
      return buildGeoRoulette(target, lang);
    case 'bands':
      return buildWikimedia(BANDS, 'bands', target, (e) => ({
        primary: e.name,
        secondary: lang === 'de' ? e.genre.de : e.genre.en,
      }));
    case 'movies':
      return buildWikimedia(MOVIES, 'movies', target, (e) => ({ primary: e.title }));
    case 'sport':
      return buildWikimedia(SPORTS, 'sport', target, (e) => ({
        primary: e.name,
        secondary: lang === 'de' ? e.country.de : e.country.en,
      }));
    default:
      return Promise.resolve([]);
  }
}

/**
 * Build the unified quiz pool across the selected categories. Sources are fetched
 * in parallel (Promise.all). The pool is deduplicated by imageUrl, shuffled
 * (Fisher-Yates), capped at the target size, and distractors are attached.
 */
export async function buildImagePool(
  categories: CategoryId[],
  players: number,
  rounds: number,
  lang: Language
): Promise<QuizItem[]> {
  const target = poolTargetSize(players, rounds);

  const perCategory = await Promise.all(categories.map((cat) => buildForCategory(cat, target, lang)));

  // Deduplicate each category's results separately, then shuffle into per-category queues.
  const seen = new Set<string>();
  const catQueues = new Map<CategoryId, QuizItem[]>();
  categories.forEach((cat, idx) => {
    const deduped = perCategory[idx].filter((i) => {
      if (seen.has(i.imageUrl)) return false;
      seen.add(i.imageUrl);
      return true;
    });
    catQueues.set(cat, shuffleArray(deduped));
  });

  // Assign one category per round, cycling through a shuffled category list.
  // This guarantees all players in the same round see the same category.
  const catCycle = shuffleArray([...categories]);
  const roundCategories: CategoryId[] = Array.from(
    { length: rounds },
    (_, i) => catCycle[i % catCycle.length]
  );

  // Draw exactly `players` items per round from the assigned category's queue.
  const catPointers = new Map<CategoryId, number>();
  const pool: QuizItem[] = [];
  for (const cat of roundCategories) {
    const queue = catQueues.get(cat) ?? [];
    const ptr = catPointers.get(cat) ?? 0;
    const slice = queue.slice(ptr, ptr + players);
    if (slice.length > 0) pool.push(...slice);
    catPointers.set(cat, ptr + players);
  }

  return withDistractors(pool);
}
