import React, { useEffect } from 'react';
import { useGame } from '../state/GameContext';
import { translations } from '../i18n/translations';
import { CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getThemeConfettiColors } from '../utils/confettiColors';
import { ImageReveal } from './ImageReveal';

export const TurnResultScreen: React.FC = () => {
  const { state, dispatch } = useGame();
  const t = translations[state.lang as keyof typeof translations] || translations.en;

  const last = state.history[state.history.length - 1];
  const points = state.turnPoints;
  const isCorrect = points > 0;
  const player = state.players[state.currentPlayerIndex];

  useEffect(() => {
    if (isCorrect) {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: getThemeConfettiColors(state.theme),
      });
    }
  }, [isCorrect, state.theme]);

  if (!last) return null;

  return (
    <div className="screen center-content fade-in">
      <div className={`icon-container ${isCorrect ? 'success-glow' : 'danger-glow'}`}>
        {isCorrect ? (
          <CheckCircle size={56} className="text-success" />
        ) : (
          <XCircle size={56} className="text-danger" />
        )}
      </div>

      <h1 className={`gigantic ${isCorrect ? 'text-success' : 'text-danger'} glow-text`}>
        {isCorrect ? t.correct : t.wrong}
      </h1>

      <div className="score-badge">
        <span className="score-value">+{points}</span>
        <span className="score-label">{t.points}</span>
      </div>

      <div style={{ width: '100%', maxWidth: '320px', marginTop: '0.5rem' }}>
        <ImageReveal src={last.item.imageUrl} animate={false} />
      </div>

      <div className="result-answers">
        <span className={`result-answer ${last.primaryCorrect ? 'ok' : 'bad'}`}>
          {last.primaryCorrect ? <CheckCircle size={16} /> : <XCircle size={16} />}
          {last.item.answers.primary}
        </span>
        {last.item.answers.secondary && (
          <span className={`result-answer ${last.secondaryCorrect ? 'ok' : 'bad'}`}>
            {last.secondaryCorrect ? <CheckCircle size={16} /> : <XCircle size={16} />}
            {last.item.answers.secondary}
          </span>
        )}
      </div>

      <p className="text-muted">
        {player?.name}: <strong>{player?.score}</strong> {t.points}
      </p>

      <div className="mt-4 w-full max-w-sm">
        <button
          className="option-button primary large w-full group"
          onClick={() => dispatch({ type: 'NEXT_TURN' })}
        >
          <span>{t.nextPlayer}</span>
          <ChevronRight size={24} className="group-hover-translate icon" />
        </button>
      </div>
    </div>
  );
};
