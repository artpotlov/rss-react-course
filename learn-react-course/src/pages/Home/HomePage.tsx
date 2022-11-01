import React, { useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { CardList } from '../../components/CardList';
import { TProduct } from '../../types/types';
import { getAllProducts, getLimitProducts } from '../../utils/api';
import { Loader } from '../../components/Loader';
import { HomePageHeader } from './HomePage.styled';

type TProps = {
  dataTestId?: string;
};

export const HomePage = ({ dataTestId }: TProps) => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const handleKeyUpEnter = async (searchVal: string) => {
    setLoading(true);

    const response = await getAllProducts();
    if (!response || !Array.isArray(response.data)) return;
    const products = response.data;

    const filteringData = products.filter((product) =>
      product.title.toLowerCase().includes(searchVal.toLowerCase())
    );

    if (searchVal.length === 0) {
      filteringData.splice(20);
    }

    setProducts(filteringData);
    setLoading(false);
  };

  useEffect(() => {
    const getRequest = async () => {
      setLoading(true);
      const response = await getLimitProducts();
      if (!response || !Array.isArray(response.data)) return;
      setProducts(response.data);
      setLoading(false);
    };

    getRequest().then();
  }, []);

  return (
    <section data-testid={dataTestId || 'home-page'}>
      <HomePageHeader>
        <h1>Home Page</h1>
        <SearchBar onSetValue={handleKeyUpEnter} />
      </HomePageHeader>
      {loading ? <Loader /> : <CardList goods={products} />}
    </section>
  );
};
