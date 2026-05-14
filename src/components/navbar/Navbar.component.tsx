import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, type NavbarProps } from './navbarMenu';

export const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Obtener todas las secciones
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      })).filter(section => section.element !== null);

      // Obtener la posición del scroll
      const scrollPosition = window.scrollY + 100; // offset para el navbar
      
      // Detectar si estamos al final de la página
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      
      if (isAtBottom) {
        setCurrentSection('contact');
        return;
      }

      // Encontrar la sección actual basada en la posición
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            setCurrentSection(section.id);
            break;
          }
        }
      }
    };

    // Ejecutar al montar
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-800/70 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-full px-6 sm:px-10 lg:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="sm:text-2xl text-lg font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sergio San Pedro Álvarez
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  currentSection === item.id
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-6 py-4 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                currentSection === item.id
                  ? 'text-cyan-400 bg-cyan-500/10'
                  : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};