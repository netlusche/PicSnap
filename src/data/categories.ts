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
  /** Primary image source wired up in later steps */
  source: ImageSource;
}

export const CATEGORIES: CategoryMeta[] = [
  { id: 'places',       emoji: '🌍', nameKey: 'cat_places',  fieldsKey: 'cat_places_fields',  source: 'wikimedia' },
  { id: 'geo_roulette', emoji: '🗺️', nameKey: 'cat_geo',     fieldsKey: 'cat_geo_fields',     source: 'mapillary' },
  { id: 'people',       emoji: '👤', nameKey: 'cat_people',  fieldsKey: 'cat_people_fields',  source: 'wikimedia' },
  { id: 'bands',        emoji: '🎸', nameKey: 'cat_bands',   fieldsKey: 'cat_bands_fields',   source: 'wikimedia' },
  { id: 'movies',       emoji: '🎬', nameKey: 'cat_movies',  fieldsKey: 'cat_movies_fields',  source: 'json' },
  { id: 'sport',        emoji: '⚽', nameKey: 'cat_sport',   fieldsKey: 'cat_sport_fields',   source: 'wikimedia' },
  { id: 'history',      emoji: '🏛️', nameKey: 'cat_history', fieldsKey: 'cat_history_fields', source: 'wikimedia' },
];
