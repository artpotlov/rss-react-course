import axios from 'axios';
import { API_URLS } from '../constants';
import { TProduct } from '../types/types';

export const getLimitProducts = async (offset = 0, limit = 20): Promise<TProduct[] | []> => {
  const url = new URL(API_URLS.products);
  url.search = `offset=${offset}&limit=${limit}`;
  const response = await axios.get(url.toString());
  return response.status === 200 ? response.data : [];
};

export const getProductByID = async (id: number): Promise<TProduct | null> => {
  const url = `${API_URLS.products}/${id}`;
  const response = await axios.get(url.toString());
  return response.status === 200 ? response.data : null;
};

export const getAllProducts = async (): Promise<TProduct[] | []> => {
  const response = await axios.get(API_URLS.products);
  return response.status === 200 ? response.data : [];
};
