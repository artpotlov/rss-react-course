import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from './index';

describe('Home page tests:', () => {
  it('the page mounted', () => {
    render(<HomePage />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
