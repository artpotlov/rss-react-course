import React, { MouseEventHandler } from 'react';
import { TProduct } from '../../types/types';
import { CardCategory, CardImage, CardPrice, CardTitle, CardWrapper } from './Card.styled';

type TProps = {
  dataTestId?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
} & Partial<TProduct>;

export const Card = ({ title, category, price, images, dataTestId = 'card', onClick }: TProps) => {
  return (
    <CardWrapper data-testid={dataTestId} onClick={onClick}>
      <CardImage src={images && images[0]} alt={title} loading="lazy" />
      <CardTitle>{title}</CardTitle>
      <CardCategory>{category?.name}</CardCategory>
      <CardPrice>$ {price}</CardPrice>
    </CardWrapper>
  );
};
