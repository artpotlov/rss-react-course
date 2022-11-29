import React, { useEffect, useState } from 'react';
import { getSearchData, saveSearchData } from '../../utils/local-storage';
import { SearchInput } from './SearchBar.styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getProductsByPage, getProductsBySearchVal } from '../../store/thunks/Thunks';

type TProps = {
  dataTestId?: string;
};

export const SearchBar = ({ dataTestId = 'search-bar' }: TProps) => {
  const { currentPage } = useAppSelector((state) => state.productsReducer);
  const dispatch = useAppDispatch();
  const [searchVal, setSearchVal] = useState('');

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;

    const searchValue = event.target.value;

    setSearchVal(searchValue);
    saveSearchData(searchValue.trim());
  };

  const onInputEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement && event.key === 'Enter')) {
      return;
    }

    const searchValue = event.target.value.trim();

    if (searchValue.length === 0) {
      dispatch(getProductsByPage(currentPage));
      return;
    }

    dispatch(getProductsBySearchVal(event.target.value.trim()));
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
