import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './slices/singleProduct/singleProduct.slice';
import { productsReducer } from './slices/products/products.slice';
import { filterReducer } from './slices/filter/filter.slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: productReducer,
    filter: filterReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
