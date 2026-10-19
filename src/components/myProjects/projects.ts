export interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  imageHover?: string;
  image2?: string;
  imageHover2?: string;
  demoLink?: string;
  // Texto del botón de demoLink (por defecto "Ver proyecto")
  linkLabel?: string;
  githubLink?: string;
  isMobile?: boolean;
  isApk?: boolean;
  apkLink?: string;
  highlights?: string[];
  featured?: boolean;
  // Sustituye los botones de enlace (p. ej. proyectos de cliente con repos privados)
  clientLabel?: string;
  playStoreLink?: string;
  playStoreComingSoon?: boolean;
  // Sin capturas públicas: se muestra PrivatePreview en lugar de imágenes
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    title: "GurePintxo",
    description:
      "App móvil para descubrir los bares de pintxos de Euskadi, guardar favoritos y montar rutas. Usa el dataset oficial del Gobierno Vasco (bares del club Euskadi Gastronomika) y la comunidad puede sugerir bares nuevos.",
    highlights: [
      "App React Native + Expo (TypeScript, Expo Router, NativeWind), en 3 idiomas (es/eu/en)",
      "Mapa con bares cercanos, reseñas con fotos (Cloudinary), favoritos y rutas que se abren en Google Maps",
      "Backend Spring Boot + MySQL con JWT, desplegado en Railway con Docker; emails con Brevo",
      "Web de presentación en Next.js en 3 idiomas (gurepintxo.com)",
    ],
    tech: ["React Native", "Expo", "TypeScript", "NativeWind", "Spring Boot", "MySQL", "Docker", "Next.js"],
    image: "/images/gurePintxo/captura-1.png",
    imageHover: "/images/gurePintxo/captura-2.png",
    image2: "/images/gurePintxo/captura-3.png",
    imageHover2: "/images/gurePintxo/captura-4.png",
    demoLink: "https://gurepintxo.com",
    linkLabel: "gurepintxo.com",
    // Cuando esté publicada: añadir playStoreLink y quitar playStoreComingSoon
    playStoreComingSoon: true,
    isMobile: true,
    featured: true,
  },
  {
    title: "Taller Ortiz — gestión de taller",
    description:
      "Web para el dueño y app para los pintores. Órdenes de trabajo, tarifas por cliente, facturación, abonos y resúmenes en PDF/Excel. Usada a diario en el taller.",
    highlights: [
      "Web (Next.js + TypeScript): órdenes, clientes y tarifas, facturación y abonos, login con JWT (Zustand + Axios), pensada para usarse en tablet",
      "App (React Native + Expo): el pintor ve y cierra sus órdenes y crea albaranes desde el móvil, sin ver precios",
      "Backend .NET Clean Architecture + PostgreSQL desplegado en Railway (hecho por mi compañero)",
    ],
    tech: ["Next.js", "TypeScript", "React Native", "Expo", "Tailwind", "Zustand", "Axios", ".NET", "PostgreSQL"],
    isPrivate: true,
    clientLabel: "Proyecto de cliente · En producción",
  },
  {
    title: "Surf para Dummies",
    description:
      "App móvil de previsión de surf para el Cantábrico. Previsiones reales para 20 spots ordenados por ubicación, webcams en directo, navegación a Google Maps y autenticación. Pensada para surfistas que no quieren descifrar Windguru.",
    tech: ["React Native", "TypeScript", "Expo", "Supabase", "Open-Meteo API", "Geolocation"],
    image: "/images/appSurfDummies/home_surf_dummies.jpg",
    imageHover: "/images/appSurfDummies/detalles_playa_surf_dummies.jpg",
    image2: '/images/appSurfDummies/registro_surf_dummies.jpg',
    imageHover2: '/images/appSurfDummies/perfil_surf_dummies.jpg',
    apkLink: "https://github.com/SergioSanPedro90/app-surf-para-dummies/releases/download/v0.2.0/application-81082b78-553a-4e5f-b09a-24a91747303d.apk",
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
