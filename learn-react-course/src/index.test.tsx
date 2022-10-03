import React from 'react';
import { createMemoryRouter, RouteObject, RouterProvider } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/Home';
import { AboutUsPage } from './pages/AboutUs';
import { render, screen } from '@testing-library/react';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about-us',
        element: <AboutUsPage />,
      },
    ],
  },
];

const renderPage = (pageNum: number) => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/', '/about-us'],
    initialIndex: pageNum,
  });

  render(<RouterProvider router={router} />);
};

describe('Router tests:', () => {
  it('home page rendered', () => {
    renderPage(0);
    expect(screen.getByRole('heading')).toHaveTextContent(/^Home page/i);
  });

  it('about us page rendered', () => {
    renderPage(1);
    expect(screen.getByRole('heading')).toHaveTextContent(/^About us/i);
  });
});
