export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  imageHover: string;
  image2?: string;
  imageHover2?: string;
  demoLink?: string;
  githubLink: string;
  isMobile?: boolean;
  isApk?: boolean;
  apkLink?: string;
}

export const projects: Project[] = [
  {
    title: "Surf para Dummies",
    description:
      "App móvil de previsión de surf para el Cantábrico. Previsiones reales para 20 spots ordenados por ubicación, webcams en directo, navegación a Google Maps y autenticación. Pensada para surfistas que no quieren descifrar Windguru.",
    tech: ["React Native", "TypeScript", "Expo", "Supabase", "Open-Meteo API", "Geolocation"],
    image: "/images/appSurfDummies/home_surf_dummies.jpg",
    imageHover: "/images/appSurfDummies/detalles_playa_surf_dummies.jpg",
    image2: '/images/appSurfDummies/registro_surf_dummies.jpg',
    imageHover2: '/images/appSurfDummies/perfil_surf_dummies.jpg',
    apkLink: "https://expo.dev/accounts/sergiosanpedro/projects/surf-para-dummies/builds/67e2d0d1-719e-4834-9741-831eb8be917b",
    githubLink: "https://github.com/SergioSanPedro90/app-surf-para-dummies",
    isMobile: true,
    isApk: true
  },
  {
    title: "Proyecto Bootcamp",
    description:
      "Aplicación web full-stack enfocada al universo de Dragones y Mazmorras desarrollada en equipo de 4 personas. Sistema de autenticación completo con registro tradicional y Google OAuth, envío automático de emails de bienvenida con SendGrid, y base de datos relacional. Proyecto que integra frontend y backend con gestión de estado y API REST.",
    tech: ["React", "Flask", "JavaScript", "Python", "Google OAuth", "SendGrid", "SQLAlchemy", "PostgreSQL", "JWT"],
    image: "/images/proyectoBootcamp/Captura de pantalla 2025-11-19 201131.png",
    imageHover: "/images/proyectoBootcamp/Captura de pantalla 2025-11-20 101018.png",
    demoLink: "https://sample-service-name-mv9q.onrender.com/",
    githubLink: "https://github.com/SergioSanPedro90/SergioSanPedro-ProyectoFinal",
  },
  {
    title: "Landing Page Magic The Gathering",
    description:
      "Galería visual de cartas de Magic: The Gathering más buscadas. Cada carta enlaza directamente a la tienda online para facilitar la compra. Proyecto personal que combina mi pasión por Magic con desarrollo web.",
    tech: ["React", "JavaScript", "Bootstrap", "Netlify"],
    image: "/images/landingMTG/Captura de pantalla 2025-11-20 094031.png",
    imageHover: "/images/landingMTG/Captura de pantalla 2025-11-20 094056.png",
    demoLink: "https://top-magics-cards.netlify.app/",
    githubLink: "https://github.com/SergioSanPedro90/SergioSanPedro-LandingPage-Magic",
  },
  {
    title: "Blog de Naruto",
    description:
      "Blog interactivo con integración de la API oficial de Naruto. Sistema de favoritos con persistencia en LocalStorage. Context API para estado global y diseño temático responsive del anime.",
    tech: ["React", "JavaScript", "Naruto API", "LocalStorage", "React Router"],
    image: "/images/blogNaruto/Captura de pantalla 2025-12-02 143012.png",
    imageHover: "/images/blogNaruto/Captura de pantalla 2025-12-02 143046.png",
    demoLink: "https://naruto-blog.netlify.app/",
    githubLink: "https://github.com/SergioSanPedro90/SergioSanPedro-BlogNaruto",
  },
];
