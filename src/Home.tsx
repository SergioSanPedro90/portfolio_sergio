import { useState, useEffect } from 'react';
import { Navbar } from './assets/components/navbar/Navbar.component';
import { Hero } from './assets/components/hero/Hero.component';
import { About } from './assets/components/aboutMe/AboutMe.component';
import { Skills } from './assets/components/skills/Skills.component';
import { Projects } from './assets/components/myProjects/projects.component';
import { Footer } from './assets/components/footer/footer.component';
import { Contact } from './assets/components/contact/contact.component';

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
      const sections = ['home', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'];
      
      // Detectar si estamos cerca del final de la página
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isNearBottom) {
        // Si estamos cerca del final, activar contacto
        setActiveSection('contacto');
        return;
      }
      
      // Encuentra qué sección está visible en pantalla
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Si la sección está en el viewport (visible)
          // Usamos un margen más amplio para mejor detección
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Ejecutar al cargar la página
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};