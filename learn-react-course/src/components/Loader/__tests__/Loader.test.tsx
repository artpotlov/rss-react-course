import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from '../index';

describe('Loader component tests', () => {
  it('loader component is mounted', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
