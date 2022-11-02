import React, { useEffect, useState } from 'react';
import { getSearchData, saveSearchData } from '../../utils/local-storage';
import { SearchInput } from './SearchBar.styled';

type TProps = {
  dataTestId?: string;
  onSetValue?: (value: string) => Promise<void>;
};

export const SearchBar = ({ onSetValue, dataTestId = 'search-bar' }: TProps) => {
  const [searchVal, setSearchVal] = useState('');

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;

    const searchValue = event.target.value.trim();

    setSearchVal(searchValue);
    saveSearchData(searchValue);
  };

  const onInputEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement && event.key === 'Enter') || !onSetValue) return;
    onSetValue(event.target.value.trim()).then();
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
