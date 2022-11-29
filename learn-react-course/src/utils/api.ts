import axios from 'axios';
import { API_URLS } from '../shared/constants';
import { TProduct } from '../types/types';

export const getLimitProducts = (offset = 0, limit = 20) => {
  const url = new URL(API_URLS.products);
  url.search = `offset=${offset}&limit=${limit}`;
  return axios.get<TProduct[]>(url.toString());
};

export const getProductByID = (id: number) => {
  const url = `${API_URLS.products}/${id}`;
  return axios.get<TProduct>(url.toString());
};

export const getAllProducts = () => {
  return axios.get<TProduct[]>(API_URLS.products);
};
