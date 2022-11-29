import React from 'react';
import { PaginationButton, PaginationContainer, PaginationPage } from './Pagination.styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { productsActions } from '../../store/slices/ProductsSlice';

export const Pagination = () => {
  const { currentPage, totalPages } = useAppSelector((state) => state.productsReducer);
  const { getPrevPage, getNextPage } = productsActions;
  const dispatch = useAppDispatch();

  const onHandleClickPrev = () => {
    dispatch(getPrevPage());
  };

  const onHandleClickNext = () => {
    dispatch(getNextPage());
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
