import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { Product } from '../../components/Product';
import { routes } from '../../router/routes';
import { SingleProductContext } from '../../context/SingleProductContext/sproduct-context';
import { ProductPageContainer, ProductPageLink } from './ProductPage.styled';

export const ProductPage = () => {
  const { productState } = useContext(SingleProductContext);
  const product = productState?.product || null;
  return productState?.loading ? (
    <Loader />
  ) : (
    <ProductPageContainer>
      <ProductPageLink to={routes.products}>Back to products</ProductPageLink>
      {product ? (
        <Product
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          images={product.images}
        />
      ) : (
        <Navigate to={routes.main} />
      )}
    </ProductPageContainer>
  );
};
