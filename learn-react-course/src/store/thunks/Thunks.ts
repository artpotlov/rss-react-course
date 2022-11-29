import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts, getLimitProducts, getProductByID } from '../../utils/api';
import { handleError } from '../../utils/handleError';

export const getSingleProduct = createAsyncThunk(
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

export const getProductsByPage = createAsyncThunk(
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

export const getProductsBySearchVal = createAsyncThunk(
  'products/getProductsBySearchVal',
  async (searchString: string, thunkAPI) => {
    try {
      const response = await getAllProducts();
      const products = response.data;
      const filteringProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchString.toLowerCase())
      );
      if (filteringProducts.length === 0) {
        return thunkAPI.rejectWithValue('Nothing found');
      }

      return filteringProducts;
    } catch (e) {
      return thunkAPI.rejectWithValue(handleError(e));
    }
  }
);
