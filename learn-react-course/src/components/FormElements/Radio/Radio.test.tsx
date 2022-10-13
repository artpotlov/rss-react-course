import React from 'react';
import Radio from './Radio';
import { render, screen } from '@testing-library/react';

describe('Radio component tests:', () => {
  it('radio  component is mounted', () => {
    render(<Radio data-testid="radio" />);
    expect(screen.getByTestId('radio')).toBeInTheDocument();
  });

  it('radio component has a title', () => {
    render(<Radio title="Test title" />);
    expect(screen.getByText(/^Test title$/i)).toBeInTheDocument();
  });

  it('radio component has a helper text', () => {
    render(<Radio helperText="test helper text" />);
    expect(screen.getByText(/^test helper text$/i)).toBeInTheDocument();
  });
});
