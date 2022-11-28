import React from 'react';
import { TProductAction, TProductState } from './types';

export const productReducer: React.Reducer<TProductState, TProductAction> = (
  state,
  action
): TProductState => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        products: undefined,
        error: undefined,
      };
    case 'LOADED':
      return {
        ...state,
        loading: true,
        products: action.payload?.products,
        error: undefined,
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload?.products,
        error: undefined,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        products: undefined,
        error: action.payload?.error,
      };
    default:
      return state;
  }
};
