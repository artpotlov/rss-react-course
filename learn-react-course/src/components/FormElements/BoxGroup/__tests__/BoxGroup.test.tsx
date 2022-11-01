import React from 'react';
import { render, screen } from '@testing-library/react';
import { BoxGroup } from '../index';

describe('Box group tests', () => {
  it('box group component was mounted', () => {
    render(<BoxGroup data-testid="box-group" />);
    expect(screen.getByTestId('box-group')).toBeInTheDocument();
  });

  it('box group has a title', () => {
    render(<BoxGroup title="Test title" />);
    expect(screen.getByText(/^Test title$/i)).toBeInTheDocument();
  });

  it('box group has a helper text', () => {
    render(<BoxGroup helperText="test helper text" />);
    expect(screen.getByText(/^test helper text$/i)).toBeInTheDocument();
  });
});
