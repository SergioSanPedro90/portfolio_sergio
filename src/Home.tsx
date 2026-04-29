import { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/navbar/Navbar.component';
import { Hero } from './components/hero/Hero.component';
import { Projects } from './components/myProjects/Projects.component';
import { Contact } from './components/contact/Contact.component';
import { Footer } from './components/footer/Footer.component';
import { ExperienceComponent } from './components/experience/Experience.component';
import { IntroScreen } from './components/intro/IntroScreen.component';
import { ParticleBackground } from './components/particles/ParticleBackground.component';

export const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'Experiencia', 'proyectos', 'contacto'];

      const isNearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      if (isNearBottom) {
        setActiveSection('contacto');
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Intro - se muestra solo la primera vez */}
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}

      {/* Fondo de partículas - siempre presente */}
      <ParticleBackground />

      {/* Contenido principal */}
      <div
        className="min-h-screen text-slate-800 relative"
        style={{ zIndex: 1 }}
      >
        <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
        <Hero onNavigate={scrollToSection} />
        <ExperienceComponent />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};