import { useState, useCallback } from 'react';
import { Navbar } from './components/navbar/Navbar.component';
import { Hero } from './components/hero/Hero.component';
import { Projects } from './components/myProjects/Projects.component';
import { Skills } from './components/skills/Skills.component';
import { Contact } from './components/contact/Contact.component';
import { Footer } from './components/footer/Footer.component';
import { ExperienceComponent } from './components/experience/Experience.component';
import { IntroScreen } from './components/intro/IntroScreen.component';
import { shouldShowIntro } from './components/intro/introSession';
import { ParticleBackground } from './components/particles/ParticleBackground.component';

export const Home = () => {
  const [showIntro, setShowIntro] = useState(shouldShowIntro);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  // La sección activa la calcula el Navbar con el scroll
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Intro - se muestra solo la primera vez en cada sesión */}
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}

      {/* Fondo de partículas - siempre presente */}
      <ParticleBackground />

      {/* Contenido principal */}
      <div
        className="min-h-screen text-slate-100 relative"
        style={{ zIndex: 1 }}
      >
        <Navbar onNavigate={scrollToSection} />
        <Hero onNavigate={scrollToSection} />
        <ExperienceComponent />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
