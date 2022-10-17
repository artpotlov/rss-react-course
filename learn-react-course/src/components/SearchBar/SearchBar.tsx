import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { getSearchData, saveSearchData } from '../../utils/local-storage';

type TProps = {
  dataTestId?: string;
};

const SearchBar: React.FC<TProps> = ({ dataTestId }) => {
  const [value, setValue] = useState('');
  const valueRef = useRef(value);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    setValue(event.target.value.trim());
  };

  useEffect(() => {
    const valFromLocalStorage = getSearchData();
    if (!valFromLocalStorage) return;
    setValue(valFromLocalStorage);
  }, []);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      saveSearchData(valueRef.current);
    };
  }, []);

  return (
    <SearchInput
      placeholder="Search by..."
      type="search"
      data-testid={dataTestId}
      value={value}
      onChange={onInputChange}
    />
  );
};

SearchBar.defaultProps = { dataTestId: 'search-bar' };

export default SearchBar;

const SearchInput = styled.input`
  padding: 0 1rem;
  border: 1px solid lightsteelblue;
  height: 3rem;
  border-radius: 0.25rem;
  outline: 0;
  transition: border 0.2s ease-in-out;

  &:focus {
    border: 1px solid steelblue;
  }
`;
