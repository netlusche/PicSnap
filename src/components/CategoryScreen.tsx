import React, { useState } from 'react';
import { useGame } from '../state/GameContext';
import { translations } from '../i18n/translations';
import { CATEGORIES } from '../data/categories';
import { CategoryId } from '../types';
import { Play, ChevronLeft } from 'lucide-react';

export const CategoryScreen: React.FC = () => {
  const { state, dispatch } = useGame();
  const t = translations[state.lang as keyof typeof translations] || translations.en;

  const [selected, setSelected] = useState<CategoryId[]>(
    state.categories.length > 0 ? state.categories : []
  );
  const [showNotice, setShowNotice] = useState(false);

  const toggle = (id: CategoryId) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]));
  };

  const handleStart = () => {
    if (selected.length === 0) {
      setShowNotice(true);
      return;
    }
    // The image pool is fetched in a later step; for now we advance the phase.
    dispatch({ type: 'START_GAME', payload: { categories: selected } });
  };

  return (
    <div className="screen fade-in">
      <div className="flex items-center w-full" style={{ gap: '0.5rem', marginBottom: '0.25rem' }}>
        <button
          className="icon-button outline"
          style={{ width: 44, height: 44 }}
          onClick={() => dispatch({ type: 'CONTINUE_TO_CATEGORIES', payload: { players: state.players, totalRounds: state.totalRounds, lang: state.lang } })}
          aria-label={t.back}
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="title-gradient" style={{ margin: 0 }}>{t.categoriesTitle}</h1>
      </div>

      <p className="text-muted" style={{ fontSize: '0.85rem', lineHeight: 1.3, margin: '0 0 0.25rem' }}>
        {t.categoryHelper}
      </p>

      <div className="category-grid">
        {CATEGORIES.map((cat) => {
          const isActive = selected.includes(cat.id);
          return (
            <button
              key={cat.id}
              className={`category-card ${isActive ? 'active' : ''}`}
              onClick={() => toggle(cat.id)}
              aria-pressed={isActive}
            >
              <span className="cat-emoji" aria-hidden="true">{cat.emoji}</span>
              <span className="cat-text">
                <span className="cat-name">{(t as Record<string, string>)[cat.nameKey]}</span>
                <span className="cat-fields">{(t as Record<string, string>)[cat.fieldsKey]}</span>
              </span>
              <span className={`cat-check ${isActive ? 'on' : ''}`} aria-hidden="true" />
            </button>
          );
        })}
      </div>

      <button
        className={`option-button primary large mt-4 ${selected.length === 0 ? 'visually-disabled' : ''}`}
        onClick={handleStart}
      >
        <Play size={20} className="icon" />
        <span>{t.start}</span>
      </button>

      {showNotice && (
        <div className="modal-overlay" onClick={() => setShowNotice(false)}>
          <div
            style={{
              background: 'var(--card)',
              border: '2px solid var(--border-hover)',
              borderRadius: '16px',
              padding: '1.5rem',
              maxWidth: '320px',
              width: '100%',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              animation: 'scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--danger)', fontSize: '1.25rem', fontWeight: 800 }}>
              {t.noticeTitle}
            </h3>
            <p className="text-muted" style={{ margin: '0 0 1.25rem 0', fontSize: '0.95rem', lineHeight: 1.4 }}>
              {t.selectAtLeastOne}
            </p>
            <button className="option-button primary w-full" style={{ minHeight: '44px' }} onClick={() => setShowNotice(false)}>
              {t.ok}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
