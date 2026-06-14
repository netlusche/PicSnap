import { GameState } from '../types';

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
    return s ? (JSON.parse(s) as GameState) : null;
  } catch {
    return null;
  }
};
