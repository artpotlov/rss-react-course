import React, {useEffect, useReducer, useState} from 'react';
import {productReducer} from './reducers/product-reducer';
import {ProductContext} from './product-context';
import {getAllProducts, getLimitProducts} from '../../utils/api';
import {pageReducer} from './reducers/page-reducer';
import {TOTAL_PAGES} from '../../shared/constants';
import {
  getProductsByAscName,
  getProductsByAscPrice,
  getProductsByDescName,
  getProductsByDescPrice,
} from '../../utils/filters';

type TProps = {
  children: React.ReactNode;
};

export const ProductsProvider = ({children}: TProps) => {
  const [productState, productDispatch] = useReducer(productReducer, {loading: true});
  const [pageState, pageDispatch] = useReducer(pageReducer, {currentPage: 1});
  const [searchState, setSearchState] = useState(false);
  const [sortState, setSortState] = useState<string>('ascName');

  const onHandleKeyUpEnter = async (searchVal: string) => {
    productDispatch({type: 'LOADING'});
    setSearchState(true);

    if (searchVal.length === 0) {
      setSearchState(false);
      return;
    }

    const response = await getAllProducts();

    if (!response) {
      productDispatch({type: 'ERROR', payload: {error: '⚡ Bad request'}});
      return;
    }

    if ('error' in response.data) {
      productDispatch({type: 'ERROR', payload: {error: response.data.message}});
      return;
    }

    const products = response.data;

    const filteringData = products.filter((product) =>
      product.title.toLowerCase().includes(searchVal.toLowerCase())
    );

    if (filteringData.length === 0) {
      productDispatch({
        type: 'ERROR',
        payload: {error: '☹️ Products are not found...'},
      });
      return;
    }

    productDispatch({type: 'LOADED', payload: {products: filteringData}});
  };

  const onHandleTogglePage = (type: 'next' | 'prev') => {
    if (type === 'next') {
      pageDispatch({type: 'NEXT_PAGE'});
    }

    if (type === 'prev') {
      pageDispatch({type: 'PREV_PAGE'});
    }
  };

  const onHandleToggleSort = (type: string) => {
    setSortState(type);
  };

  useEffect(() => {
    const getRequest = async () => {
      if (searchState) return;

      productDispatch({type: 'LOADING'});

      const offsetProducts = (pageState.currentPage - 1) * 20;
      const response = await getLimitProducts(offsetProducts);

      if (!response) {
        productDispatch({type: 'ERROR', payload: {error: 'Bad request'}});
        return;
      }

      if ('error' in response.data) {
        productDispatch({type: 'ERROR', payload: {error: response.data.message}});
        return;
      }

      productDispatch({type: 'LOADED', payload: {products: response.data}});
    };

    getRequest();
  }, [pageState, searchState]);

  useEffect(() => {
    if (!productState.products || productState.products?.length === 0) {
      return;
    }

    if (sortState === 'ascName') {
      const filteringData = getProductsByAscName(productState.products);

      productDispatch({
        type: 'SUCCESS',
        payload: {products: filteringData},
      });
    }

    if (sortState === 'descName') {
      const filteringData = getProductsByDescName(productState.products);

      productDispatch({
        type: 'SUCCESS',
        payload: {products: filteringData},
      });
    }

    if (sortState === 'ascPrice') {
      const filteringData = getProductsByAscPrice(productState.products);

      productDispatch({
        type: 'SUCCESS',
        payload: {products: filteringData},
      });
    }

    if (sortState === 'descPrice') {
      const filteringData = getProductsByDescPrice(productState.products);

      productDispatch({
        type: 'SUCCESS',
        payload: {products: filteringData},
      });
    }
  }, [sortState, productState.products]);

  return (
    <ProductContext.Provider
      value={{
        isSearching: searchState,
        productSorting: sortState,
        productState: productState,
        currentPage: pageState.currentPage,
        totalPages: TOTAL_PAGES,
        onHandleToggleSort,
        onHandleTogglePage,
        onHandleKeyUpEnter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
