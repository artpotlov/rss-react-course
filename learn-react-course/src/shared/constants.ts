import { TCity, THeaderLinks } from '../types/types';
import { routes } from '../router/routes';

export const HEADER_LINKS: THeaderLinks[] = [
  {
    name: 'Home',
    path: routes.main,
  },
  {
    name: 'Products',
    path: routes.products,
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

export const SORTING_VALS = [
  {
    value: 'ascPrice',
    name: 'Ascending price',
  },
  {
    value: 'descPrice',
    name: 'Descending price',
  },
  {
    value: 'ascName',
    name: 'Ascending name',
  },
  {
    value: 'descName',
    name: 'Descending name',
  },
];

export const API_URLS = {
  main: 'https://api.escuelajs.co/api/v1',
  products: 'https://api.escuelajs.co/api/v1/products',
};

export const TOTAL_PAGES = 10;
