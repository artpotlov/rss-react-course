import React from 'react';
import { routes } from './routes';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { App } from '../components/App';

const ErrorPage = React.lazy(() => import('../pages/Error'));
const HomePage = React.lazy(() => import('../pages/Home'));
const AboutUsPage = React.lazy(() => import('../pages/AboutUs'));
const FormPage = React.lazy(() => import('../pages/Form'));
const ProductPage = React.lazy(() => import('../pages/Product'));

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
      {
        path: routes.form,
        element: <FormPage />,
      },
      {
        path: routes.products,
        element: <HomePage title="Products" />,
      },
      {
        path: routes.products + '/:id',
        element: <ProductPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig, { basename: '/' });
