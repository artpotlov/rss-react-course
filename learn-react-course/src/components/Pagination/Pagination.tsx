import React from 'react';
import { PaginationButton, PaginationContainer, PaginationPage } from './Pagination.styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { productsActions } from '../../store/slices/products/products.slice';
import { selectProducts } from '../../store/selectors/products';

export const Pagination = () => {
  const { currentPage, totalPages } = useAppSelector(selectProducts);
  const { setPrevPage, setNextPage } = productsActions;
  const dispatch = useAppDispatch();

  const onHandleClickPrev = () => {
    dispatch(setPrevPage());
  };

  const onHandleClickNext = () => {
    dispatch(setNextPage());
  };

  return (
    <PaginationContainer>
      <PaginationButton onClick={onHandleClickPrev} disabled={currentPage <= 1}>
        Prev
      </PaginationButton>
      <PaginationPage>
        {currentPage} / {totalPages}
      </PaginationPage>
      <PaginationButton onClick={onHandleClickNext} disabled={currentPage >= totalPages}>
        Next
      </PaginationButton>
    </PaginationContainer>
  );
};
