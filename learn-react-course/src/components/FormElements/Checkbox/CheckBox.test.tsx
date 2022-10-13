import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckBox from './Checkbox';

describe('Checkbox tests:', () => {
  it('checkbox component was mounted', () => {
    render(<CheckBox data-testid="checkbox" />);
    expect(screen.getByTestId('checkbox')).toBeInTheDocument();
  });

  it('checkbox has a title', () => {
    render(<CheckBox title="Test title" />);
    expect(screen.getByText(/^Test title$/i)).toBeInTheDocument();
  });

  it('checkbox has a helper text', () => {
    render(<CheckBox helperText="test helper text" />);
    expect(screen.getByText(/^test helper text$/i)).toBeInTheDocument();
  });
});
