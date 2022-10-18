import axios from 'axios';
import { API_URLS } from '../constants';
import { TGood } from '../types/types';

export const getLimitProducts = async (limit = '20'): Promise<TGood[] | []> => {
  const url = new URL(API_URLS.products);
  url.search = `limit=${limit}`;
  const response = await axios.get(url.toString());
  return response.status === 200 ? response.data : [];
};

export const getProductByID = async (id: number): Promise<TGood | null> => {
  const url = `${API_URLS.products}/${id}`;
  const response = await axios.get(url.toString());
  return response.status === 200 ? response.data : null;
};

export const getAllProducts = async (): Promise<TGood[] | []> => {
  const response = await axios.get(API_URLS.products);
  return response.status === 200 ? response.data : [];
};