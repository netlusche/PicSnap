import React, { useState } from 'react';
import { useGame } from '../state/GameContext';
import { translations } from '../i18n/translations';
import { Smartphone, Play } from 'lucide-react';

export const PassDeviceScreen: React.FC = () => {
  const { state, dispatch } = useGame();
  const t = translations[state.lang as keyof typeof translations] || translations.en;
  const player = state.players[state.currentPlayerIndex];
  const [busy, setBusy] = useState(false);

  const handleBegin = () => {
    if (busy) return; // double-tap protection
    setBusy(true);

    // Prefer images not shown yet this game; fall back to the whole pool.
    const usedIds = new Set(state.history.map((h) => h.item.id));
    const available = state.pool.filter((i) => !usedIds.has(i.id));
    const poolToUse = available.length > 0 ? available : state.pool;
    const item = poolToUse[Math.floor(Math.random() * poolToUse.length)];

    if (item) dispatch({ type: 'BEGIN_TURN', payload: { item } });
  };

  if (!player) return null;

  return (
    <div className="screen center-content fade-in">
      <div className="text-muted glow-text" style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: '-1rem' }}>
        {t.roundLabel} {state.currentRound} / {state.totalRounds}
      </div>
      <div className="icon-container primary-glow mb-4">
        <Smartphone size={72} className="icon active-bounce" />
      </div>
      <h2 className="subtitle">{t.passTo}</h2>
      <h1 className="title-gradient gigantic text-center">{player.name}</h1>

      <div className="mt-8 w-full max-w-sm">
        <button className="option-button primary large w-full pulse-animation" onClick={handleBegin} disabled={busy}>
          <Play fill="currentColor" size={24} />
          <span>{t.beginTurn}</span>
        </button>
      </div>
    </div>
  );
};
