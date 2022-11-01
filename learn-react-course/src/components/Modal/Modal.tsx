import React from 'react';
import { createPortal } from 'react-dom';
import { ModalCloseBtn, ModalContainer, ModalWrapper } from './Modal.styled';

type TProps = {
  setShowModal?: (state: 'open' | 'close') => void;
  width?: number;
  height?: number;
  dataTestId?: string;
} & React.PropsWithChildren;

export const Modal = ({ setShowModal, children, dataTestId = 'modal', width, height }: TProps) => {
  const closeModal = () => {
    if (!setShowModal) return;
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    setShowModal('close');
  };

  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = '1rem';

  return createPortal(
    <ModalContainer data-testid={dataTestId} onClick={closeModal}>
      <ModalWrapper onClick={(e) => e.stopPropagation()} width={width} height={height}>
        <ModalCloseBtn onClick={closeModal}>X</ModalCloseBtn>
        {children}
      </ModalWrapper>
    </ModalContainer>,
    document.body
  );
};
