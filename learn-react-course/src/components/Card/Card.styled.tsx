import styled from '@emotion/styled';

export const CardWrapper = styled.div`
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

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  object-position: center;
`;

export const CardTitle = styled.span`
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

export const CardCategory = styled.span`
  font-size: 0.9rem;
  line-height: 1.5;
  color: gray;
`;

export const CardPrice = styled.span`
  margin-top: 1rem;
  font-size: 1.5rem;
  line-height: 1.5;
`;
