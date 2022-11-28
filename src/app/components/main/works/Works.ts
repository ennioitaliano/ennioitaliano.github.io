import { Work } from './Work';

export const WORKS: Work[] = [
  {
    title: 'Athlon Gym Website',
    url: 'https://athlonpadova.it',
    imgUrl: '../../../assets/athlon.png',
    languages: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Responsive website for a gym in my town. Users are able to see photos, prices, courses, location and contact informations about the gym.',
  },
  {
    title: 'Personal Portfolio Website',
    url: 'https://ennioitaliano.github.io',
    imgUrl: '../../../assets/htmlportfolio.png',
    languages: ['HTML', 'CSS', 'JavaScript'],
    description: 'The website you are currently on.',
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
