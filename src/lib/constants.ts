import type { Site, Page, Study, Experience, Networks } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/bue221',
  linkedin: 'https://www.linkedin.com/in/bue221/',
  mail: 'mailto:camiloplaza3@gmail.com',
  instagram: 'https://www.instagram.com/ancap.tattoo/',
  medium: 'https://ladvace.medium.com/',
  discord: 'https://discordapp.com/users/163300027618295808',
}

export const NETWORKS: Networks = [
  {
    network: 'github',
    link: 'https://github.com/ivan2214',
  },
  {
    network: 'linkedin',
    link: 'https://www.linkedin.com/in/bongiovanni-ivan45/',
  },
  {
    network: 'gmail',
    link: 'mailto:bongiovanniivan12@gmail.com',
  },
  {
    network: 'x',
    link: 'https://x.com/bongiovanniDev',
  },
  {
    network: 'discord',
    link: 'https://discordapp.com/users/601604373822308375',
  },
]

// Global
export const SITE: Site = {
  TITLE: 'Portafolio de Iván Bongiovanni',
  DESCRIPTION:
    'Iván Bongiovanni - Full Stack Developer - Portfolio, Projects, CV, About Me, Contact, Timezone, Now, Experience, X, Study, Twitter, Github, Linkedin, Email, Discord',
  AUTHOR: 'Iván Bongiovanni',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Trabajos',
  DESCRIPTION: 'Lugares donde he trabajado.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Escribir sobre temas que me apasionan.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Proyectos',
  DESCRIPTION: 'Proyectos recientes en los que he trabajado.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Buscar',
  DESCRIPTION: 'Busque todas las publicaciones y proyectos por palabra clave.',
}

// Study Page
export const STUDIES: Study[] = [
  {
    title: 'Programador Universitario',
    institution:
      'Facultad de Ciencias Exactas y Tecnología de la Universidad Nacional de Tucumán ',
    link: 'https://www.facet.unt.edu.ar',
    date: '2022 - Presente',
  },
  {
    title: 'Full Stack Developer',
    institution: 'Soy Henry',
    link: 'https://www.soyhenry.com/',
    date: '2022 - 2022',
  },
  {
    title: 'Autodidacta',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: 'Presente',
  },
  {
    title: 'Perito Mercantil',
    institution: 'Instituto Padre Manuel Ballesteros',
    link: 'https://www.facebook.com/Colegio.IPMB/',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE: Experience[] = [
  {
    company: 'Tensolite',
    location: 'Los Pocitos,Tucumán, Argentina',
    position: 'Full Stack Developer',
    start: 'Junio 2023',
    link: 'https://tensolite.com/',
    end: 'Diciembre 2023',
    tasks: [
      'Mantenimiento y desarrollo de funcionalidades tanto nuevas como existentes',
      'Componentes y interfaces de usuario para software interno de la empresa y sus clientes externos',
      'Creacion de hooks',
      'Manejo de estado con redux',
      'Desarrollo interno con el uso de React, Redux y Material UI',
      'Uso de la metodología SCRUM',
      'Manejo de APIs',
      'Manejo de bases de datos',
    ],
  },
  {
    company: 'Qali',
    location: 'Peru, Remoto',
    position: 'Desarrollador Frontend',
    isPractices: true,
    start: 'Abril 2032',
    end: 'Junio 2023',
    tasks: [
      'Development of the Spot2 platform with the use of React, Redux, and Material UI',
      'Development map with the use of Google Maps API',
      'Development internal with the use of React, Redux, and Material UI',
      'Testing and debugging',
    ],
  },
  {
    company: 'Imaginamos',
    link: 'https://imaginamos.com/',
    location: 'Bogotá D C, Colombia',
    position: 'Frontend developer',
    start: '2021',
    end: '2021',
    tasks: [
      'Development of the Imaginamos platform with the use of React, Redux, and Material UI',
      'Work in ETB project with the use of React, Redux, and Material UI',
    ],
  },
  {
    company: 'INETUM',
    location: 'Bogotá D C, Colombia',
    position: 'Frontend developer',
    start: '2021',
    link: 'https://www.inetum.com/es',
    end: '2021',
    tasks: [
      'Support in the QA area and bug review',
      'Use of SCRUM methodology',
      'Claro projects with the use of frameworks and libraries such as react and angular',
      'Use of redux toolkit as aproposal which allowed a shorter development time when using this tool',
    ],
  },
  {
    company: 'S I G',
    location: 'Bogotá D C, Colombia',
    position: 'Software developer',
    start: '2021',
    end: '2021',
    tasks: [
      'Development of a dashboard with react admin and chartjs for managing and entering information',
    ],
  },
  {
    company: 'BOOKII',
    location: 'Bogotá D C, Colombia',
    position: 'Software developer',
    start: '2019',
    end: '2021',
    tasks: [
      'Productive collaborationwiththebackendteamforthecreationofthe conversationalclubs',
      'Effective coding of conversational clubs following design guide lines and using the Redux statemanager',
      'Creation of the Bookii page in Spanish and change of texts in cms',
      'Generation of static posts using Gatsby and the Contentful cms for the Bookii blog',
    ],
  },
]
