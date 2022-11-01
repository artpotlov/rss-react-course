import React from 'react';
import { render, screen } from '@testing-library/react';
import { Info } from '../Info';

describe('Info component tests', () => {
  it('info component is mounted', () => {
    render(<Info dataTestId="info-modal" />);
    expect(screen.getByTestId('info-modal')).toBeInTheDocument();
  });
});
