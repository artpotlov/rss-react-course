import React from 'react';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';

type TProps = {
  dataTestId?: string;
};

export const App = ({ dataTestId = 'app' }: TProps) => {
  return (
    <>
      <Header />
      <main data-testid={dataTestId}>
        <Outlet />
      </main>
    </>
  );
};
