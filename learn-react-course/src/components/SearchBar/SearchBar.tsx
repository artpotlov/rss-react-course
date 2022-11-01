import React, { useEffect, useRef, useState } from 'react';
import { getSearchData, saveSearchData } from '../../utils/local-storage';
import { SearchInput } from './SearchBar.styled';

type TProps = {
  dataTestId?: string;
  onSetValue?: (value: string) => Promise<void>;
};

export const SearchBar = ({ onSetValue, dataTestId = 'search-bar' }: TProps) => {
  const [searchVal, setSearchVal] = useState(getSearchData() || '');
  const searchValRef = useRef(searchVal);

  useEffect(() => {
    searchValRef.current = searchVal;
  }, [searchVal]);

  useEffect(() => {
    return () => {
      saveSearchData(searchValRef.current);
    };
  }, []);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    setSearchVal(event.target.value.trim());
  };

  const onInputEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement && event.key === 'Enter') || !onSetValue) return;
    onSetValue(event.target.value.trim());
  };

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
