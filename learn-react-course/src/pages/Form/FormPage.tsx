import React from 'react';
import { RegForm } from '../../components/Form';

type TProps = {
  dataTestId?: string;
};

const FormPage = ({ dataTestId = 'form-page' }: TProps) => {
  return (
    <>
      <h1 data-testid={dataTestId}>Form Page</h1>
      <RegForm />
    </>
  );
};

export default FormPage;
