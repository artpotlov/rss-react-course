import styled from '@emotion/styled';
import React from 'react';
import { createPortal } from 'react-dom';
import { keyframes } from '@emotion/react';

type TProps = {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  width?: number;
  height?: number;
  dataTestId?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const Modal: React.FC<TProps> = ({ setOpen, children, dataTestId, ...props }) => {
  const closeModal = () => {
    if (!setOpen) return;
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    setOpen(false);
  };

  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = '1rem';

  return createPortal(
    <Container onClick={closeModal}>
      <Wrapper onClick={(e) => e.stopPropagation()} data-testid={dataTestId} {...props}>
        <CloseBtn onClick={closeModal}>X</CloseBtn>
        {children}
      </Wrapper>
    </Container>,
    document.body
  );
};

Modal.defaultProps = { dataTestId: 'modal' };

export default Modal;

const FadeIn = keyframes`
  from {
    background-color: transparent;
  }

  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${FadeIn} 0.2s ease-in-out;
`;

const Wrapper = styled.div<TProps>`
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
  background-color: white;
  border-radius: 24px;
  position: absolute;
  top: ${(p) => window.scrollY + window.innerHeight / 2 - (p.height || 0) / 2}px;
  left: ${(p) => window.innerWidth / 2 - (p.width || 0) / 2}px;
  min-width: 300px;
  min-height: 300px;
  z-index: 9999;
`;

Wrapper.defaultProps = { width: 300, height: 300 };

const CloseBtn = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  top: -40px;
  right: -40px;
  border: 0;
  outline: 0;
  background-color: #fff;
  border-radius: 9999px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f8f8f8;
  }
`;
