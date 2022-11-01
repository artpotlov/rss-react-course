import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from '../index';
import userEvent from '@testing-library/user-event';

let stateModal = 'open';
const mockSetShow = (state: 'open' | 'close') => {
  stateModal = state;
};

describe('Modal component tests', () => {
  it('modal component is mounted', () => {
    render(<Modal />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('if user click to outside modal should be called closeModal function', () => {
    render(<Modal setShowModal={mockSetShow} />);
    userEvent.click(screen.getByTestId('modal'));
    expect(stateModal).toBe('close');
  });
});
