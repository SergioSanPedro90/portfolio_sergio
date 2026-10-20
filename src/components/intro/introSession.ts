export const INTRO_SEEN_KEY = 'introSeen';

// Solo la primera vez por sesión y nunca con prefers-reduced-motion.
// Si sessionStorage está bloqueado, no se muestra.
export const shouldShowIntro = (): boolean => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    return sessionStorage.getItem(INTRO_SEEN_KEY) === null;
  } catch {
    return false;
  }
};
