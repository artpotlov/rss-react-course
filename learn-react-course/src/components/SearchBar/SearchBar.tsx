import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { getSearchData, saveSearchData } from '../../utils/local-storage';

type TProps = {
  dataTestId?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<TProps> = ({ setValue, dataTestId }) => {
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
    if (!(event.target instanceof HTMLInputElement && event.key === 'Enter') || !setValue) return;
    setValue(event.target.value.trim());
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

SearchBar.defaultProps = { dataTestId: 'search-bar' };

export default SearchBar;

const SearchInput = styled.input`
  height: 58px;
  border: 1px solid #cfd3d5;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 1;
  outline: none;
  transition: border 0.2s ease-in-out;

  &::placeholder {
    color: #abafb1;
  }

  &:focus {
    border: 1px solid #5570f1;
  }
`;
