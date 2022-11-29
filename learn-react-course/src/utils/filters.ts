import { TProduct } from '../types/types';

export const getProductsByAscName = (products: TProduct[]) => {
  return products.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }

    if (a.title < b.title) {
      return -1;
    }

    return 0;
  });
};

export const getProductsByDescName = (products: TProduct[]) => {
  return products.sort((a, b) => {
    if (a.title < b.title) {
      return 1;
    }

    if (a.title > b.title) {
      return -1;
    }

    return 0;
  });
};

export const getProductsByAscPrice = (products: TProduct[]) => {
  return products.sort((a, b) => a.price - b.price);
};

export const getProductsByDescPrice = (products: TProduct[]) => {
  return products.sort((a, b) => b.price - a.price);
};

export const getFilteringProducts = (products: TProduct[], type: string) => {
  if (type === 'ascName') {
    return getProductsByAscName(products);
  }

  if (type === 'descName') {
    return getProductsByDescName(products);
  }

  if (type === 'ascPrice') {
    return getProductsByAscPrice(products);
  }

  if (type === 'descPrice') {
    return getProductsByDescPrice(products);
  }

  return [];
};
