import { useState, useEffect } from 'react';
import { Navbar } from './assets/components/navbar/Navbar.component';
import { Hero } from './assets/components/hero/Hero.component';
import { Projects } from './assets/components/myProjects/projects.component';
import { Footer } from './assets/components/footer/footer.component';
import { Contact } from './assets/components/contact/contact.component';
import { Experience } from './assets/components/experience/experience';

export const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  // Detectar en qué sección estás mientras haces scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'proyectos', 'contacto']; // ← Solo 3 secciones
      
      // Detectar si estamos cerca del final de la página
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isNearBottom) {
        setActiveSection('contacto');
        return;
      }
      
      // Encuentra qué sección está visible en pantalla
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} />
      <Experience/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};