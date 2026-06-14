import { GameState, Language, Theme, Player, CategoryId, QuizItem } from '../types';

export type GameAction =
  | { type: 'SET_THEME'; payload: { theme: Theme } }
  | { type: 'SET_LANG'; payload: { lang: Language } }
  | { type: 'CONTINUE_TO_CATEGORIES'; payload: { players: Player[]; totalRounds: number; lang: Language } }
  | { type: 'SET_POOL'; payload: { pool: QuizItem[] } }
  | { type: 'START_GAME'; payload: { categories: CategoryId[] } }
  | { type: 'RESET_GAME' };

export const initialState: GameState = {
  lang: 'en',
  theme: 'default',
  players: [],
  currentPlayerIndex: 0,
  currentRound: 1,
  totalRounds: 10,
  phase: 'SETUP',
  categories: ['places'],
  pool: [],
  currentItem: null,
  turnPoints: 0,
  history: [],
};

export const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload.theme };
    case 'SET_LANG':
      return { ...state, lang: action.payload.lang };
    case 'CONTINUE_TO_CATEGORIES':
      return {
        ...state,
        players: action.payload.players,
        totalRounds: action.payload.totalRounds,
        lang: action.payload.lang,
        phase: 'CATEGORY_SELECTION',
      };
    case 'SET_POOL':
      return { ...state, pool: action.payload.pool };
    case 'START_GAME':
      return {
        ...state,
        categories: action.payload.categories,
        currentPlayerIndex: 0,
        currentRound: 1,
        phase: 'PASS_DEVICE',
        history: [],
        currentItem: null,
        turnPoints: 0,
      };
    case 'RESET_GAME':
      // Keep the chosen theme + language; reset everything else.
      return { ...initialState, theme: state.theme, lang: state.lang };
    default:
      return state;
  }
};
