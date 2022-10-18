import React, { useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { CardList } from '../../components/CardList';
import styled from '@emotion/styled';
import { TGood } from '../../types/types';
import { getAllProducts, getLimitProducts } from '../../utils/api';
import { Loader } from '../../components/Loader';

type TProps = {
  dataTestId?: string;
};

const HomePage: React.FC<TProps> = ({ dataTestId }) => {
  const [products, setProducts] = useState<TGood[]>([]);
  const [searchVal, setSearchVal] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const products = await getAllProducts();
        const filteringData = products.filter((product) =>
          product.title.toLowerCase().includes(searchVal.toLowerCase())
        );
        setProducts(filteringData);
        setLoading(false);
      } catch (error) {
        if (!(error instanceof ErrorEvent)) return;
        console.error(error.message);
      }
    })();
  }, [searchVal]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setProducts(await getLimitProducts());
        setLoading(false);
      } catch (error) {
        if (!(error instanceof ErrorEvent)) return;
        console.error(error.message);
      }
    })();
  }, []);

  return (
    <section data-testid={dataTestId}>
      <HeaderContainer>
        <h1>Home Page</h1>
        <SearchBar setValue={setSearchVal} />
      </HeaderContainer>
      {loading && <Loader />}
      {!loading && <CardList goods={products} />}
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
