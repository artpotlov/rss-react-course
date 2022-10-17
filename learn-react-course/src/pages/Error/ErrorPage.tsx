import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../router/routes';
import styled from '@emotion/styled';

type TProps = {
  dataTestId?: string;
};

const ErrorPage: React.FC<TProps> = ({ dataTestId }) => {
  return (
    <ErrorContainer data-testid={dataTestId}>
      <div>
        <h1>404</h1>
        <p>page not found...</p>
        <Link to={routes.main}>Go home</Link>
      </div>
    </ErrorContainer>
  );
};

ErrorPage.defaultProps = { dataTestId: 'error-page' };

export default ErrorPage;

const ErrorContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
`;
