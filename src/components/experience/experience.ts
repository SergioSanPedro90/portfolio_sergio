import { GraduationCap, Code2, type LucideIcon } from 'lucide-react';

export interface Experience {
  year: string;
  subtitle: string;
  title: string;
  company: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
}

export const experiencesList: Experience[] = [
  
  {
    year: '04/2025',
    subtitle: '6 meses',
    title: '4Geeks Academy',
    company: 'Bootcamp Full-Stack',
    icon: GraduationCap,
    description: 'Formación intensiva en desarrollo web full-stack. Proyectos: sistema de gestión de contactos, biblioteca con JWT, aplicación colaborativa, integración de APIs externas.',
    skills: ['React', 'JavaScript', 'Python', 'Flask', 'SQLAlchemy', 'Git', 'GitHub']
  },
  {
    year: '11/2025',
    subtitle: 'Proyecto para empresa',
    title: 'Brand Genius S.A.C',
    company: 'Web Developer',
    icon: Code2,
    description: 'Desarrollo de landing page corporativa con sistema de automatización completo. Integración de formularios con Google Sheets para generación automática de reportes y sistema de agendamiento con Calendly.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Google Sheets API', 'Calendly', 'Automatización']
  },
  {
    year: '2025',
    subtitle: 'Presente',
    title: 'Freelance',
    company: 'Full Stack Developer',
    icon: Code2,
    description: 'Desarrollo de aplicaciones web full-stack con React, TypeScript y Python. Especializado en landing pages responsivas, sistemas de automatización con APIs y soluciones personalizadas.',
    skills: ['React', 'TypeScript', 'Python', 'Flask', 'Tailwind CSS', 'REST APIs']
  },
  
];