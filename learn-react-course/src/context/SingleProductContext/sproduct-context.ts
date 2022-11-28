import React from 'react';
import { TSingleProductState } from './reducers/types';

type TProductContext = {
  productState?: TSingleProductState;
};

export const SingleProductContext = React.createContext<TProductContext>({});
