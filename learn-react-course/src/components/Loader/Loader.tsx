import React from 'react';
import { LoaderCircle, LoaderContainer, LoaderIconContainer } from './Loader.styled';

type TProps = {
  dataTestId?: string;
};

export const Loader = ({ dataTestId = 'loader' }: TProps) => {
  return (
    <LoaderContainer data-testid={dataTestId}>
      <LoaderIconContainer>
        <LoaderCircle />
      </LoaderIconContainer>
      <span>Loading data...</span>
    </LoaderContainer>
  );
};
