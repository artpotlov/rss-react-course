import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts, getLimitProducts, getProductByID } from '../../utils/api';
import { handleError } from '../../utils/handleError';
import { TProduct } from '../../types/types';

export const getSingleProduct = createAsyncThunk<TProduct, string, { rejectValue: string }>(
  'product/getSingleProduct',
  async (id: string, thunkAPI) => {
    try {
      const response = await getProductByID(Number(id));
      return response?.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(handleError(e));
    }
  }
);

export const getProductsByPage = createAsyncThunk<TProduct[], number, { rejectValue: string }>(
  'product/getProductsByPage',
  async (pageNum: number, thunkAPI) => {
    try {
      const offset = (pageNum - 1) * 20;
      const response = await getLimitProducts(offset);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(handleError(e));
    }
  }
);

export const getProductsBySearchVal = createAsyncThunk<TProduct[], string, { rejectValue: string }>(
  'products/getProductsBySearchVal',
  async (searchString: string, thunkAPI) => {
    try {
      const response = await getAllProducts();
      const products = response.data;

      return products.filter((product) =>
        product.title.toLowerCase().includes(searchString.toLowerCase())
      );
    } catch (e) {
      return thunkAPI.rejectWithValue(handleError(e));
    }
  }
);
