import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Social } from './Social';

export const SOCIALS: Social[] = [
  {
    url: 'mailto:ennio.italiano@gmail.com',
    alt: "Write an email to Ennio's address",
    icon: faEnvelope,
  },
  {
    url: 'https://github.com/ennioitaliano',
    alt: "Ennio's GitHub profile",
    icon: faGithub,
  },
  {
    url: 'https://linkedin.com/in/ennioitaliano',
    alt: "Ennio's LinkedIn profile",
    icon: faLinkedinIn,
  },
  {
    url: 'https://twitter.com/ennio_italiano',
    alt: "Ennio's Twitter profile",
    icon: faTwitter,
  },
];
