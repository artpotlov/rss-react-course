import React, { useEffect, useReducer } from 'react';
import { SingleProductContext } from './sproduct-context';
import { singleProductReducer } from './reducers/sproduct-reducer';
import { getProductByID } from '../../utils/api';
import { useParams } from 'react-router-dom';

type TProps = {
  children: React.ReactNode;
};

export const SingleProductProvider = ({ children }: TProps) => {
  const { id } = useParams();
  const [productState, productDispatch] = useReducer(singleProductReducer, { loading: true });

  useEffect(() => {
    const getProduct = async (id: string) => {
      productDispatch({ type: 'LOADING' });
      const response = await getProductByID(Number(id));

      if (!response) {
        productDispatch({ type: 'ERROR', payload: { error: 'Bad request' } });
        return;
      }

      if ('error' in response.data) {
        productDispatch({ type: 'ERROR', payload: { error: response.data.message } });
        return;
      }

      productDispatch({ type: 'SUCCESS', payload: { product: response.data } });
    };

    if (!id) {
      return;
    }

    getProduct(id).then();
  }, [id]);

  return (
    <SingleProductContext.Provider value={{ productState }}>
      {children}
    </SingleProductContext.Provider>
  );
};
