import React from 'react';
import { render, screen } from '@testing-library/react';
import { Date } from '../Date';

describe('Date component tests:', () => {
  it('date component was mounted', () => {
    render(<Date />);
    expect(screen.getByTestId('date')).toBeInTheDocument();
  });

  it('date component has a title', () => {
    render(<Date title="Test title" />);
    expect(screen.getByText(/^Test title$/i)).toBeInTheDocument();
  });

  it('date component has a helper text', () => {
    render(<Date helperText="test helper text" />);
    expect(screen.getByText(/^test helper text$/i)).toBeInTheDocument();
  });
});
