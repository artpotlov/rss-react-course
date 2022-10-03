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

  it('header mount', () => {
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  it('it has home text link', () => {
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  it('it has about us text link', () => {
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });
});
