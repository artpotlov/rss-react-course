import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { routes } from './router/routes';
import { routerConfig } from './router/router';

const renderPage = (pageNum: number) => {
  const router = createMemoryRouter(routerConfig, {
    initialEntries: [routes.main, routes.aboutUs],
    initialIndex: pageNum,
  });

  render(<RouterProvider router={router} />);
};

describe('Router tests:', () => {
  it('home page rendered', () => {
    renderPage(0);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('about us page rendered', () => {
    renderPage(1);
    expect(screen.getByTestId('about-us-page')).toBeInTheDocument();
  });
});
