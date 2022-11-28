import React, { useEffect, useState } from 'react';
import { getSearchData, saveSearchData } from '../../utils/local-storage';
import { SearchInput } from './SearchBar.styled';
import { ProductContext } from '../../context/ProductContext/product-context';

type TProps = {
  dataTestId?: string;
};

export const SearchBar = ({ dataTestId = 'search-bar' }: TProps) => {
  const { onHandleKeyUpEnter } = React.useContext(ProductContext);
  const [searchVal, setSearchVal] = useState('');

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;

    const searchValue = event.target.value;

    setSearchVal(searchValue);
    saveSearchData(searchValue.trim());
  };

  const onInputEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !(event.target instanceof HTMLInputElement && event.key === 'Enter') ||
      !onHandleKeyUpEnter
    ) {
      return;
    }
    onHandleKeyUpEnter(event.target.value.trim()).then();
  };

  useEffect(() => {
    const localData = getSearchData();
    if (localData) setSearchVal(localData);
  }, []);

  return (
    <SearchInput
      placeholder="Search by..."
      type="search"
      data-testid={dataTestId}
      onKeyUp={onInputEnterPress}
      value={searchVal}
      onChange={onHandleChange}
    />
  );
};
