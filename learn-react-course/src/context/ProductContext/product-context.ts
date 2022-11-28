import { TProductState } from './reducers/types';
import React from 'react';

type TProductContext = {
  isSearching: boolean;
  productState?: TProductState;
  productSorting?: string;
  currentPage: number;
  totalPages: number;
  onHandleToggleSort?: (type: string) => void;
  onHandleTogglePage?: (type: 'next' | 'prev') => void;
  onHandleKeyUpEnter?: (searchValue: string) => Promise<void>;
};

export const ProductContext = React.createContext<TProductContext>({
  isSearching: false,
  currentPage: 1,
  totalPages: 20,
});
