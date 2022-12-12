import { TProduct } from '../../../types/types';

export type TProductsState = {
  products: TProduct[];
  isLoading: boolean;
  errorMessage: string | null;
  currentPage: number;
  totalPages: number;
  isSearching: boolean;
};
