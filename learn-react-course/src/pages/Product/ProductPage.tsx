import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { Product } from '../../components/Product';
import { routes } from '../../router/routes';
import { ProductPageContainer, ProductPageLink } from './ProductPage.styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getSingleProduct } from '../../store/thunks/Thunks';

export const ProductPage = () => {
  const { product, isLoading } = useAppSelector((state) => state.productReducer);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(getSingleProduct(id));
  }, [id, dispatch]);

  return isLoading ? (
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
