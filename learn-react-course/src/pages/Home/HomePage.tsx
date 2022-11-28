import React from 'react';
import { SearchBar } from '../../components/SearchBar';
import { CardList } from '../../components/CardList';
import { HomePageHeader, HomePageWrapper } from './HomePage.styled';
import { ProductsProvider } from '../../context/ProductContext/ProductsProvider';
import { Sorting } from '../../components/Sorting';

type TProps = {
  dataTestId?: string;
  title?: string;
};

export const HomePage = ({ dataTestId = 'home-page', title = 'Home Page' }: TProps) => {
  return (
    <ProductsProvider>
      <section data-testid={dataTestId}>
        <HomePageHeader>
          <h1>{title}</h1>
          <HomePageWrapper>
            <Sorting />
            <SearchBar />
          </HomePageWrapper>
        </HomePageHeader>
        <CardList />
      </section>
    </ProductsProvider>
  );
};
