// Speed-based scoring for a single timed answer.
// Maximum points for an instant answer, decreasing linearly until the timer ends.
export const TIMER_MS = 30000; // 30 second countdown
export const MAX_POINTS = 1000;
const FULL_POINTS_MS = 3000; // answers within 3s get the maximum

/**
 * Points for a correct answer given how long it took (ms).
 * <=3s -> 1000, then linear down to 0 at the timer end. Rounded to 10s.
 */
export const computeSpeedPoints = (elapsedMs: number, timerMs = TIMER_MS): number => {
  if (elapsedMs <= FULL_POINTS_MS) return MAX_POINTS;
  if (elapsedMs >= timerMs) return 0;
  const fraction = (timerMs - elapsedMs) / (timerMs - FULL_POINTS_MS);
  return Math.max(0, Math.round((fraction * MAX_POINTS) / 10) * 10);
};
