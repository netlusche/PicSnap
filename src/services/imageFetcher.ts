import { QuizItem, CategoryId, Language } from '../types';
import { shuffleArray } from '../utils/arrayUtils';
import { PLACES } from '../data/places';
import { fetchCategoryImages } from './wikimedia';

/**
 * Target pool size. The x2 factor is a buffer for load failures, duplicate
 * images and distractor needs. Mirrors the spec's formula.
 */
export const poolTargetSize = (players: number, rounds: number): number =>
  Math.max(200, players * rounds * 2);

/** Pick `n` distinct distractors from `pool`, excluding the correct answer. */
const pickDistractors = (pool: string[], correct: string, n: number): string[] =>
  shuffleArray(pool.filter((x) => x !== correct)).slice(0, n);

/** Attach distractors to each item, drawn from other answers in the same pool. */
const withDistractors = (items: QuizItem[]): QuizItem[] => {
  const allPrimary = [...new Set(items.map((i) => i.answers.primary))];
  const allSecondary = [...new Set(items.map((i) => i.answers.secondary).filter(Boolean) as string[])];
  return items.map((it) => ({
    ...it,
    distractors: {
      primary: pickDistractors(allPrimary, it.answers.primary, 3),
      secondary: it.answers.secondary ? pickDistractors(allSecondary, it.answers.secondary, 3) : [],
    },
  }));
};

/** Build the "Places & Cities" pool from Wikimedia Commons landmark categories. */
async function buildPlaces(target: number, lang: Language): Promise<QuizItem[]> {
  const entries = shuffleArray(PLACES);
  // Distribute the target across landmarks, with a small buffer per landmark.
  const perLandmark = Math.max(4, Math.ceil(target / entries.length) + 2);

  const perEntry = await Promise.all(
    entries.map(async (entry): Promise<QuizItem[]> => {
      try {
        const images = await fetchCategoryImages(entry.category, perLandmark);
        const country = lang === 'de' ? entry.country.de : entry.country.en;
        return images.map((img): QuizItem => ({
          id: `places:${img.sourcePage}`,
          category: 'places',
          imageUrl: img.imageUrl,
          answers: { primary: entry.name, secondary: country },
          distractors: { primary: [], secondary: [] },
          hint: country,
        }));
      } catch {
        return [];
      }
    })
  );

  return perEntry.flat();
}

/**
 * Build the unified quiz pool across the selected categories. Sources are fetched
 * in parallel (Promise.all). The pool is deduplicated by imageUrl, shuffled
 * (Fisher-Yates), capped at the target size, and distractors are attached.
 *
 * Only "places" (Wikimedia) is implemented so far — other categories return an
 * empty list until their sources are wired up in later steps.
 */
export async function buildImagePool(
  categories: CategoryId[],
  players: number,
  rounds: number,
  lang: Language
): Promise<QuizItem[]> {
  const target = poolTargetSize(players, rounds);

  const perCategory = await Promise.all(
    categories.map((cat): Promise<QuizItem[]> => {
      if (cat === 'places') return buildPlaces(target, lang);
      return Promise.resolve([]); // wired up in Steps 7-8
    })
  );

  // Deduplicate by imageUrl.
  const seen = new Set<string>();
  let items = perCategory.flat().filter((i) => {
    if (seen.has(i.imageUrl)) return false;
    seen.add(i.imageUrl);
    return true;
  });

  items = shuffleArray(items);
  if (items.length > target) items = items.slice(0, target);

  return withDistractors(items);
}
