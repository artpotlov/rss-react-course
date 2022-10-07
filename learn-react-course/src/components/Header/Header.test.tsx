import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './index';
import { MemoryRouter } from 'react-router-dom';

describe('Header component tests:', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it('header mounted', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('header has home text link', () => {
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  it('header has about us text link', () => {
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });
});
