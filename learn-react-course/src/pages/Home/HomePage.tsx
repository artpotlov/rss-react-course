import React from 'react';
import { SearchBar } from '../../components/SearchBar';
import { CardList } from '../../components/CardList';
import { HomePageHeader, HomePageWrapper } from './HomePage.styled';
import { Sorting } from '../../components/Sorting';

type TProps = {
  dataTestId?: string;
  title?: string;
};

const HomePage = ({ dataTestId = 'home-page', title = 'Home Page' }: TProps) => {
  return (
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
  );
};

export default HomePage;
