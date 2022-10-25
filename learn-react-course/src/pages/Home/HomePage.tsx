import React, { useEffect, useMemo, useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { CardList } from '../../components/CardList';
import styled from '@emotion/styled';
import { TGood } from '../../types/types';
import { getAllProducts, getLimitProducts } from '../../utils/api';
import { Loader } from '../../components/Loader';
import { AxiosError } from 'axios';

type TProps = {
  dataTestId?: string;
};

const HomePage: React.FC<TProps> = ({ dataTestId }) => {
  const [products, setProducts] = useState<TGood[]>([]);
  const [searchVal, setSearchVal] = useState('');
  const [loading, setLoading] = useState(true);

  const productsRemote = useMemo(async () => await getAllProducts(), []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const products = await productsRemote;
        const filteringData = products.filter((product) =>
          product.title.toLowerCase().includes(searchVal.toLowerCase())
        );
        if (searchVal.length === 0) {
          filteringData.splice(20);
        }
        setProducts(filteringData);
        setLoading(false);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.error(error.message);
        }
      }
    })();
  }, [searchVal, productsRemote]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const products = await getLimitProducts();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.error(error.message);
        }
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
