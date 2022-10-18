import styled from '@emotion/styled';
import React from 'react';
import { TGood } from '../../types/types';

type TProps = {
  dataTestId?: string;
} & Partial<TGood> &
  React.ComponentPropsWithoutRef<'div'>;

const Info: React.FC<TProps> = ({ title, category, price, description, image, dataTestId }) => {
  return (
    <Container data-testid={dataTestId}>
      <Image src={image} alt={title} />
      <TextWrapper>
        <Title>{title}</Title>
        <Category>{category}</Category>
        <Price>$ {price}</Price>
        <Description>{description}</Description>
      </TextWrapper>
    </Container>
  );
};

Info.defaultProps = { dataTestId: 'info-modal' };

export default Info;

const Container = styled.div`
  display: flex;
  height: 100%;
  gap: 16px;
  padding: 32px;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
  object-fit: contain;
`;

const Title = styled.span`
  font-size: 20px;
  line-height: 1.2;
  font-weight: bold;
`;

const Category = styled.span`
  font-size: 14px;
  line-height: 1.5;
`;

const Price = styled.span`
  font-size: 18px;
  line-height: 1.2;
`;

const Description = styled.span`
  font-size: 12px;
  line-height: 1.5;
  color: gray;
`;
