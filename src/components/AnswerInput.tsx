import React, { useEffect, useState } from 'react';

interface AnswerInputProps {
  options: string[];
  correct: string;
  /** Disabled externally (e.g. after timeout). */
  locked: boolean;
  /** The choice locked in externally on timeout, or null. */
  revealOnly?: boolean;
  onAnswer: (choice: string, correct: boolean) => void;
}

/**
 * Multiple-choice answer grid: 4 large tap targets, one correct + three
 * distractors. Includes double-tap protection and instant green/red feedback.
 */
export const AnswerInput: React.FC<AnswerInputProps> = ({ options, correct, locked, revealOnly, onAnswer }) => {
  const [picked, setPicked] = useState<string | null>(null);

  // Reset when a new question is shown.
  useEffect(() => {
    setPicked(null);
  }, [options]);

  const handlePick = (opt: string) => {
    if (picked || locked) return; // double-tap protection
    setPicked(opt);
    onAnswer(opt, opt === correct);
  };

  const showResult = picked !== null || revealOnly;

  return (
    <div className="options-grid w-full answer-grid">
      {options.map((opt, i) => {
        let cls = 'option-button large answer-option';
        if (showResult) {
          if (opt === correct) cls += ' answer-correct';
          else if (opt === picked) cls += ' answer-wrong';
          else cls += ' answer-dim';
        }
        return (
          <button
            key={`${opt}-${i}`}
            className={cls}
            disabled={showResult || locked}
            onClick={() => handlePick(opt)}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
};
