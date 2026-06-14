import React, { useState, useEffect } from 'react';
import { ImageOff, Loader2 } from 'lucide-react';

interface ImageRevealProps {
  src: string;
  /** When false, the image is shown sharp immediately (e.g. on the result screen). */
  animate?: boolean;
}

/**
 * Shows the quiz image. It starts slightly blurred and becomes sharp after ~2s
 * (a subtle effect, not aggressive pixelation). Falls back to a placeholder if
 * the image fails to load.
 */
export const ImageReveal: React.FC<ImageRevealProps> = ({ src, animate = true }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [sharp, setSharp] = useState(!animate);

  useEffect(() => {
    // Reset when the source changes.
    setLoaded(false);
    setError(false);
    setSharp(!animate);
  }, [src, animate]);

  useEffect(() => {
    if (!animate || !loaded) return;
    const timer = setTimeout(() => setSharp(true), 2000);
    return () => clearTimeout(timer);
  }, [loaded, animate]);

  return (
    <div className="image-reveal">
      {error ? (
        <div className="image-reveal-fallback">
          <ImageOff size={48} />
        </div>
      ) : (
        <>
          {!loaded && (
            <div className="image-reveal-fallback">
              <Loader2 size={36} className="loading-spinner" />
            </div>
          )}
          <img
            src={src}
            alt=""
            className={`image-reveal-img ${sharp ? 'sharp' : 'blurred'}`}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            draggable={false}
          />
        </>
      )}
    </div>
  );
};
