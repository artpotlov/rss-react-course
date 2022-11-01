import React from 'react';
import { render, screen } from '@testing-library/react';
import { File } from '../File';

describe('File component tests:', () => {
  it('file component was mounted', () => {
    render(<File />);
    expect(screen.getByTestId('file')).toBeInTheDocument();
  });

  it('file component has a title', () => {
    render(<File title="Test title" />);
    expect(screen.getByText(/^Test title$/i)).toBeInTheDocument();
  });

  it('file component has a helper text', () => {
    render(<File helperText="test helper text" />);
    expect(screen.getByText(/^test helper text$/i)).toBeInTheDocument();
  });
});
