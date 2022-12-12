import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { TOTAL_PAGES } from '../../../shared/constants';
import { getProductsByPage, getProductsBySearchVal } from '../../thunks/thunks';
import { TProductsState } from './products.types';
import { filterActions } from '../filter/filter.slice';
import { getSortingProducts } from '../../../utils/filters';

export const initialState: TProductsState = {
  products: [],
  isLoading: true,
  errorMessage: '',
  currentPage: 1,
  totalPages: TOTAL_PAGES,
  isSearching: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
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
        state.isSearching = false;
        state.products = action.payload;
      })
      .addCase(getProductsBySearchVal.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isSearching = true;
      })
      .addCase(filterActions.changeSortType, (state, action) => {
        state.products = getSortingProducts(state.products, action.payload);
      })
      .addMatcher(
        isAnyOf(getProductsByPage.fulfilled, getProductsBySearchVal.fulfilled),
        (state) => {
          state.isLoading = false;
        }
      )
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
