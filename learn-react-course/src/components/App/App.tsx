import React from 'react';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

type TProps = {
  dataTestId?: string;
};

export const App = ({ dataTestId = 'app' }: TProps) => {
  return (
    <Provider store={store}>
      <Header />
      <main data-testid={dataTestId}>
        <Outlet />
      </main>
    </Provider>
  );
};
