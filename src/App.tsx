import React, { useState } from 'react';
import { GameProvider, useGame } from './state/GameContext';
import { BackgroundEffects } from './components/BackgroundEffects';
import { SetupScreen } from './components/SetupScreen';
import { CategoryScreen } from './components/CategoryScreen';
import { PassDeviceScreen } from './components/PassDeviceScreen';
import { QuizScreen } from './components/QuizScreen';
import { TurnResultScreen } from './components/TurnResultScreen';
import { FinalResultsScreen } from './components/FinalResultsScreen';
import { translations } from './i18n/translations';
import { CATEGORIES } from './data/categories';

// Temporary placeholder for phases not yet implemented (PASS_DEVICE, QUIZ,
// TURN_RESULT, FINAL_RESULTS). Replaced as the game loop is built in later steps.
const PlaceholderScreen: React.FC = () => {
  const { state } = useGame();
  const t = translations[state.lang as keyof typeof translations] || translations.en;
  const catNames = state.categories
    .map((id) => CATEGORIES.find((c) => c.id === id))
    .filter(Boolean)
    .map((c) => `${c!.emoji} ${(t as Record<string, string>)[c!.nameKey]}`)
    .join(', ');

  return (
    <div className="screen center-content fade-in">
      <div className="icon-container primary-glow active-bounce" aria-hidden="true">
        <span style={{ fontSize: '2.5rem' }}>📸</span>
      </div>
      <h1 className="gigantic title-gradient">{t.appName}</h1>
      <p className="subtitle">{t.comingSoon}</p>
      <div className="score-badge mt-4">
        <span className="score-value">{state.pool.length}</span>
        <span className="score-label">images in pool</span>
      </div>
      <p className="text-muted" style={{ marginTop: '0.5rem' }}>{state.players.length} {t.setupPlayers} · {state.totalRounds} {t.setupRounds}</p>
      <p className="text-muted" style={{ maxWidth: '24rem' }}>{catNames}</p>
    </div>
  );
};

const MainContent: React.FC = () => {
  const { state } = useGame();
  switch (state.phase) {
    case 'SETUP':
      return <SetupScreen />;
    case 'CATEGORY_SELECTION':
      return <CategoryScreen />;
    case 'PASS_DEVICE':
      return <PassDeviceScreen />;
    case 'QUIZ':
      return <QuizScreen />;
    case 'TURN_RESULT':
      return <TurnResultScreen />;
    case 'FINAL_RESULTS':
      return <FinalResultsScreen />;
    default:
      return <PlaceholderScreen />;
  }
};

const MainApp: React.FC = () => {
  const { state, dispatch } = useGame();
  const t = translations[state.lang as keyof typeof translations] || translations.en;
  const tr = t as Record<string, string>;

  const [showCats, setShowCats] = useState(false);
  const [showRestart, setShowRestart] = useState(false);

  const inGame = ['PASS_DEVICE', 'QUIZ', 'TURN_RESULT'].includes(state.phase);

  React.useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`theme-${state.theme || 'default'}`);
  }, [state.theme]);

  return (
    <>
      {/* Rendered outside any animated/transformed container so the position:fixed
          canvas stays anchored to the viewport (see BackgroundEffects). */}
      <BackgroundEffects />

      <div style={inGame ? { flex: 1, display: 'flex', flexDirection: 'column', paddingBottom: '3.5rem' } : { flex: 1, display: 'flex', flexDirection: 'column' }}>
        <MainContent />
      </div>

      {inGame && (
        <div className="game-footer">
          <button className="game-footer-btn" onClick={() => setShowCats(true)}>
            {t.selectedCategories}
          </button>
          <button className="game-footer-btn" onClick={() => setShowRestart(true)}>
            {t.startOver}
          </button>
        </div>
      )}

      {showCats && (
        <div className="modal-overlay" onClick={() => setShowCats(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{t.selectedCategories}</h2>
              <button className="modal-close" onClick={() => setShowCats(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="chips-grid">
                {state.categories.map((id) => {
                  const cat = CATEGORIES.find((c) => c.id === id);
                  if (!cat) return null;
                  return (
                    <span key={id} className="category-chip">
                      {cat.emoji} {tr[cat.nameKey]}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {showRestart && (
        <div className="modal-overlay">
          <div className="modal-card modal-card--warning">
            <div className="modal-body modal-body--center">
              <h2 className="modal-warning-title">{t.restartTitle}</h2>
              <p className="modal-warning-body">{t.restartBody}</p>
              <div className="modal-actions">
                <button
                  className="option-button outline flex-1"
                  onClick={() => setShowRestart(false)}
                >
                  {t.cancel}
                </button>
                <button
                  className="option-button flex-1"
                  style={{ background: 'var(--card-hover)', borderColor: 'var(--border-hover)' }}
                  onClick={() => { dispatch({ type: 'RESET_GAME' }); setShowRestart(false); }}
                >
                  {t.yesRestart}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <GameProvider>
      <MainApp />
    </GameProvider>
  );
};

export default App;
