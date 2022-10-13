import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title component tests:', () => {
  it('title is mounted', () => {
    render(<Title data-testid="title" />);
    expect(screen.getByTestId('title')).toBeInTheDocument();
  });
});
