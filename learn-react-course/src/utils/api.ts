import axios, { AxiosResponse } from 'axios';
import { API_URLS } from '../shared/constants';
import { TBadResponse, TProduct } from '../types/types';

export const getLimitProducts = async (
  offset = 0,
  limit = 20
): Promise<AxiosResponse<TProduct[] | TBadResponse> | null> => {
  try {
    const url = new URL(API_URLS.products);
    url.search = `offset=${offset}&limit=${limit}`;
    return await axios.get(url.toString());
  } catch {
    return null;
  }
};

export const getProductByID = async (
  id: number
): Promise<AxiosResponse<TProduct | TBadResponse> | null> => {
  try {
    const url = `${API_URLS.products}/${id}`;
    return await axios.get(url.toString());
  } catch {
    return null;
  }
};

export const getAllProducts = async (): Promise<AxiosResponse<
  TProduct[] | TBadResponse
> | null> => {
  try {
    return await axios.get(API_URLS.products);
  } catch {
    return null;
  }
};
