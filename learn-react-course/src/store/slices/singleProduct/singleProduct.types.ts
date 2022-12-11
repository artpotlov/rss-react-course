import { TProduct } from '../../../types/types';

export type TSingleProductState = {
  product: TProduct | null;
  isLoading: boolean;
  errorMessage: string | null;
};
