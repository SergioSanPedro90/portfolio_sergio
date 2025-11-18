export interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const navItems = [
  { id: 'home', label: 'Inicio' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'proyects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' }
];