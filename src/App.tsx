import React from 'react';
import { GameProvider, useGame } from './state/GameContext';
import { BackgroundEffects } from './components/BackgroundEffects';
import { translations } from './i18n/translations';
import { Theme, Language } from './types';

// Theme list for the scaffold smoke-test selector. The full theme picker UI
// (with canvas backgrounds) lands in Step 2.
const THEMES: { id: Theme; label: string }[] = [
  { id: 'default', label: 'Neon Party' },
  { id: 'plain_white', label: 'Plain White' },
  { id: 'plain_dark', label: 'Plain Dark' },
  { id: 'matrix', label: 'Matrix' },
  { id: 'vaporwave', label: 'Vaporwave' },
  { id: 'westeros', label: 'Westeros' },
  { id: 'sakura', label: 'Sakura' },
  { id: 'lcars', label: 'LCARS' },
  { id: 'frutiger_aero', label: 'Frutiger Aero' },
  { id: 'synthwave', label: 'Synthwave' },
  { id: 'heavy_metal', label: 'Heavy Metal' },
  { id: 'post_punk', label: 'Post Punk' },
  { id: 'rock_legends', label: 'Rock Legends' },
  { id: 'kraftwerk', label: 'Kraftwerk' },
];

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
      {/* Rendered outside the .fade-in container: its transform would otherwise
          become the containing block for the position:fixed canvas and offset it. */}
      <BackgroundEffects />
      <div className="screen center-content fade-in">
      <div className="icon-container primary-glow active-bounce" aria-hidden="true">
        <span style={{ fontSize: '2.5rem' }}>📸</span>
      </div>

      <h1 className="gigantic title-gradient">{t.appName}</h1>
      <p className="subtitle">{t.tagline}</p>
      <p className="text-muted" style={{ maxWidth: '24rem' }}>{t.scaffoldNotice}</p>

      <div className="flex items-center" style={{ gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <label className="theme-select-container">
          <span className="text-muted" style={{ marginRight: '0.5rem', fontSize: '0.85rem' }}>{t.theme}</span>
          <select
            className="theme-select"
            value={state.theme}
            onChange={(e) => dispatch({ type: 'SET_THEME', payload: { theme: e.target.value as Theme } })}
          >
            {THEMES.map((th) => (
              <option key={th.id} value={th.id}>{th.label}</option>
            ))}
          </select>
        </label>

        <label className="theme-select-container">
          <span className="text-muted" style={{ marginRight: '0.5rem', fontSize: '0.85rem' }}>{t.language}</span>
          <select
            className="theme-select"
            value={state.lang}
            onChange={(e) => dispatch({ type: 'SET_LANG', payload: { lang: e.target.value as Language } })}
          >
            <option value="en">English</option>
            <option value="de">Deutsch</option>
          </select>
        </label>
      </div>
      </div>
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
