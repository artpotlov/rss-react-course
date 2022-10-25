import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './index';
import { TProduct } from '../../types/types';

const data: TProduct = {
  id: 1,
  title: 'Test card title',
  price: 123,
  category: {
    id: 1,
    name: 'Test category',
    image: '/assets/img.png',
  },
  images: ['/assets/img.jpg'],
  description: 'Test description',
};

describe('Card tests:', () => {
  beforeEach(() => {
    render(
      <Card title={data.title} price={data.price} category={data.category} images={data.images} />
    );
  });

  it('card mounted', () => {
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('card has title "test card title"', () => {
    expect(screen.getByText(/Test card title/i)).toBeInTheDocument();
  });

  it('card has category "test category"', () => {
    expect(screen.getByText(/Test category/i)).toBeInTheDocument();
  });

  it('card has price "123"', () => {
    expect(screen.getByText(/123/i)).toBeInTheDocument();
  });

  it('image tag in card has correct alt text and equal "test card title"', () => {
    expect(screen.getByAltText(/Test card title/i)).toBeInTheDocument();
  });
});
