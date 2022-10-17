import React from 'react';
import { SearchBar } from '../../components/SearchBar';
import { goodsData } from '../../data';
import { CardList } from '../../components/CardList';
import styled from '@emotion/styled';

type TProps = {
  dataTestId?: string;
};

const HomePage: React.FC<TProps> = ({ dataTestId }) => {
  return (
    <section data-testid={dataTestId}>
      <HeaderContainer>
        <h1>Home Page</h1>
        <SearchBar />
      </HeaderContainer>
      <CardList goods={goodsData} />
    </section>
  );
};

HomePage.defaultProps = { dataTestId: 'home-page' };

export default HomePage;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
