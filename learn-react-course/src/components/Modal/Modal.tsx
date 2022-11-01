import React from 'react';
import { createPortal } from 'react-dom';
import { ModalCloseBtn, ModalContainer, ModalWrapper } from './Modal.styled';

type TProps = {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  width?: number;
  height?: number;
  dataTestId?: string;
} & React.PropsWithChildren;

export const Modal = ({ setOpen, children, dataTestId = 'modal', ...props }: TProps) => {
  const closeModal = () => {
    if (!setOpen) return;
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    setOpen(false);
  };

  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = '1rem';

  return createPortal(
    <ModalContainer data-testid={dataTestId} onClick={closeModal}>
      <ModalWrapper onClick={(e) => e.stopPropagation()} {...props}>
        <ModalCloseBtn onClick={closeModal}>X</ModalCloseBtn>
        {children}
      </ModalWrapper>
    </ModalContainer>,
    document.body
  );
};
