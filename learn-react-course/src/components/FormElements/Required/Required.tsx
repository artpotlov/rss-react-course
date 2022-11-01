import React from 'react';
import { RequiredWrapper } from './Required.styled';

export const Required = (props: React.ComponentPropsWithoutRef<'span'>) => {
  return <RequiredWrapper {...props}>&nbsp;*</RequiredWrapper>;
};
