import { CategoryId } from '../types';

// Image source backing a category. Used by the ImageFetcher (Step 4+) to decide
// how to build the quiz pool. Replaces MelodyMatch's PLAYLIST_MAP.
export type ImageSource = 'wikimedia' | 'mapillary' | 'json';

export interface CategoryMeta {
  id: CategoryId;
  emoji: string;
  /** i18n key for the display name */
  nameKey: string;
  /** i18n key for the short "what you answer" hint */
  fieldsKey: string;
  /** i18n keys for the per-step question prompts */
  questionKeys: { primary: string; secondary?: string };
  /** Primary image source wired up in later steps */
  source: ImageSource;
}

export const CATEGORIES: CategoryMeta[] = [
  { id: 'places',       emoji: '🌍', nameKey: 'cat_places',  fieldsKey: 'cat_places_fields',  questionKeys: { primary: 'q_places_primary', secondary: 'q_places_secondary' }, source: 'wikimedia' },
  { id: 'geo_roulette', emoji: '🗺️', nameKey: 'cat_geo',     fieldsKey: 'cat_geo_fields',     questionKeys: { primary: 'q_geo_primary', secondary: 'q_geo_secondary' },       source: 'mapillary' },
  { id: 'people',       emoji: '👤', nameKey: 'cat_people',  fieldsKey: 'cat_people_fields',  questionKeys: { primary: 'q_people_primary', secondary: 'q_people_secondary' }, source: 'wikimedia' },
  { id: 'bands',        emoji: '🎸', nameKey: 'cat_bands',   fieldsKey: 'cat_bands_fields',   questionKeys: { primary: 'q_bands_primary', secondary: 'q_bands_secondary' },   source: 'wikimedia' },
  { id: 'movies',       emoji: '🎬', nameKey: 'cat_movies',  fieldsKey: 'cat_movies_fields',  questionKeys: { primary: 'q_movies_primary' },                                    source: 'json' },
  { id: 'sport',        emoji: '⚽', nameKey: 'cat_sport',   fieldsKey: 'cat_sport_fields',   questionKeys: { primary: 'q_sport_primary', secondary: 'q_sport_secondary' },   source: 'wikimedia' },
  { id: 'history',      emoji: '🏛️', nameKey: 'cat_history', fieldsKey: 'cat_history_fields', questionKeys: { primary: 'q_history_primary', secondary: 'q_history_secondary' }, source: 'wikimedia' },
];
