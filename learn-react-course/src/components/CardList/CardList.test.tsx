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

  it('cards mounted', () => {
    expect(screen.getAllByText(/Test title/i)).toHaveLength(2);
  });
});
