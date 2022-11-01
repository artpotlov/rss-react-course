import React from 'react';
import { render, screen } from '@testing-library/react';
import { RegForm } from '../index';
import '@testing-library/jest-dom';

describe('Form component test', () => {
  it('form is mounted', () => {
    render(<RegForm />);
    expect(screen.getByTestId('reg-form')).toBeInTheDocument();
  });
});
