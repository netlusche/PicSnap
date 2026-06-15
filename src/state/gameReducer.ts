import { GameState, Language, Theme, Player, CategoryId, QuizItem, GamePhase, RoundResult } from '../types';

export type GameAction =
  | { type: 'SET_THEME'; payload: { theme: Theme } }
  | { type: 'SET_LANG'; payload: { lang: Language } }
  | { type: 'CONTINUE_TO_CATEGORIES'; payload: { players: Player[]; totalRounds: number; lang: Language } }
  | { type: 'SET_POOL'; payload: { pool: QuizItem[] } }
  | { type: 'START_GAME'; payload: { categories: CategoryId[] } }
  | { type: 'BEGIN_TURN'; payload: { item: QuizItem } }
  | { type: 'END_TURN'; payload: { points: number; primaryCorrect: boolean; secondaryCorrect?: boolean } }
  | { type: 'NEXT_TURN' }
  | { type: 'TOGGLE_LIKE'; payload: { result: RoundResult } }
  | { type: 'PLAY_AGAIN' }
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
  likedItems: [],
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
    case 'BEGIN_TURN':
      return {
        ...state,
        phase: 'QUIZ',
        currentItem: action.payload.item,
        turnPoints: 0,
      };
    case 'END_TURN': {
      const { points, primaryCorrect, secondaryCorrect } = action.payload;
      const idx = state.currentPlayerIndex;
      const updatedPlayers = state.players.map((p, i) =>
        i === idx ? { ...p, score: p.score + points } : p
      );
      const playerName = state.players[idx]?.name || `Player ${idx + 1}`;
      return {
        ...state,
        phase: 'TURN_RESULT',
        players: updatedPlayers,
        turnPoints: points,
        history: state.currentItem
          ? [...state.history, { item: state.currentItem, player: playerName, points, primaryCorrect, secondaryCorrect }]
          : state.history,
      };
    }
    case 'NEXT_TURN': {
      let nextPlayerIndex = state.currentPlayerIndex + 1;
      let nextRound = state.currentRound;
      let nextPhase: GamePhase = 'PASS_DEVICE';

      if (nextPlayerIndex >= state.players.length) {
        nextPlayerIndex = 0;
        nextRound++;
      }
      if (nextRound > state.totalRounds) {
        nextPhase = 'FINAL_RESULTS';
      }

      return {
        ...state,
        currentPlayerIndex: nextPlayerIndex,
        currentRound: nextRound,
        phase: nextPhase,
        currentItem: null,
        turnPoints: 0,
      };
    }
    case 'TOGGLE_LIKE': {
      const { result } = action.payload;
      const exists = state.likedItems.some((l) => l.item.id === result.item.id);
      if (!exists && state.likedItems.length >= 40) return state;
      return {
        ...state,
        likedItems: exists
          ? state.likedItems.filter((l) => l.item.id !== result.item.id)
          : [...state.likedItems, result],
      };
    }
    case 'PLAY_AGAIN':
      return {
        ...state,
        phase: 'SETUP',
        currentPlayerIndex: 0,
        currentRound: 1,
        players: state.players.map((p) => ({ ...p, score: 0 })),
        pool: [],
        currentItem: null,
        turnPoints: 0,
        history: [],
        // likedItems intentionally kept — persist across games
      };
    case 'RESET_GAME':
      // Keep theme, language and liked images; reset everything else.
      return { ...initialState, theme: state.theme, lang: state.lang, likedItems: state.likedItems };
    default:
      return state;
  }
};
