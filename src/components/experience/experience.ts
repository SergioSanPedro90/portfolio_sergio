import { Briefcase, type LucideIcon } from 'lucide-react';

export interface Experience {
  year: string;
  period: string;
  title: string;
  company: string;
  role: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
  link?: string;
}

export const experiencesList: Experience[] = [
  {
    year: '2025',
    period: 'Dic 2025 — Ene 2026',
    title: 'Brand Genius',
    company: 'Agencia de Marketing Digital',
    role: 'Web Developer',
    icon: Briefcase,
    description: 'Desarrollo de landing page corporativa con sistema de automatización completo. Integración de formularios con Google Sheets para generación automática de reportes y sistema de agendamiento con Calendly.',
    skills: ['React', 'Tailwind CSS', 'Google Sheets', 'Calendly', 'TypeScript', 'Responsive'],
    link: 'https://www.brandgeniuscompany.com/',
  },
  {
    year: '2026',
    period: '2026',
    title: 'Vyntra Energy',
    company: 'Empresa de energía solar P2P',
    role: 'Frontend Developer',
    icon: Briefcase,
    description: 'Desarrollo de landing page corporativa para empresa del sector energético solar. Diseño responsive y optimizado con soporte multiidioma (español e inglés).',
    skills: ['React', 'Tailwind CSS', 'Responsive', 'JavaScript', 'Responsive'],
    link: 'https://www.vyntraenergy.com',
  },
  {
    year: '2026',
    period: '2026',
    title: 'FluentMinds',
    company: 'Plataforma de aprendizaje de idiomas',
    role: 'Frontend Developer',
    icon: Briefcase,
    description: 'Desarrollo de aplicación web multilenguaje para plataforma de aprendizaje de idiomas. Implementación de sistema de internacionalización (i18n) con soporte para español, inglés y japonés.',
    skills: ['Next.js', 'TypeScript', 'i18n', 'Responsive'],
    link: 'https://www.leafyandspark.com/es',
  },
];