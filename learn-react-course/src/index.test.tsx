import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { routes } from './router/routes';
import { routerConfig } from './router/router';

jest.mock('axios');

const renderPage = (pageNum: number) => {
  const router = createMemoryRouter(routerConfig, {
    initialEntries: [routes.main, routes.aboutUs, routes.form],
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

  it('form page rendered', () => {
    renderPage(2);
    expect(screen.getByTestId('form-page')).toBeInTheDocument();
  });
});
