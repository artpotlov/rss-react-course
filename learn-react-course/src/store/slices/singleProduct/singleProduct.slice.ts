import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getSingleProduct } from '../../thunks/thunks';
import { TSingleProductState } from './singleProduct.types';

const initialState: TSingleProductState = {
  product: null,
  isLoading: true,
  errorMessage: null,
};

const singleProductSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addMatcher(isAnyOf(getSingleProduct.pending), (state) => {
        state.isLoading = true;
        state.product = null;
        state.errorMessage = null;
      })
      .addMatcher(isAnyOf(getSingleProduct.rejected), (state, action) => {
        state.isLoading = false;
        state.product = null;
        state.errorMessage = action.payload ? action.payload : 'Bad request';
      });
  },
});

export const productReducer = singleProductSlice.reducer;
