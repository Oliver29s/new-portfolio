import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
import { appClima, colores, crud, ecomerce, pokeAPi, rick } from './imagenes';



export const links = [
  {
    id: 1,
    name: 'Inicio',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Experiencia',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portafolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contacto',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Steve',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Milner',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '27 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Tunisian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Tunis',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+21621184010',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'you@mail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'steve.milner',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'French, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '12+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '97+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '81+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '53+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - PRESENT',
    title: 'Web Developer <span> Envato </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2013 - 2018',
    title: 'UI/UX Designer <span> Themeforest </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2005 - 2013',
    title: 'Consultant <span> Sitio webhive </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'Engineering Degree <span> Oxford University </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2012',
    title: 'Master Degree <span> KIEV University </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2009',
    title: 'Bachelor Degree <span> Tunis High School </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '25',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: appClima,
    title: 'Aplicacion del clima',
    details: [
      {
        icon: <FiFileText />,
        title: 'Projecto : ',
        desc: 'Sitio web',
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Lenguajes : ',
        desc: 'React + Javascript + CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'visualización : ',
        desc: <a href="https://lovely-creponne-8056fd.netlify.app/">"https://lovely-creponne-8056fd.netlify.app/"</a> ,
      },
    ],
  },

  {
    id: 2,
    img: crud,
    title: 'Crear Actualizar Elmininar usuarios',
    details: [
      {
        icon: <FiFileText />,
        title: 'Projecto : ',
        desc: 'Sitio web',
      },
      {
        icon: <FiUser />,
        title: 'Cliente: ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Lenguajes : ',
        desc: 'React.js + node.js + Express',
      },
      {
        icon: <FiExternalLink />,
        title: 'visualización : ',
        desc: <a href="https://exquisite-strudel-1a370b.netlify.app">https://exquisite-strudel-1a370b.netlify.app</a> ,
      },
    ],
  },

  {
    id: 3,
    img: colores,
    title: 'Generador de colores',
    details: [
      {
        icon: <FiFileText />,
        title: 'Projecto : ',
        desc: 'Sitio web',
      },
      {
        icon: <FiUser />,
        title: 'Cliente: ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Lenguajes : ',
        desc: 'react.js + reactComponents',
      },
      {
        icon: <FiExternalLink />,
        title: 'visualización : ',
        desc: <a href="https://stirring-scone-a6c3e9.netlify.app ">https://stirring-scone-a6c3e9.netlify.app </a>,
      },
    ],
  },

  {
    id: 4,
    img: rick,
    title: 'Rick and Morty Web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Projecto : ',
        desc: 'Sitio web',
      },
      {
        icon: <FiUser />,
        title: 'Cliente: ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Lenguajes : ',
        desc: 'React.js + Nest.js + Prisma',
      },
      {
        icon: <FiExternalLink />,
        title: 'visualización : ',
        desc: <a href="https://splendid-dieffenbachia-066ea3.netlify.app">https://splendid-dieffenbachia-066ea3.netlify.app</a>,
      },
    ],
  },

  {
    id: 5,
    img: pokeAPi,
    title: 'Aplicacion web de pokemons',
    details: [
      {
        title: 'Projecto : ',
        desc: 'Sitio web',
      },
      {
        title: 'Cliente: ',
        desc: 'Dribble',
      },
      {
        title: 'Lenguajes : ',
        desc: 'React JS + Redux + Node JS + Nest.js',
      },
      {
        title: 'visualización : ',
        desc: <a href="https://velvety-dusk-150652.netlify.app/#/">https://velvety-dusk-150652.netlify.app/#/</a>,
      },
    ],
  },

  {
    id: 6,
    img: ecomerce,
    title: 'E-commerce',
    details: [
      {
        icon: <FiFileText />,
        title: 'Projecto : ',
        desc: 'Sitio web',
      },
      {
        icon: <FiUser />,
        title: 'Cliente: ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Lenguajes : ',
        desc: 'React JS + Redux + Node JS + Nest.js + Prisma + Docker',
      },
      {
        icon: <FiExternalLink />,
        title: 'visualización : ',
        desc: <a href="https://musical-starship-c3c885.netlify.app/">https://musical-starship-c3c885.netlify.app/</a>,
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: '',
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: '',
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: '',
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: '',
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: '',
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: '',
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: '',
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: '',
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: '',
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: '',
    color: 'hsl(42, 100%, 50%)',
  },
];
