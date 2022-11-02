import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

type TProps = {
  width?: number;
  height?: number;
};

const FadeIn = keyframes`
  from {
    background-color: transparent;
  }

  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${FadeIn} 0.2s ease-in-out;
`;

export const ModalWrapper = styled.div<TProps>`
  width: ${(p) => p.width || 300}px;
  height: ${(p) => p.height || 300}px;
  min-width: 300px;
  min-height: 300px;
  position: absolute;
  top: ${(p) => window.scrollY + window.innerHeight / 2 - (p.height || 0) / 2}px;
  left: ${(p) => window.innerWidth / 2 - (p.width || 0) / 2}px;
  border-radius: 24px;
  background-color: white;
  z-index: 9999;
`;

export const ModalCloseBtn = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  top: -40px;
  right: -40px;
  border: 0;
  border-radius: 9999px;
  background-color: #fff;
  outline: 0;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f8f8f8;
  }
`;
