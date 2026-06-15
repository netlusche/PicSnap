export type Language = 'en' | 'de';

// All 16 themes ported 1:1 from the MelodyMatch theme system.
export type Theme =
  | 'default'
  | 'plain_white'
  | 'plain_dark'
  | 'matrix'
  | 'vaporwave'
  | 'westeros'
  | 'sakura'
  | 'lcars'
  | 'frutiger_aero'
  | 'synthwave'
  | 'heavy_metal'
  | 'post_punk'
  | 'rock_legends'
  | 'kraftwerk'
  | 'neon_party';

// Quiz categories. Each maps to one or more image sources (Wikimedia / Mapillary / curated JSON).
export type CategoryId =
  | 'places'
  | 'geo_roulette'
  | 'people'
  | 'bands'
  | 'movies'
  | 'sport'
  | 'history';

export interface Player {
  id: string;
  name: string;
  score: number;
}

export type GamePhase =
  | 'SETUP'
  | 'CATEGORY_SELECTION'
  | 'PASS_DEVICE'
  | 'QUIZ'
  | 'TURN_RESULT'
  | 'FINAL_RESULTS';

/**
 * Unified quiz item. Every image source (Wikimedia, Mapillary, curated JSON) is
 * normalized to this shape by the ImageFetcher so the game loop is source-agnostic.
 */
export interface QuizItem {
  id: string;
  category: CategoryId;
  imageUrl: string;
  answers: {
    primary: string;
    secondary?: string;
  };
  distractors: {
    primary: string[];
    secondary?: string[];
  };
  hint?: string;
}

export interface RoundResult {
  item: QuizItem;
  player: string;
  points: number;
  primaryCorrect: boolean;
  // undefined when the category has no secondary question.
  secondaryCorrect?: boolean;
}

export interface GameState {
  lang: Language;
  theme: Theme;
  players: Player[];
  currentPlayerIndex: number;
  currentRound: number;
  totalRounds: number;
  phase: GamePhase;
  categories: CategoryId[];
  pool: QuizItem[];
  currentItem: QuizItem | null;
  turnPoints: number;
  history: RoundResult[];
  likedItems: RoundResult[];
}
