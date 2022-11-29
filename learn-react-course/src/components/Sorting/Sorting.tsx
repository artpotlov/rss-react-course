import React from 'react';
import { SortingSelect, SortingWrapper } from './Sorting.styled';
import { SORTING_VALS } from '../../shared/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { productsActions } from '../../store/slices/ProductsSlice';

export const Sorting = () => {
  const { currentSortType } = useAppSelector((state) => state.productsReducer);
  const dispatch = useAppDispatch();
  const { changeSortType } = productsActions;

  const onHandleClickOption = (target: EventTarget) => {
    if (!(target instanceof HTMLSelectElement)) {
      return;
    }

    dispatch(changeSortType(target.value));
  };

  return (
    <SortingWrapper>
      <SortingSelect
        defaultValue={currentSortType}
        onInput={({ target }) => onHandleClickOption(target)}
      >
        <option value="#" disabled>
          Choose the option
        </option>
        {SORTING_VALS.map((el) => (
          <option key={el.value} value={el.value}>
            {el.name}
          </option>
        ))}
      </SortingSelect>
    </SortingWrapper>
  );
};
