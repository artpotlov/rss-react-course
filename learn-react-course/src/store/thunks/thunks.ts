import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts, getLimitProducts, getProductByID } from '../../utils/api';
import { handleError } from '../../utils/handleError';
import { TProduct } from '../../types/types';
import { TRootState } from '../store';
import { getSortingProducts } from '../../utils/filters';

export const getSingleProduct = createAsyncThunk<TProduct, string, { rejectValue: string }>(
  'product/getSingleProduct',
  async (id: string, thunkAPI) => {
    try {
      const response = await getProductByID(Number(id));
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(handleError(e));
    }
  }
);

export const getProductsByPage = createAsyncThunk<
  TProduct[],
  number,
  { state: TRootState; rejectValue: string }
>('product/getProductsByPage', async (pageNum: number, thunkAPI) => {
  try {
    const currentSortType = thunkAPI.getState().filter.sortType;
    const offset = (pageNum - 1) * 20;
    const response = await getLimitProducts(offset);
    return getSortingProducts(response.data, currentSortType);
  } catch (e) {
    return thunkAPI.rejectWithValue(handleError(e));
  }
});

export const getProductsBySearchVal = createAsyncThunk<
  TProduct[],
  string,
  { state: TRootState; rejectValue: string }
>('products/getProductsBySearchVal', async (searchString: string, thunkAPI) => {
  try {
    const currentSortType = thunkAPI.getState().filter.sortType;
    const response = await getAllProducts();
    const products = response.data.filter((product) =>
      product.title.toLowerCase().includes(searchString.toLowerCase())
    );

    if (products.length === 0) {
      return thunkAPI.rejectWithValue('Nothing found');
    }

    return getSortingProducts(products, currentSortType);
  } catch (e) {
    return thunkAPI.rejectWithValue(handleError(e));
  }
});
