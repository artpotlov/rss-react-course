import React, { MouseEventHandler } from 'react';
import styled from '@emotion/styled';

type TProps = {
  title: string;
  price: number;
  category: string;
  image: string;
  dataTestId?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const Card: React.FC<TProps> = ({ title, category, price, image, dataTestId, onClick }) => {
  return (
    <Wrapper data-testid={dataTestId} onClick={onClick}>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Category>{category}</Category>
      <Price>$ {price}</Price>
    </Wrapper>
  );
};

Card.defaultProps = { dataTestId: 'card' };

export default Card;

const Wrapper = styled.div`
  cursor: ${(p) => (p.onClick ? 'pointer' : 'auto')};
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid lavender;
  border-radius: 1rem;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  object-position: center;
`;

const Title = styled.span`
  margin-top: 2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 3rem;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: bold;
  overflow: hidden;
`;

const Category = styled.span`
  font-size: 0.9rem;
  line-height: 1.5;
  color: gray;
`;

const Price = styled.span`
  margin-top: 1rem;
  font-size: 1.5rem;
  line-height: 1.5;
`;
