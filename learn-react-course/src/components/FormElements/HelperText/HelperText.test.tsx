import React from 'react';
import { render, screen } from '@testing-library/react';
import HelperText from './HelperText';

describe('Helper text component tests:', () => {
  it('helper text is mounted', () => {
    render(<HelperText data-testid="helper-text" />);
    expect(screen.getByTestId('helper-text')).toBeInTheDocument();
  });
});
