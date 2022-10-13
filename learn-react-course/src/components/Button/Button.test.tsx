import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './index';

describe('Button tests:', () => {
  it('button component was mounted', () => {
    render(<Button data-testid="button">Test button</Button>);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });
});
