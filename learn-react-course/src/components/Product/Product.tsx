import React from 'react';
import {TProduct} from '../../types/types';
import {
  ProductCategory,
  ProductDescription,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  ProductWrapper,
} from './Product.styled';

type TProps = Omit<TProduct, 'id'>

export const Product = ({title, price, category, description, images}: TProps) => {
  return (
    <ProductWrapper>
      <img style={{maxWidth: '400px'}} src={images[0]} alt="title"/>
      <ProductInfo>
        <ProductPrice>$ {price}</ProductPrice>
        <ProductTitle>{title}</ProductTitle>
        <ProductCategory>{category.name}</ProductCategory>
        <ProductDescription>{description}</ProductDescription>
      </ProductInfo>
    </ProductWrapper>
  );
};
