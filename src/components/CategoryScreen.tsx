import React, { useState } from 'react';
import { useGame } from '../state/GameContext';
import { translations } from '../i18n/translations';
import { CATEGORIES } from '../data/categories';
import { CategoryId } from '../types';
import { buildImagePool } from '../services/imageFetcher';
import { Play, ChevronLeft, Loader2 } from 'lucide-react';

export const CategoryScreen: React.FC = () => {
  const { state, dispatch } = useGame();
  const t = translations[state.lang as keyof typeof translations] || translations.en;

  const [selected, setSelected] = useState<CategoryId[]>(
    state.categories.length > 0 ? state.categories : []
  );
  const [isLoading, setIsLoading] = useState(false);
  // 'empty'  -> no category selected; 'pool' -> not enough images fetched
  const [notice, setNotice] = useState<null | 'empty' | 'pool'>(null);

  const toggle = (id: CategoryId) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]));
  };

  const handleStart = async () => {
    if (selected.length === 0) {
      setNotice('empty');
      return;
    }
    setIsLoading(true);
    try {
      const pool = await buildImagePool(selected, state.players.length, state.totalRounds, state.lang);

      // Pre-game pool validation: need one unique image per turn, plus at least
      // 4 distinct answers so the multiple choice can be built.
      const required = state.players.length * state.totalRounds;
      const distinctAnswers = new Set(pool.map((p) => p.answers.primary)).size;

      if (pool.length < required || distinctAnswers < 4) {
        setNotice('pool');
        setIsLoading(false);
        return;
      }

      dispatch({ type: 'SET_POOL', payload: { pool } });
      dispatch({ type: 'START_GAME', payload: { categories: selected } });
    } catch {
      setNotice('pool');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="screen fade-in">
      <div className="flex items-center w-full" style={{ gap: '0.5rem', marginBottom: '0.25rem' }}>
        <button
          className="icon-button outline"
          style={{ width: 44, height: 44 }}
          onClick={() =>
            dispatch({
              type: 'CONTINUE_TO_CATEGORIES',
              payload: { players: state.players, totalRounds: state.totalRounds, lang: state.lang },
            })
          }
          aria-label={t.back}
          disabled={isLoading}
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
              disabled={isLoading}
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
        className={`option-button primary large mt-4 ${selected.length === 0 || isLoading ? 'visually-disabled' : ''}`}
        onClick={handleStart}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 size={20} className="icon" style={{ animation: 'spin 1s linear infinite' }} />
            <span>{t.loadingImages}</span>
          </>
        ) : (
          <>
            <Play size={20} className="icon" />
            <span>{t.start}</span>
          </>
        )}
      </button>

      {notice && (
        <div className="modal-overlay" onClick={() => setNotice(null)}>
          <div
            style={{
              background: 'var(--card)',
              border: '2px solid var(--border-hover)',
              borderRadius: '16px',
              padding: '1.5rem',
              maxWidth: '340px',
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
              {notice === 'empty' ? t.selectAtLeastOne : t.poolTooFew}
            </p>
            <button className="option-button primary w-full" style={{ minHeight: '44px' }} onClick={() => setNotice(null)}>
              {t.ok}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
