import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './index';
import { TGood } from '../../types/types';

const data: TGood = {
  id: 1,
  title: 'Test card title',
  price: 123,
  category: 'Test category',
  image: '/assets/img.jpg',
  description: 'Test description',
};

describe('Card tests:', () => {
  beforeEach(() => {
    render(
      <Card title={data.title} price={data.price} category={data.category} image={data.image} />
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