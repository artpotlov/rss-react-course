import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from './index';

describe('Home page tests:', () => {
  it('page mounted', () => {
    render(<HomePage />);
    expect(screen.getByText(/^Home page/i)).toBeInTheDocument();
  });
});
