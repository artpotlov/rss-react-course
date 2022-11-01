import React from 'react';
import { render, screen } from '@testing-library/react';
import { Required } from '../index';

describe('Required component tests:', () => {
  it('required component is mounted', () => {
    render(<Required />);
    expect(screen.getByTestId('required')).toBeInTheDocument();
  });
});
