import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../router/routes';
import { ErrorPageContainer } from './ErrorPage.styled';

type TProps = {
  dataTestId?: string;
};

export const ErrorPage = ({ dataTestId }: TProps) => {
  return (
    <ErrorPageContainer data-testid={dataTestId}>
      <div>
        <h1>404</h1>
        <p>page not found...</p>
        <Link to={routes.main}>Go home</Link>
      </div>
    </ErrorPageContainer>
  );
};
