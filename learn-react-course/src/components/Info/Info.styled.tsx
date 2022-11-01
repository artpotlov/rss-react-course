import styled from '@emotion/styled';

export const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  gap: 16px;
  padding: 32px;
  align-items: center;
`;

export const InfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

export const InfoImage = styled.img`
  max-width: 200px;
  max-height: 200px;
  object-fit: contain;
`;

export const InfoTitle = styled.span`
  font-size: 20px;
  line-height: 1.2;
  font-weight: bold;
`;

export const InfoCategory = styled.span`
  font-size: 14px;
  line-height: 1.5;
`;

export const InfoPrice = styled.span`
  font-size: 18px;
  line-height: 1.2;
`;

export const InfoDescription = styled.span`
  font-size: 12px;
  line-height: 1.5;
  color: gray;
`;
