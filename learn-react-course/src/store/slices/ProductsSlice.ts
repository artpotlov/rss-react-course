import { TProduct } from '../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductsByPage, getProductsBySearchVal } from '../thunks/Thunks';
import { getFilteringProducts } from '../../utils/filters';
import { TOTAL_PAGES } from '../../shared/constants';

type TProductState = {
  products: TProduct[];
  isLoading: boolean;
  errorMessage: string;
  currentPage: number;
  totalPages: number;
  currentSortType: string;
  isSearching: boolean;
};

export const initialState: TProductState = {
  products: [],
  isLoading: true,
  errorMessage: '',
  currentPage: 1,
  totalPages: TOTAL_PAGES,
  currentSortType: 'ascName',
  isSearching: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sortBy: (state, action: PayloadAction<string>) => {
      state.products = getFilteringProducts(state.products, action.payload);
    },
    changeSortType: (state, action: PayloadAction<string>) => {
      state.currentSortType = action.payload;
    },
    getNextPage: (state) => {
      state.currentPage += 1;
    },
    getPrevPage: (state) => {
      state.currentPage -= 1;
    },
  },
  extraReducers: {
    [getProductsByPage.pending.type]: (state) => {
      state.isLoading = true;
      state.isSearching = false;
      state.errorMessage = '';
      state.products = [];
    },
    [getProductsByPage.fulfilled.type]: (state, action: PayloadAction<TProduct[]>) => {
      state.isLoading = false;
      state.isSearching = false;
      state.products = action.payload;
      state.errorMessage = '';
    },
    [getProductsByPage.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isSearching = false;
      state.products = [];
      state.errorMessage = action.payload;
    },
    [getProductsBySearchVal.pending.type]: (state) => {
      state.isLoading = true;
      state.isSearching = true;
      state.products = [];
      state.errorMessage = '';
    },
    [getProductsBySearchVal.fulfilled.type]: (state, action: PayloadAction<TProduct[]>) => {
      state.isLoading = false;
      state.isSearching = true;
      state.products = action.payload;
      state.errorMessage = '';
    },
    [getProductsBySearchVal.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isSearching = true;
      state.products = [];
      state.errorMessage = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
