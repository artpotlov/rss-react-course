import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormCard } from '../index';
import { TFormStore } from '../../../../types/types';

const input = document.createElement('input');
const mockFileList = Object.create(input.files);
mockFileList[0] = new File(['abc'], 'test-file.png');
mockFileList.length = 1;

const cards: TFormStore[] = [
  {
    userName: 'test user name',
    email: 'abc@abc.com',
    phoneNumber: '999',
    gender: 'male',
    birthday: '1999-12-12',
    city: 'default city',
    cashback: ['cash 1', 'cash 2'],
    file: mockFileList,
  },
];

describe('Form card component tests:', () => {
  it('form card is mounted', () => {
    render(<FormCard />);
    expect(screen.getByTestId('form-card')).toBeInTheDocument();
  });

  describe('form card component with mock data tests', () => {
    beforeEach(() => {
      render(<FormCard cards={cards} />);
    });

    it('user name in card is test user name', () => {
      expect(screen.getByText(/^test user name$/i)).toBeInTheDocument();
    });

    it('email in card is abc@abc.com', () => {
      expect(screen.getByText(/^abc@abc.com$/i)).toBeInTheDocument();
    });

    it('phone number in card is 999', () => {
      expect(screen.getByText(/^999$/i)).toBeInTheDocument();
    });

    it('gender in card is male', () => {
      expect(screen.getByText(/^male$/i)).toBeInTheDocument();
    });

    it('birthday date in card is 1999-12-12', () => {
      expect(screen.getByText(/^1999-12-12$/i)).toBeInTheDocument();
    });

    it('cashback in card has cash 1 and cash 2', () => {
      expect(screen.getByText(/^cash 1/i)).toBeInTheDocument();
      expect(screen.getByText(/cash 2$/i)).toBeInTheDocument();
    });

    it('file in card is test-file.png', () => {
      expect(screen.getByText(/^test-file.png$/i)).toBeInTheDocument();
    });
  });
});
