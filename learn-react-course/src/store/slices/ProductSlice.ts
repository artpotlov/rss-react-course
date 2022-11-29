import { TProduct } from '../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSingleProduct } from '../thunks/Thunks';

type TProductState = {
  product: TProduct | null;
  isLoading: boolean;
  errorMessage: string;
};
const initialState: TProductState = {
  product: null,
  isLoading: true,
  errorMessage: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getSingleProduct.pending.type]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
      state.product = null;
    },
    [getSingleProduct.fulfilled.type]: (state, action: PayloadAction<TProduct>) => {
      state.isLoading = false;
      state.product = action.payload;
      state.errorMessage = '';
    },
    [getSingleProduct.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.product = null;
      state.errorMessage = action.payload;
    },
  },
});

export const productReducer = productSlice.reducer;
