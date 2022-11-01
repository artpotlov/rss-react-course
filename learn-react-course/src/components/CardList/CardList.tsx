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

export const CardList = ({ goods, dataTestId = 'card-list' }: TProps) => {
  const [isShowModal, setShowModal] = useState(false);
  const [fullCardData, setFullCardData] = useState<Partial<TProduct>>({});
  const products = goods || [];

  const toggleModal = (state: 'open' | 'close') => {
    if (state === 'open') {
      setShowModal(true);
    }

    if (state === 'close') {
      setShowModal(false);
    }
  };

  const clickToCard = async (id: number) => {
    toggleModal('close');
    const response = await getProductByID(id);
    if (!response || !('title' in response.data)) return;
    setFullCardData(response.data);
    toggleModal('open');
  };

  return (
    <>
      {isShowModal && (
        <Modal width={700} height={300} setShowModal={toggleModal}>
          <Info
            id={fullCardData.id}
            title={fullCardData.title}
            price={fullCardData.price}
            category={fullCardData.category}
            images={fullCardData.images}
            description={fullCardData.description}
          />
        </Modal>
      )}
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
        {!Boolean(products.length) && <div>☹️ Products are not found...</div>}
      </CardListWrapper>
    </>
  );
};
