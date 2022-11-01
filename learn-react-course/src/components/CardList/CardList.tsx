import React, { useState } from 'react';
import { TProduct } from '../../types/types';
import { Card } from '../Card';
import { Modal } from '../Modal';
import { getProductByID } from '../../utils/api';
import { Info } from '../Info';
import { CardListWrapper } from './CardList.styled';

type TProps = {
  goods?: TProduct[];
  dataTestId?: string;
};

export const CardList = ({ goods, dataTestId }: TProps) => {
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
      <CardListWrapper data-testid={dataTestId}>
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
      </CardListWrapper>
    </>
  );
};
