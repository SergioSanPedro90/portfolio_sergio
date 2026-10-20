import { useEffect, useState } from 'react';
import { INTRO_SEEN_KEY } from './introSession';

// Duración total de la intro (entrada + pausa + salida)
const INTRO_DURATION_MS = 2800;
// Fade-out final, incluido en INTRO_DURATION_MS
const INTRO_EXIT_MS = 700;

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, '1');
    } catch {
      // Sin sessionStorage la intro no se habría mostrado; nada que guardar
    }

    // Entrada (~1,6 s) + pausa con el contenido visible + fade-out de INTRO_EXIT_MS
    const leaveTimer = setTimeout(() => setLeaving(true), INTRO_DURATION_MS - INTRO_EXIT_MS);
    const completeTimer = setTimeout(onComplete, INTRO_DURATION_MS);

    // Saltar con cualquier tecla
    window.addEventListener('keydown', onComplete);
    return () => {
      clearTimeout(leaveTimer);
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
          opacity: leaving ? 0 : 1,
          transform: leaving ? 'translateY(-16px)' : 'translateY(0)',
          transition: leaving
            ? `opacity ${INTRO_EXIT_MS}ms ease, transform ${INTRO_EXIT_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
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
          animation: 'introFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both',
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
          animation: 'introLine 0.7s ease 0.6s both',
        }} />

        {/* Tagline */}
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontWeight: 300,
          fontSize: 'clamp(0.65rem, 1.4vw, 0.82rem)',
          letterSpacing: '0.25em',
          color: '#9b9690',
          textTransform: 'uppercase',
          animation: 'introTag 0.7s ease 0.85s both',
        }}>
          Full Stack Developer
        </p>
      </div>
    </>
  );
};