import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ErrorPage } from '../pages/Error';
import { AboutUsPage } from '../pages/AboutUs';
import { HomePage } from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about-us',
        element: <AboutUsPage />,
      },
    ],
  },
]);
