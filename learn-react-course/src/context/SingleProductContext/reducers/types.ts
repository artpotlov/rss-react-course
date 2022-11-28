import { TProduct } from '../../../types/types';

export type TSingleProductState = {
  loading: boolean;
  product?: TProduct;
  error?: string;
};

export type TSingleProductAction = {
  type: string;
  payload?: Omit<TSingleProductState, 'loading'>;
};
