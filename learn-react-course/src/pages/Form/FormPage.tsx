import React from 'react';
import { RegForm } from '../../components/Form';

type TProps = {
  dataTestId?: string;
};

export const FormPage = ({ dataTestId }: TProps) => {
  return (
    <>
      <h1 data-testid={dataTestId || 'form-page'}>Form Page</h1>
      <RegForm />
    </>
  );
};
