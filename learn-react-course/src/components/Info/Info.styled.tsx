import styled from '@emotion/styled';

export const InfoContainer = styled.div`
  height: 100%;
  padding: 32px;
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const InfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
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
