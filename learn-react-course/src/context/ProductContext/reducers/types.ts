import { TProduct } from '../../../types/types';

export type TProductState = {
  loading: boolean;
  products?: TProduct[];
  error?: string;
};

export type TProductAction = {
  type: string;
  payload?: Omit<TProductState, 'loading'>;
};

export type TPageState = {
  currentPage: number;
};

export type TPageAction = {
  type: string;
};
