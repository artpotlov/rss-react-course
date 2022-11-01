import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorPage } from '../index';
import { MemoryRouter } from 'react-router-dom';

describe('Error page tests', () => {
  it('the page mounted', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
