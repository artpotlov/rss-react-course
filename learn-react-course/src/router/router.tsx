import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App';
import { ErrorPage } from '../pages/Error';
import { AboutUsPage } from '../pages/AboutUs';
import { HomePage } from '../pages/Home';
import { routes } from './routes';

export const routerConfig: RouteObject[] = [
  {
    path: routes.main,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routes.aboutUs,
        element: <AboutUsPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
