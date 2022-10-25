import React, { useState } from 'react';
import { TProduct } from '../../types/types';
import { Card } from '../Card';
import styled from '@emotion/styled';
import { Modal } from '../Modal';
import { getProductByID } from '../../utils/api';
import { Info } from '../Info';

type TProps = {
  goods?: TProduct[];
  dataTestId?: string;
};

const CardList: React.FC<TProps> = ({ goods, dataTestId }) => {
  const [isShowModal, setShowModal] = useState(false);
  const [fullCardData, setFullCardData] = useState<Partial<TProduct>>({});
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
          goods?.map(({ id, title, price, category, images }) => (
            <Card
              key={id}
              title={title}
              price={price}
              category={category}
              images={images}
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
