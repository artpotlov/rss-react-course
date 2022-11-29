import React, { useEffect } from 'react';
import { Card } from '../Card';
import { CardListWrapper } from './CardList.styled';
import { Loader } from '../Loader';
import { routes } from '../../router/routes';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getProductsByPage } from '../../store/thunks/Thunks';
import { Pagination } from '../Pagination';
import { productsActions } from '../../store/slices/ProductsSlice';

type TProps = {
  dataTestId?: string;
};

export const CardList = ({ dataTestId = 'card-list' }: TProps) => {
  const { products, isLoading, errorMessage, currentPage, currentSortType, isSearching } =
    useAppSelector((state) => state.productsReducer);
  const { sortBy } = productsActions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const clickToCard = async (id: number) => {
    navigate(`${routes.products}/${id}`);
  };

  useEffect(() => {
    dispatch(getProductsByPage(currentPage));
  }, [currentPage, dispatch]);

  useEffect(() => {
    dispatch(sortBy(currentSortType));
  }, [currentSortType, products, dispatch, sortBy]);

  return isLoading ? (
    <Loader />
  ) : (
    <CardListWrapper data-testid={dataTestId}>
      {Boolean(products.length) &&
        products.map(({ id, title, price, category, images }) => (
          <Card
            key={id}
            title={title}
            price={price}
            category={category}
            images={images}
            onClick={() => clickToCard(id)}
          />
        ))}
      {!isSearching && products.length > 0 && <Pagination />}
      {errorMessage && <div>{errorMessage}</div>}
    </CardListWrapper>
  );
};
