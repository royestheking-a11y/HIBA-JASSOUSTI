'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return p + 2;
      });
    }, 35);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="loading-screen"
      style={{ background: 'var(--fennel)' }}
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      {/* Blueprint building SVG */}
      <svg
        width="240"
        height="200"
        viewBox="0 0 240 200"
        fill="none"
        aria-hidden="true"
      >
        {/* Ground */}
        <line className="loading-line" x1="20" y1="180" x2="220" y2="180" stroke="#768E78" strokeWidth="2" style={{ animationDelay: '0s' }} />

        {/* Building outlines */}
        {/* Main block */}
        <path className="loading-line" d="M60,180 L60,100 L180,100 L180,180" stroke="#768E78" strokeWidth="2" fill="none" style={{ animationDelay: '0.2s' }} />
        {/* Tower */}
        <path className="loading-line" d="M90,100 L90,60 L150,60 L150,100" stroke="#768E78" strokeWidth="2" fill="none" style={{ animationDelay: '0.4s' }} />
        {/* Arched window */}
        <path className="loading-line" d="M105,180 L105,140 Q120,125 135,140 L135,180" stroke="#768E78" strokeWidth="1.5" fill="none" style={{ animationDelay: '0.6s' }} />
        {/* Windows */}
        <rect className="loading-line" x="70" y="120" width="20" height="16" rx="2" stroke="#768E78" strokeWidth="1.5" style={{ animationDelay: '0.8s' }} />
        <rect className="loading-line" x="150" y="120" width="20" height="16" rx="2" stroke="#768E78" strokeWidth="1.5" style={{ animationDelay: '0.9s' }} />
        {/* Tower windows */}
        <rect className="loading-line" x="100" y="70" width="16" height="12" rx="2" stroke="#768E78" strokeWidth="1.5" style={{ animationDelay: '1.0s' }} />
        <rect className="loading-line" x="124" y="70" width="16" height="12" rx="2" stroke="#768E78" strokeWidth="1.5" style={{ animationDelay: '1.1s' }} />
        {/* Trees */}
        <circle className="loading-line" cx="35" cy="155" r="16" stroke="#768E78" strokeWidth="1.5" style={{ animationDelay: '1.2s' }} />
        <line className="loading-line" x1="35" y1="171" x2="35" y2="180" stroke="#768E78" strokeWidth="1.5" style={{ animationDelay: '1.2s' }} />
        <circle className="loading-line" cx="205" cy="158" r="13" stroke="#768E78" strokeWidth="1.5" style={{ animationDelay: '1.3s' }} />
        <line className="loading-line" x1="205" y1="171" x2="205" y2="180" stroke="#768E78" strokeWidth="1.5" style={{ animationDelay: '1.3s' }} />
        {/* Water reflection lines */}
        <line className="loading-line" x1="40" y1="185" x2="200" y2="185" stroke="#768E78" strokeWidth="1" opacity="0.4" style={{ animationDelay: '1.4s' }} />
        <line className="loading-line" x1="60" y1="190" x2="180" y2="190" stroke="#768E78" strokeWidth="0.8" opacity="0.25" style={{ animationDelay: '1.5s' }} />
      </svg>

      {/* Name */}
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2rem',
            fontWeight: 300,
            color: '#2c3a2e',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Hiba Jassousti
        </h1>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.65rem',
            color: 'var(--fern)',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            marginTop: '4px',
          }}
        >
          {t('loading.subtitle')}
        </p>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: '200px',
          height: '2px',
          background: 'rgba(118,142,120,0.2)',
          borderRadius: '1px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'var(--fern)',
            borderRadius: '1px',
            transition: 'width 0.05s linear',
          }}
        />
      </div>

    </div>
  );
}
