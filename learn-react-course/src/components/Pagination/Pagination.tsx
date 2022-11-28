import React from 'react';
import { ProductContext } from '../../context/ProductContext/product-context';
import { PaginationButton, PaginationContainer, PaginationPage } from './Pagination.styled';

export const Pagination = () => {
  const { currentPage, totalPages, onHandleTogglePage } = React.useContext(ProductContext);

  const onHandleClickPrev = () => {
    return onHandleTogglePage ? onHandleTogglePage('prev') : null;
  };

  const onHandleClickNext = () => {
    return onHandleTogglePage ? onHandleTogglePage('next') : null;
  };

  const setDisableButton = (
    numPage: number | undefined,
    type: 'prev' | 'next',
    totalPages = 10
  ) => {
    if (!numPage) {
      return true;
    }
    return (type === 'prev' && numPage <= 1) || (type === 'next' && numPage >= totalPages);
  };

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={onHandleClickPrev}
        disabled={setDisableButton(currentPage, 'prev')}
      >
        Prev
      </PaginationButton>
      <PaginationPage>
        {currentPage} / {totalPages}
      </PaginationPage>
      <PaginationButton
        onClick={onHandleClickNext}
        disabled={setDisableButton(currentPage, 'next')}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  );
};
