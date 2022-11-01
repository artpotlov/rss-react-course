import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from '../index';

describe('Loader component tests', () => {
  it('loader component is mounted', () => {
    render(<Loader dataTestId="loader" />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
