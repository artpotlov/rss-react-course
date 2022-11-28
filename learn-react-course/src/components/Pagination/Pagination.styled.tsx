import styled from '@emotion/styled';

export const PaginationContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const PaginationPage = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 1;
  font-weight: bold;
`;

export const PaginationButton = styled.button`
  border: 0;
  padding: 8px 16px;
  background-color: #e5e5e5;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #e9e9e9;
  }

  &:active {
    background-color: #e1e1e1;
  }

  &:disabled {
    background-color: #f1f1f1;
    color: #c2c2c2;
    cursor: auto;
  }
`;
