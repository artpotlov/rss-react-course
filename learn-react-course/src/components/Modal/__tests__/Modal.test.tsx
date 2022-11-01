import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from '../index';

describe('Modal component tests', () => {
  it('modal component is mounted', () => {
    render(<Modal />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
