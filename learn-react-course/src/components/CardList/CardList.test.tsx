import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardList } from './index';
import { TGood } from '../../types/types';

const fakeGoods: TGood[] = [
  {
    id: 1,
    title: 'Test title 1',
    price: 123,
    category: 'Test category 1',
    description: 'Test description 1',
    image: '/assets/img-1.jpg',
  },
  {
    id: 2,
    title: 'Test title 2',
    price: 12345,
    category: 'Test category 2',
    description: 'Test description 2',
    image: '/assets/img-2.jpg',
  },
];

describe('Card list tests:', () => {
  beforeEach(() => {
    render(<CardList goods={fakeGoods} />);
  });

  it('card list mounted', () => {
    expect(screen.getByTestId('card-list')).toBeInTheDocument();
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
});
