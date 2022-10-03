import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from './index';

type TFakeStore = Record<string, string>;

const fakeStore: TFakeStore = {};

const getItem = (itemName: string) => {
  return fakeStore[itemName] || null;
};

const setItem = (itemName: string, value: string) => {
  fakeStore[itemName] = value;
};

describe('Search bar component tests:', () => {
  beforeAll(() => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(getItem);
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(setItem);
  });

  beforeEach(() => {
    render(<SearchBar />);
  });

  it('search bar mount', () => {
    expect(screen.getByPlaceholderText(/Search by.../i)).toBeInTheDocument();
  });

  it('getItem method in local storage was called', () => {
    expect(localStorage.getItem).toBeCalled();
  });

  it('getItem method in local storage was called with search parameters', () => {
    expect(localStorage.getItem).toBeCalledWith('search');
  });

  it('setItem method in local storage was called', () => {
    fireEvent.change(screen.getByPlaceholderText(/Search by.../i), {
      target: { value: 'Test text phrase' },
    });
    cleanup();
    expect(localStorage.setItem).toBeCalled();
  });

  it("setItem method wasn't called before unmount", () => {
    fireEvent.change(screen.getByPlaceholderText(/Search by.../i), {
      target: { value: 'Test text phrase' },
    });
    expect(localStorage.setItem).not.toBeCalled();
  });

  it('setItem method in local storage was called with parameters', () => {
    fireEvent.change(screen.getByPlaceholderText(/Search by.../i), {
      target: { value: 'Test text phrase' },
    });
    cleanup();
    expect(localStorage.setItem).toBeCalled();
  });
});
