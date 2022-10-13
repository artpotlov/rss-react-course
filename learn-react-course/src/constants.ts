import { TCity, THeaderLinks } from './types/types';
import { routes } from './router/routes';

export const HEADER_LINKS: THeaderLinks[] = [
  {
    name: 'Home',
    path: routes.main,
  },
  {
    name: 'About us',
    path: routes.aboutUs,
  },
  {
    name: 'Forms',
    path: routes.form,
  },
];

export const CITIES: TCity[] = [
  {
    value: 'Moscow',
    title: 'Moscow',
  },
  {
    value: 'Saint-Petersburg',
    title: 'Saint-Petersburg',
  },
  {
    value: 'Nizhny Novgorod',
    title: 'Nizhny Novgorod',
  },
];
