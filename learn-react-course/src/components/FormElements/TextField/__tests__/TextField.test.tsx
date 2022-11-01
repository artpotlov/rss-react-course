import React from 'react';
import { render, screen } from '@testing-library/react';
import { TextField } from '../index';

describe('Text field tests:', () => {
  it('text field is mounted', () => {
    render(<TextField data-testid="text-field" />);
    expect(screen.getByTestId('text-field')).toBeInTheDocument();
  });

  it('text field has a title', () => {
    render(<TextField title="Test title" />);
    expect(screen.getByText(/^Test title$/i)).toBeInTheDocument();
  });

  it('text field has a helper text', () => {
    render(<TextField helperText="test helper text" />);
    expect(screen.getByText(/^test helper text$/i)).toBeInTheDocument();
  });
});
