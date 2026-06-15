import { GameState } from '../types';
import { initialState } from '../state/gameReducer';

const KEY = 'picsnap_state';

export const saveGameState = (state: GameState) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Ignore quota / serialization errors — persistence is best-effort.
  }
};

export const loadGameState = (): GameState | null => {
  try {
    const s = localStorage.getItem(KEY);
    if (!s) return null;
    // Merge with initialState so any new fields added since the last save
    // always get a valid default value instead of being undefined.
    return { ...initialState, ...(JSON.parse(s) as Partial<GameState>) };
  } catch {
    return null;
  }
};
