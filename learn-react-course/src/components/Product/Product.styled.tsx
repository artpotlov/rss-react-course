import styled from '@emotion/styled';

export const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductTitle = styled.span`
  font-size: 24px;
  line-height: 1.2;
`;

export const ProductCategory = styled.span`
  font-size: 16px;
  line-height: 1;
  color: gray;
`;

export const ProductDescription = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
`;

export const ProductPrice = styled.span`
  font-size: 32px;
  line-height: 1;
`;
