import React from 'react';
import { render, screen } from '@testing-library/react';
import { Info } from './index';

describe('Info component tests:', () => {
  it('info component is mounted', () => {
    render(<Info />);
    expect(screen.getByTestId('info-modal')).toBeInTheDocument();
  });
});
