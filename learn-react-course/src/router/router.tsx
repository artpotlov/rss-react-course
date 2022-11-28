import React from 'react';
import { routes } from './routes';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { App } from '../components/App';
import { ErrorPage } from '../pages/Error';
import { AboutUsPage } from '../pages/AboutUs';
import { HomePage } from '../pages/Home';
import { FormPage } from '../pages/Form';
import { ProductPage } from '../pages/Product';
import { SingleProductProvider } from '../context/SingleProductContext/SingleProductProvider';

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
        element: (
          <SingleProductProvider>
            <ProductPage />
          </SingleProductProvider>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
