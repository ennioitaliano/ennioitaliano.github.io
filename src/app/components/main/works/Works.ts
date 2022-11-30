import { Work } from './Work';

export const WORKS: Work[] = [
  {
    title: 'Personal Portfolio Website',
    url: 'https://github.com/ennioitaliano/angular-portfolio',
    imgUrl: '../../../assets/htmlportfolio.png',
    languages: ['TypeScript', 'HTML', 'CSS'],
    description:
      'The website you are currently on, built using Angular with a learning-by-doing approach.',
  },
  {
    title: 'Obsidian Auto Glossary',
    url: 'https://github.com/ennioitaliano/obsidian-auto-glossary',
    imgUrl: '../../../assets/autoglossary.png',
    languages: ['TypeScript'],
    description:
      'Obsidian plugin to create a glossary, an index or a file with both from the notes you want.',
  },
  {
    title: 'Athlon Gym Website',
    url: 'https://athlonpadova.it',
    imgUrl: '../../../assets/athlon.png',
    languages: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Responsive website for a gym in Padua, Italy. Users are able to see photos, prices, courses, location and contact informations about the gym.',
  },
  {
    title: 'Air Quality Charts',
    url: 'https://github.com/microtower00/AirQuality',
    imgUrl: '../../../assets/airquality.png',
    languages: ['C++'],
    description:
      'Qt desktop application to create, import, download and edit hourly data about air components and quality of some cities in different time spans.',
  },
  {
    title: 'IP Subnet Calculator',
    url: 'https://github.com/ennioitaliano/ip-subnet-calculator',
    imgUrl: '../../../assets/ipsubnetcalculator.png',
    languages: ['Java', 'Kotlin'],
    description:
      'Android application allowing users to calculate some parameters useful for the design of communication networks.',
  },
];
