import React, { useState } from 'react';
import { useGame } from '../state/GameContext';
import { Player, Language, Theme } from '../types';
import { Users, Settings, Globe, ChevronRight, UserPlus, Trash2 } from 'lucide-react';
import { translations } from '../i18n/translations';

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

const MAX_PLAYERS = 6;

export const SetupScreen: React.FC = () => {
  const { state, dispatch } = useGame();
  const [lang, setLang] = useState<Language>(state.lang);
  const [rounds, setRounds] = useState<number>(state.totalRounds || 10);
  const [players, setPlayers] = useState<Player[]>(
    state.players.length > 0 ? state.players : [{ id: '1', name: 'Player 1', score: 0 }]
  );

  const t = translations[lang];

  const handleAddPlayer = () => {
    if (players.length < MAX_PLAYERS) {
      setPlayers([...players, { id: Date.now().toString(), name: `${t.player} ${players.length + 1}`, score: 0 }]);
    }
  };

  const handleRemovePlayer = (id: string) => {
    if (players.length > 1) {
      setPlayers(players.filter((p) => p.id !== id));
    }
  };

  const handleNameChange = (id: string, name: string) => {
    setPlayers(players.map((p) => (p.id === id ? { ...p, name } : p)));
  };

  const handleNext = () => {
    const filledPlayers = players.map((p, idx) => ({ ...p, name: p.name.trim() || `${t.player} ${idx + 1}`, score: 0 }));
    dispatch({ type: 'CONTINUE_TO_CATEGORIES', payload: { players: filledPlayers, totalRounds: rounds, lang } });
  };

  return (
    <div className="screen fade-in">
      <div className="flex justify-between items-center w-full" style={{ marginBottom: '0.5rem' }}>
        <h1 className="title-gradient" style={{ margin: 0 }}>{t.appName}</h1>
        <label className="theme-select-container">
          <select
            className="theme-select"
            aria-label={t.theme}
            value={state.theme}
            onChange={(e) => dispatch({ type: 'SET_THEME', payload: { theme: e.target.value as Theme } })}
          >
            {THEMES.map((th) => (
              <option key={th.id} value={th.id}>{th.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="setup-section">
        <h2 className="section-title"><Users className="icon" size={20} /> {t.setupPlayers} (1-{MAX_PLAYERS})</h2>
        <div className="players-list">
          {players.map((player, index) => (
            <div key={player.id} className="player-input-row">
              <input
                type="text"
                value={player.name}
                onChange={(e) => handleNameChange(player.id, e.target.value)}
                onFocus={(e) => e.target.select()}
                onBlur={(e) => { if (!e.target.value.trim()) handleNameChange(player.id, `${t.player} ${index + 1}`); }}
                className="custom-input"
                placeholder={`${t.player} ${index + 1}`}
                maxLength={20}
              />
              {players.length > 1 && (
                <button className="icon-button danger" onClick={() => handleRemovePlayer(player.id)} aria-label="Remove player">
                  <Trash2 size={20} />
                </button>
              )}
            </div>
          ))}
          {players.length < MAX_PLAYERS && (
            <button className="option-button outline" onClick={handleAddPlayer}>
              <UserPlus size={20} /> {t.addPlayer}
            </button>
          )}
        </div>
      </div>

      <div className="setup-section">
        <h2 className="section-title"><Settings className="icon" size={20} /> {t.setupRounds}</h2>
        <div className="options-grid horizontal">
          {[5, 10, 15, 20].map((r) => (
            <button key={r} className={`option-button ${rounds === r ? 'active' : ''}`} onClick={() => setRounds(r)}>
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="setup-section">
        <h2 className="section-title"><Globe className="icon" size={20} /> {t.setupLanguage}</h2>
        <div className="options-grid horizontal">
          <button className={`option-button ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
          <button className={`option-button ${lang === 'de' ? 'active' : ''}`} onClick={() => setLang('de')}>DE</button>
        </div>
      </div>

      <button className="option-button primary large mt-4 group" onClick={handleNext}>
        <span>{t.next}</span>
        <ChevronRight size={24} className="group-hover-translate icon" />
      </button>
    </div>
  );
};
