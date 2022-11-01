import React from 'react';
import { TProduct } from '../../types/types';
import {
  InfoCategory,
  InfoContainer,
  InfoDescription,
  InfoImage,
  InfoPrice,
  InfoTextWrapper,
  InfoTitle,
} from './Info.styled';

type TProps = {
  dataTestId?: string;
} & Partial<TProduct>;

export const Info = ({
  title,
  category,
  price,
  description,
  images,
  dataTestId = 'info',
}: TProps) => {
  return (
    <InfoContainer data-testid={dataTestId}>
      <InfoImage src={Array.isArray(images) ? images[0] : ''} alt={title} />
      <InfoTextWrapper>
        <InfoTitle>{title}</InfoTitle>
        <InfoCategory>{category?.name}</InfoCategory>
        <InfoPrice>$ {price}</InfoPrice>
        <InfoDescription>{description}</InfoDescription>
      </InfoTextWrapper>
    </InfoContainer>
  );
};
