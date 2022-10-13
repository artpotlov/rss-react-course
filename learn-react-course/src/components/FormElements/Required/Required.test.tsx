import React from 'react';
import { render, screen } from '@testing-library/react';
import Required from './Required';

describe('Required component tests:', () => {
  it('required component is mounted', () => {
    render(<Required data-testid="required" />);
    expect(screen.getByTestId('required')).toBeInTheDocument();
  });
});
