import React from 'react';
import { GameProvider, useGame } from './state/GameContext';
import { BackgroundEffects } from './components/BackgroundEffects';
import { SetupScreen } from './components/SetupScreen';
import { CategoryScreen } from './components/CategoryScreen';
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
    default:
      return <PlaceholderScreen />;
  }
};

const MainApp: React.FC = () => {
  const { state, dispatch } = useGame();
  const t = translations[state.lang as keyof typeof translations] || translations.en;

  // Apply the active theme as a class on <body> (ported from MelodyMatch).
  React.useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`theme-${state.theme || 'default'}`);
  }, [state.theme]);

  return (
    <>
      {/* Rendered outside any animated/transformed container so the position:fixed
          canvas stays anchored to the viewport (see BackgroundEffects). */}
      <BackgroundEffects />
      <MainContent />

      {state.phase !== 'SETUP' && (
        <button onClick={() => dispatch({ type: 'RESET_GAME' })} className="start-over-btn">
          {t.startOver}
        </button>
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
