import React, { useEffect } from 'react';
import { useGame } from '../state/GameContext';
import { translations } from '../i18n/translations';
import { Trophy, Medal, RotateCcw, CheckCircle, XCircle, Images } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getThemeConfettiColors } from '../utils/confettiColors';

export const FinalResultsScreen: React.FC = () => {
  const { state, dispatch } = useGame();
  const t = translations[state.lang as keyof typeof translations] || translations.en;

  const sortedPlayers = [...state.players].sort((a, b) => b.score - a.score);
  const winner = sortedPlayers[0];

  // Celebratory side-cannon confetti for 3 seconds.
  useEffect(() => {
    const end = Date.now() + 3000;
    const colors = getThemeConfettiColors(state.theme);
    const frame = () => {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, [state.theme]);

  return (
    <div className="screen final-results fade-in" style={{ gap: '0.6rem' }}>
      <div className="center-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Trophy size={48} className="icon gold-glow text-gold" />
        <h1 className="title-gradient" style={{ fontSize: '1.7rem', fontWeight: 800, margin: '0.25rem 0 0' }}>{t.winner}</h1>
        <h2 className="text-gold glow-text" style={{ fontSize: '1.3rem', margin: '0.1rem 0' }}>{winner?.name}</h2>
        <div className="score-badge" style={{ flexDirection: 'row', alignItems: 'baseline', gap: '0.4rem', padding: '0.4rem 1rem' }}>
          <span className="score-value" style={{ fontSize: '1.3rem' }}>{winner?.score}</span>
          <span className="score-label">{t.points}</span>
        </div>
      </div>

      <div className="leaderboard mt-2">
        {sortedPlayers.map((player, index) => (
          <div key={player.id} className={`leaderboard-row ${index === 0 ? 'first-place' : ''}`}>
            <div className="rank">{index === 0 ? <Medal size={24} className="text-gold" /> : `#${index + 1}`}</div>
            <div className="player-info">{player.name}</div>
            <div className="score">{player.score} {t.points}</div>
          </div>
        ))}
      </div>

      {state.history.length > 0 && (
        <div className="w-full mt-2">
          <h3 className="section-title" style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
            <Images size={16} /> {t.playedImages}
          </h3>
          <div className="history-list">
            {state.history.map((h, i) => (
              <div key={`${h.item.id}-${i}`} className="history-card">
                <img src={h.item.imageUrl} alt="" className="history-thumb" draggable={false} />
                <div className="history-info">
                  <span className="history-answers">
                    <span className={h.primaryCorrect ? 'text-success' : 'text-danger'}>
                      {h.primaryCorrect ? <CheckCircle size={13} /> : <XCircle size={13} />}
                    </span>
                    {h.item.answers.primary}
                    {h.item.answers.secondary && (
                      <>
                        <span className="history-sep">·</span>
                        <span className={h.secondaryCorrect ? 'text-success' : 'text-danger'}>
                          {h.secondaryCorrect ? <CheckCircle size={13} /> : <XCircle size={13} />}
                        </span>
                        {h.item.answers.secondary}
                      </>
                    )}
                  </span>
                  <span className="history-meta">
                    {t.playedBy} {h.player} · <strong className="text-gold">+{h.points}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 w-full">
        <button className="option-button primary large w-full group" onClick={() => dispatch({ type: 'PLAY_AGAIN' })}>
          <RotateCcw size={24} className="group-hover-spin" />
          <span>{t.startOver}</span>
        </button>
      </div>
    </div>
  );
};
