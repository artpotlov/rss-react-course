import React, { useContext } from 'react';
import { SortingSelect, SortingWrapper } from './Sorting.styled';
import { SORTING_VALS } from '../../shared/constants';
import { ProductContext } from '../../context/ProductContext/product-context';

export const Sorting = () => {
  const { productSorting, onHandleToggleSort } = useContext(ProductContext);

  const onHandleClickOption = (target: EventTarget) => {
    if (!onHandleToggleSort || !(target instanceof HTMLSelectElement)) {
      return;
    }

    onHandleToggleSort(target.value);
  };

  return (
    <SortingWrapper>
      <SortingSelect
        defaultValue={productSorting}
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
