import { useEffect, useState } from 'react';
import { INTRO_SEEN_KEY } from './introSession';

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [lifting, setLifting] = useState(false);

  useEffect(() => {
    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, '1');
    } catch {
      // Sin sessionStorage la intro no se habría mostrado; nada que guardar
    }

    // Duración total: 650 ms visible + 350 ms de salida = 1 s
    let completeTimer: ReturnType<typeof setTimeout>;
    const liftTimer = setTimeout(() => {
      setLifting(true);
      completeTimer = setTimeout(onComplete, 350);
    }, 650);

    // Saltar con cualquier tecla
    window.addEventListener('keydown', onComplete);
    return () => {
      clearTimeout(liftTimer);
      clearTimeout(completeTimer);
      window.removeEventListener('keydown', onComplete);
    };
  }, [onComplete]);

  return (
    <>
      <style>{`
        @keyframes introFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes introLine {
          from { width: 0; }
          to   { width: 56px; }
        }
        @keyframes introTag {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        onClick={onComplete}
        role="button"
        aria-label="Saltar introducción"
        style={{
          cursor: 'pointer',
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          background: '#1a1814',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          transform: lifting ? 'translateY(-100%)' : 'translateY(0)',
          transition: lifting
            ? 'transform 0.35s cubic-bezier(0.76, 0, 0.24, 1)'
            : 'none',
        }}
      >
        {/* Glow suave detrás del nombre */}
        <div style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(42,82,190,0.25), transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />

        {/* Nombre */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: 'clamp(3rem, 8vw, 6.5rem)',
          color: '#f5f3ef',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          animation: 'introFadeUp 0.4s ease 0.05s both',
          position: 'relative',
        }}>
          Sergio{' '}
          <span style={{ color: '#2a52be' }}>San Pedro</span>
        </h1>

        {/* Línea */}
        <div style={{
          height: '1px',
          background: '#2a52be',
          opacity: 0.6,
          animation: 'introLine 0.3s ease 0.25s both',
        }} />

        {/* Tagline */}
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontWeight: 300,
          fontSize: 'clamp(0.65rem, 1.4vw, 0.82rem)',
          letterSpacing: '0.25em',
          color: '#9b9690',
          textTransform: 'uppercase',
          animation: 'introTag 0.3s ease 0.35s both',
        }}>
          Full Stack Developer
        </p>
      </div>
    </>
  );
};