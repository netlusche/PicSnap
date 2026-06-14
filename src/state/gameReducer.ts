import { GameState, Language, Theme } from '../types';

export type GameAction =
  | { type: 'SET_THEME'; payload: { theme: Theme } }
  | { type: 'SET_LANG'; payload: { lang: Language } }
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
    case 'RESET_GAME':
      // Keep the chosen theme + language; reset everything else.
      return { ...initialState, theme: state.theme, lang: state.lang };
    default:
      return state;
  }
};
