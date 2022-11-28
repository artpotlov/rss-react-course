import React from 'react';
import { Card } from '../Card';
import { CardListWrapper } from './CardList.styled';
import { ProductContext } from '../../context/ProductContext/product-context';
import { Loader } from '../Loader';
import { routes } from '../../router/routes';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '../Pagination';

type TProps = {
  dataTestId?: string;
};

export const CardList = ({ dataTestId = 'card-list' }: TProps) => {
  const { productState, isSearching } = React.useContext(ProductContext);
  const products = productState?.products || [];
  const navigate = useNavigate();

  const clickToCard = async (id: number) => {
    navigate(`${routes.products}/${id}`);
  };

  return productState?.loading ? (
    <Loader />
  ) : (
    <>
      <CardListWrapper data-testid={dataTestId}>
        {Boolean(products.length) &&
          products.map(({ id, title, price, category, images }) => (
            <Card
              key={id}
              title={title}
              price={price}
              category={category}
              images={images}
              onClick={() => clickToCard(id)}
            />
          ))}

        {!isSearching && products.length > 0 && <Pagination />}

        {productState?.error && <div>{productState.error}</div>}
      </CardListWrapper>
    </>
  );
};
