import React, { useEffect, useRef, useState } from 'react';

interface SpeedTimerProps {
  durationMs: number;
  running: boolean;
  onExpire: () => void;
  /** Reports remaining milliseconds each frame (for point calculation). */
  onTick?: (remainingMs: number) => void;
}

/**
 * Visible countdown bar. Shrinks over `durationMs` and shifts colour
 * green -> yellow -> red. Calls onExpire when it reaches zero.
 */
export const SpeedTimer: React.FC<SpeedTimerProps> = ({ durationMs, running, onExpire, onTick }) => {
  const [remaining, setRemaining] = useState(durationMs);
  const onExpireRef = useRef(onExpire);
  const onTickRef = useRef(onTick);
  onExpireRef.current = onExpire;
  onTickRef.current = onTick;

  useEffect(() => {
    if (!running) return;
    const start = performance.now();
    let raf = 0;
    const tick = () => {
      const elapsed = performance.now() - start;
      const rem = Math.max(0, durationMs - elapsed);
      setRemaining(rem);
      onTickRef.current?.(rem);
      if (rem <= 0) {
        onExpireRef.current();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [running, durationMs]);

  const fraction = Math.max(0, Math.min(1, remaining / durationMs));
  const color = fraction > 0.5 ? 'var(--success)' : fraction > 0.2 ? 'var(--gold)' : 'var(--danger)';
  const seconds = Math.ceil(remaining / 1000);

  return (
    <div className="speed-timer">
      <div className="speed-timer-track">
        <div className="speed-timer-fill" style={{ width: `${fraction * 100}%`, background: color }} />
      </div>
      <span className="speed-timer-seconds" style={{ color }}>{seconds}s</span>
    </div>
  );
};
