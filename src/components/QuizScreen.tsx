import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useGame } from '../state/GameContext';
import { translations } from '../i18n/translations';
import { CATEGORIES } from '../data/categories';
import { shuffleArray } from '../utils/arrayUtils';
import { computeSpeedPoints, TIMER_MS } from '../utils/scoring';
import { ImageReveal } from './ImageReveal';
import { SpeedTimer } from './SpeedTimer';
import { AnswerInput } from './AnswerInput';

const FEEDBACK_MS = 1400;

type Answered = { correct: boolean; points: number; timedOut: boolean } | null;

export const QuizScreen: React.FC = () => {
  const { state, dispatch } = useGame();
  const t = translations[state.lang as keyof typeof translations] || translations.en;
  const tr = t as Record<string, string>;
  const item = state.currentItem;
  const cat = item ? CATEGORIES.find((c) => c.id === item.category) : undefined;

  const hasSecondary = !!(
    item?.answers.secondary &&
    (item?.distractors.secondary?.length ?? 0) >= 3 &&
    cat?.questionKeys.secondary
  );

  const [stage, setStage] = useState<'countdown' | 'question'>('countdown');
  const [count, setCount] = useState(3);
  const [stepIdx, setStepIdx] = useState(0); // 0 = primary, 1 = secondary
  const [answered, setAnswered] = useState<Answered>(null);

  const remainingRef = useRef(TIMER_MS);
  const accPointsRef = useRef(0);
  const primaryCorrectRef = useRef(false);
  const secondaryCorrectRef = useRef(false);

  // Build shuffled options once per item.
  const primaryOptions = useMemo(
    () => (item ? shuffleArray([item.answers.primary, ...item.distractors.primary.slice(0, 3)]) : []),
    [item]
  );
  const secondaryOptions = useMemo(
    () =>
      item?.answers.secondary
        ? shuffleArray([item.answers.secondary, ...(item.distractors.secondary ?? []).slice(0, 3)])
        : [],
    [item]
  );

  // 3-2-1 countdown.
  useEffect(() => {
    if (stage !== 'countdown') return;
    if (count <= 0) {
      remainingRef.current = TIMER_MS;
      setStage('question');
      return;
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 800);
    return () => clearTimeout(timer);
  }, [stage, count]);

  // Advance after showing feedback.
  useEffect(() => {
    if (!answered) return;
    const timer = setTimeout(() => {
      if (stepIdx === 0 && hasSecondary) {
        remainingRef.current = TIMER_MS;
        setStepIdx(1);
        setAnswered(null);
      } else {
        dispatch({
          type: 'END_TURN',
          payload: {
            points: accPointsRef.current,
            primaryCorrect: primaryCorrectRef.current,
            secondaryCorrect: hasSecondary ? secondaryCorrectRef.current : undefined,
          },
        });
      }
    }, FEEDBACK_MS);
    return () => clearTimeout(timer);
  }, [answered]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!item) return <div className="screen center-content">…</div>;

  const isSecondaryStep = stepIdx === 1;
  const correct = isSecondaryStep ? item.answers.secondary! : item.answers.primary;
  const options = isSecondaryStep ? secondaryOptions : primaryOptions;
  const promptKey = isSecondaryStep ? cat?.questionKeys.secondary : cat?.questionKeys.primary;
  const prompt = (promptKey && tr[promptKey]) || '';

  const resolve = (isCorrect: boolean, timedOut: boolean) => {
    const points = isCorrect ? computeSpeedPoints(TIMER_MS - remainingRef.current) : 0;
    accPointsRef.current += points;
    if (isSecondaryStep) secondaryCorrectRef.current = isCorrect;
    else primaryCorrectRef.current = isCorrect;
    setAnswered({ correct: isCorrect, points, timedOut });
  };

  if (stage === 'countdown') {
    return (
      <div className="screen center-content">
        <div className="text-muted glow-text" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
          {t.roundLabel} {state.currentRound} / {state.totalRounds}
        </div>
        <p className="subtitle mt-4">{t.getReady}</p>
        <div key={count} className="countdown-number scale-in">{count > 0 ? count : ''}</div>
      </div>
    );
  }

  return (
    <div className="screen fade-in" style={{ gap: '0.85rem' }}>
      <div className="flex justify-between items-center w-full">
        <span className="text-muted" style={{ fontSize: '0.95rem', fontWeight: 700 }}>
          {t.roundLabel} {state.currentRound} / {state.totalRounds}
        </span>
        <span className="text-muted" style={{ fontSize: '0.95rem', fontWeight: 700 }}>
          {state.players[state.currentPlayerIndex]?.name}
        </span>
      </div>

      <ImageReveal src={item.imageUrl} />

      <SpeedTimer
        key={`timer-${stepIdx}`}
        durationMs={TIMER_MS}
        running={!answered}
        onExpire={() => { if (!answered) resolve(false, true); }}
        onTick={(rem) => { remainingRef.current = rem; }}
      />

      <h2 className="quiz-question">{prompt}</h2>

      {answered ? (
        <div className={`answer-feedback ${answered.correct ? 'ok' : 'bad'}`}>
          {answered.timedOut ? t.timeUp : answered.correct ? t.correct : t.wrong}
          {answered.correct && <span className="answer-feedback-pts"> +{answered.points}</span>}
        </div>
      ) : (
        <div style={{ height: '1.9rem' }} />
      )}

      <AnswerInput
        key={`answers-${stepIdx}`}
        options={options}
        correct={correct}
        locked={!!answered}
        revealOnly={!!answered}
        onAnswer={(_, isCorrect) => resolve(isCorrect, false)}
      />
    </div>
  );
};
