import React from 'react';
import { RequiredWrapper } from './Required.styled';

type TProps = {
  dataTestId?: string;
};

export const Required = ({ dataTestId = 'required' }: TProps) => {
  return <RequiredWrapper data-testid={dataTestId}>&nbsp;*</RequiredWrapper>;
};
