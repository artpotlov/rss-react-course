import React from 'react';
import { TGood } from '../../types/types';
import { Card } from '../Card';
import styled from '@emotion/styled';

type TProps = {
  goods: TGood[];
  dataTestId?: string;
};

const CardList: React.FC<TProps> = ({ goods, dataTestId }) => {
  return (
    <Wrapper data-testid={dataTestId}>
      {goods.map(({ id, title, price, category, image }) => (
        <Card key={id} title={title} price={price} category={category} image={image} />
      ))}
    </Wrapper>
  );
};

CardList.defaultProps = { dataTestId: 'card-list' };

export default CardList;

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.25rem;
`;
