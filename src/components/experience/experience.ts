export interface Experience {
  role: string;
  company: string;
  // Tipo de relación y ubicación (p. ej. "Freelance · En remoto")
  type: string;
  period: string;
  // Contexto opcional: tamaño de equipo, sector...
  team?: string;
  bullets: string[];
  stack: string[];
  link?: string;
}

export const experiencesList: Experience[] = [
  {
    role: 'Desarrollador Frontend (Web y Móvil)',
    company: 'Autoreparación A. Ortiz (Taller Ortiz)',
    type: 'Freelance · Barcelona, en remoto',
    period: 'Agosto 2026 – Actualidad',
    team: 'Equipo de 2',
    bullets: [
      'Desarrollo el frontend completo de un software de gestión a medida para un taller de carrocería y pintura, en producción y en uso diario, en sustitución de órdenes en papel y hojas de Excel.',
      'Web de gestión para el propietario (Next.js + TypeScript): órdenes de trabajo, entrada de vehículos, clientes y tarifas por cliente, albaranes, facturación, abonos y gestión de usuarios.',
      'App móvil para los pintores (React Native + Expo): consulta de órdenes, creación de albaranes y cambio de estados. Distribuida como APK interno.',
      'Integración con la API REST en .NET de mi compañero, con autenticación JWT, y coordinación de los cambios de contrato de la API.',
    ],
    stack: ['Next.js', 'React Native', 'Expo', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Axios', 'JWT', 'Vercel', 'Railway'],
  },
  {
    role: 'Desarrollador Frontend',
    company: 'FluentMinds',
    type: 'Freelance · En remoto',
    period: 'Febrero 2026 – Marzo 2026',
    team: 'Equipo de 4',
    bullets: [
      'Desarrollé el componente Navbar en Next.js y TypeScript, con navegación adaptada a la estructura multilenguaje de la app.',
      'Implementé la sección Leafy & Spark, que presenta a las mascotas de la plataforma, cuidando la UX y la coherencia visual.',
      'Adapté mis componentes al sistema de internacionalización (i18n) del equipo, con soporte para español, inglés y japonés.',
      'Trabajo en equipo con Git/GitHub, ramas por feature y pull requests.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'i18n', 'Git'],
    link: 'https://www.leafyandspark.com',
  },
  {
    role: 'Responsable de la app móvil',
    company: 'Vyntra',
    type: 'Colaboración',
    period: 'Febrero 2026 – Abril 2026',
    team: 'Startup del sector energético, equipo de 12',
    bullets: [
      'Desarrollé en 3 semanas la app móvil con React Native, Expo, TypeScript y Zustand, coordinando a un desarrollador a mi cargo.',
      'Desarrollé varias secciones de la web corporativa (vyntraenergy.com).',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'Expo Router'],
  },
  {
    role: 'Desarrollador Frontend',
    company: 'Brand Genius Company',
    type: 'Freelance · En remoto',
    period: 'Noviembre 2025 – Diciembre 2025',
    team: 'Equipo de 4',
    bullets: [
      'Desarrollé los componentes Navbar y Hero en React, con diseño responsive y coherente con la identidad de marca.',
      'Investigué e implementé la primera versión de la integración con Google Sheets mediante Google Apps Script para capturar los formularios de contacto.',
      'Participé en la integración con Calendly para la reserva de citas desde la landing.',
    ],
    stack: ['React', 'JavaScript', 'Google Apps Script', 'Git'],
    link: 'https://brandgeniuscompany.com',
  },
  {
    role: 'Matricero',
    company: 'Gestamp',
    type: 'Por cuenta ajena · Bizkaia',
    period: 'Enero 2013 – Febrero 2026 (13 años)',
    bullets: [
      'Ajuste y mantenimiento de moldes para piezas de automoción visibles y de chasis, con planos técnicos y tolerancias exigentes.',
      'Puesta a punto de moldes en plantas de clientes en España y en el extranjero, resolviendo incidencias sobre el terreno.',
    ],
    stack: [],
  },
];
