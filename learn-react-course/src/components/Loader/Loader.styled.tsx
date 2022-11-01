import { keyframes } from '@emotion/react/dist/emotion-react.cjs';
import styled from '@emotion/styled';

const LoaderAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const LoaderIconContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background: conic-gradient(from 0deg at 50% 50%, #064cff 0deg, rgba(6, 76, 255, 0) 360deg);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${LoaderAnimation} 0.3s linear infinite;
`;

export const LoaderCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background-color: #fff;
`;
