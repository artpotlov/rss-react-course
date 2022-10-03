import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorPage } from './index';
import { MemoryRouter } from 'react-router-dom';

describe('Error page tests:', () => {
  it('page mounted', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    expect(screen.getByText(/^Page not found/i)).toBeInTheDocument();
  });
});
