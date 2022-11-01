import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { CardList } from '../index';
import { TProduct } from '../../../types/types';
import * as API from '../../../utils/api';
import { AxiosResponse } from 'axios';
import userEvent from '@testing-library/user-event';

const fakeGoods: TProduct[] = [
  {
    id: 1,
    title: 'Test title 1',
    price: 123,
    category: {
      id: 1,
      name: 'Test category 1',
      image: '/assets/img-1.png',
    },
    description: 'Test description 1',
    images: ['/assets/img-1.jpg'],
  },
  {
    id: 2,
    title: 'Test title 2',
    price: 456,
    category: {
      id: 2,
      name: 'Test category 2',
      image: '/assets/img-2.png',
    },
    description: 'Test description 2',
    images: ['/assets/img-2.jpg'],
  },
];

describe('Card list tests', () => {
  it('card list mounted', () => {
    render(<CardList />);
    expect(screen.getByTestId('card-list')).toBeInTheDocument();
  });

  it('when products are empty should be showed a text - product not found', () => {
    render(<CardList />);
    expect(screen.getByText(/products are not found/i)).toBeInTheDocument();
  });

  describe('card list with product data tests', () => {
    beforeEach(() => {
      render(<CardList goods={fakeGoods} />);
    });

    it('amount of cards in card list have length equal 2', () => {
      expect(screen.getAllByTestId('card')).toHaveLength(2);
    });

    it('first card has title "test title 1"', () => {
      const firstCard = screen.getAllByTestId('card')[0];
      expect(firstCard).toHaveTextContent(/Test title 1/i);
    });

    it('second card has title "test title 2"', () => {
      const secondCard = screen.getAllByTestId('card')[1];
      expect(secondCard).toHaveTextContent(/Test title 2/i);
    });

    it('when user clicked to one card should showed the modal', async () => {
      const getProductMock = jest.spyOn(API, 'getProductByID');
      getProductMock.mockResolvedValueOnce(
        Promise.resolve({ status: 200, data: fakeGoods[0] } as AxiosResponse)
      );

      userEvent.click(screen.getByText(/Test title 1/i));
      expect(await screen.findByTestId('modal')).toBeInTheDocument();
    });

    it('when user clicked to one card should be showed the modal with title text - test modal title', async () => {
      const getProductMock = jest.spyOn(API, 'getProductByID');
      const mockData = { ...fakeGoods[0] };
      mockData.title = 'Test modal title';
      getProductMock.mockResolvedValueOnce(
        Promise.resolve({ status: 200, data: mockData } as AxiosResponse)
      );

      userEvent.click(screen.getByText(/Test title 1/i));
      expect(await screen.findByText(/Test modal title/i)).toBeInTheDocument();
    });

    it('when user clicked to one card should not showed the modal', async () => {
      await act(() => {
        const getProductMock = jest.spyOn(API, 'getProductByID');
        getProductMock.mockResolvedValueOnce(
          Promise.resolve({ status: 200, data: {} } as AxiosResponse)
        );
        userEvent.click(screen.getByText(/Test title 1/i));
      });

      expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    });
  });
});
