import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productReducer } from './slices/ProductSlice';
import { productsReducer } from './slices/ProductsSlice';

const rootReducer = combineReducers({
  productReducer,
  productsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];
