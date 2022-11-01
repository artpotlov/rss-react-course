import React from 'react';
import { AxiosError } from 'axios';
import { act, render, screen } from '@testing-library/react';
import { HomePage } from '../index';
import { TProduct } from '../../../types/types';
import * as API from '../../../utils/api';
import userEvent from '@testing-library/user-event';

const mockData: TProduct[] = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
    category: {
      id: 1,
      name: 'Category 1',
      image: 'test-category-img.png',
    },
    price: 123,
    images: ['test-img.png'],
  },
];

const getLimitProductsMock = jest.spyOn(API, 'getLimitProducts');
const getAllProductsMock = jest.spyOn(API, 'getAllProducts');

describe('Home page tests', () => {
  it('the page mounted', async () => {
    await act(() => {
      console.error = jest.fn();
      render(<HomePage dataTestId="home-page" />);
    });
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('when the server returned a empty data there should be this text - products are not found', async () => {
    await act(() => {
      getLimitProductsMock.mockResolvedValueOnce([]);
      render(<HomePage />);
    });
    expect(screen.getByText(/Products are not found/i)).toBeInTheDocument();
  });

  it('when a user entered a text into search box and the server returned empty data there should be this text - products are no found', async () => {
    await act(() => {
      getLimitProductsMock.mockResolvedValueOnce([]);
      getAllProductsMock.mockResolvedValue([]);
      render(<HomePage />);
    });
    const searchBox = screen.getByRole('searchbox');
    await userEvent.paste(searchBox, 'Title');
    expect(screen.getByText(/Products are not found/i)).toBeInTheDocument();
  });

  it('when the server returned the data there should be a card with this title text - Title 1', async () => {
    await act(() => {
      getLimitProductsMock.mockResolvedValue(mockData);
      render(<HomePage />);
    });
    expect(screen.getByText(/Title 1/i)).toBeInTheDocument();
  });

  it('when a user enter a text into search box and the server returned the data there should be this title text - Title 1', async () => {
    await act(() => {
      getLimitProductsMock.mockResolvedValueOnce(mockData);
      getAllProductsMock.mockResolvedValue(mockData);
      render(<HomePage />);
    });
    const searchBox = screen.getByRole('searchbox');
    await userEvent.paste(searchBox, 'Title');
    expect(screen.getByText(/Title 1/i)).toBeInTheDocument();
  });

  it('when the server returned error there should be console.error called', async () => {
    await act(() => {
      console.error = jest.fn();
      getAllProductsMock.mockRejectedValueOnce(new AxiosError());
      getLimitProductsMock.mockRejectedValueOnce(new AxiosError());
      render(<HomePage />);
    });
    expect(console.error).toBeCalled();
    expect(console.error).toHaveBeenCalledTimes(2);
  });
});
