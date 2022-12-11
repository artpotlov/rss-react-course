import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { getSortingProducts } from '../../../utils/filters';
import { TOTAL_PAGES } from '../../../shared/constants';
import { getProductsByPage, getProductsBySearchVal } from '../../thunks/thunks';
import { TProductsState } from './products.types';

export const initialState: TProductsState = {
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
    changeSortType: (state, action: PayloadAction<string>) => {
      state.currentSortType = action.payload;
      state.products = getSortingProducts(state.products, state.currentSortType);
    },
    setNextPage: (state) => {
      state.currentPage += 1;
    },
    setPrevPage: (state) => {
      state.currentPage -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsByPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSearching = false;
        state.products = getSortingProducts(action.payload, state.currentSortType);
      })
      .addCase(getProductsBySearchVal.fulfilled, (state, action) => {
        if (!action.payload.length) {
          state.errorMessage = 'Nothing found';
        } else {
          state.products = getSortingProducts(action.payload, state.currentSortType);
        }
        state.isLoading = false;
        state.isSearching = true;
      })
      .addMatcher(isAnyOf(getProductsByPage.pending, getProductsBySearchVal.pending), (state) => {
        state.isLoading = true;
        state.products = [];
        state.errorMessage = null;
      })
      .addMatcher(
        isAnyOf(getProductsByPage.rejected, getProductsBySearchVal.rejected),
        (state, action) => {
          state.isLoading = false;
          state.isSearching = false;
          state.products = [];
          state.errorMessage = action.payload ? action.payload : 'Bad request';
        }
      );
  },
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
