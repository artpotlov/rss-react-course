import React from 'react';
import { TSingleProductAction, TSingleProductState } from './types';

export const singleProductReducer: React.Reducer<TSingleProductState, TSingleProductAction> = (
  state,
  action
): TSingleProductState => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        product: undefined,
        error: undefined,
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        product: action.payload?.product,
        error: undefined,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        product: undefined,
        error: action.payload?.error,
      };
    default:
      return state;
  }
};
