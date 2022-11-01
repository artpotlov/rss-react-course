import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormPage } from '../index';

describe('Form page tests', () => {
  it('text field is mounted', () => {
    render(<FormPage dataTestId="form-page" />);
    expect(screen.getByTestId('form-page')).toBeInTheDocument();
  });
});