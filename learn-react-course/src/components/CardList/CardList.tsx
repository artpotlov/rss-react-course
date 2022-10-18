import React, { useState } from 'react';
import { TGood } from '../../types/types';
import { Card } from '../Card';
import styled from '@emotion/styled';
import { Modal } from '../Modal';
import { getProductByID } from '../../utils/api';
import { Info } from '../Info';

type TProps = {
  goods?: TGood[];
  dataTestId?: string;
};

const CardList: React.FC<TProps> = ({ goods, dataTestId }) => {
  const initialState: Omit<TGood, 'id'> = {
    title: '',
    category: '',
    price: 0,
    description: '',
    image: '',
  };
  const [isShowModal, setShowModal] = useState(false);
  const [fullCardData, setFullCardData] = useState<Omit<TGood, 'id'>>(initialState);
  const clickToCard = async (id: number) => {
    setShowModal(false);
    const data = await getProductByID(id);
    if (!data) return;
    setFullCardData(data);
    setShowModal(true);
  };
  return (
    <>
      {isShowModal && (
        <Modal width={700} height={400} setOpen={setShowModal}>
          <Info {...fullCardData} />
        </Modal>
      )}
      <Wrapper data-testid={dataTestId}>
        {Boolean(goods?.length) &&
          goods?.map(({ id, title, price, category, image }) => (
            <Card
              key={id}
              title={title}
              price={price}
              category={category}
              image={image}
              onClick={() => clickToCard(id)}
            />
          ))}
        {!Boolean(goods?.length) && <div>☹️ Products are not found...</div>}
      </Wrapper>
    </>
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
