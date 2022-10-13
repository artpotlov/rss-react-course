import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import HelperText from '../HelperText/HelperText';
import Title from '../Title/Title';

type TCustomProps = {
  error?: boolean;
  type?: 'radio';
  title?: string;
  helperText?: string;
};

type TProps = TCustomProps & React.ComponentPropsWithoutRef<'input'>;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const styleError = css`
  border: 1px solid #f57e77;
`;

const BaseRadio = styled.input<TCustomProps>`
  appearance: none;
  width: 24px;
  height: 24px;
  border: 1px solid #cfd3d5;
  transition: border 0.2s ease-in-out;
  border-radius: 9999px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    background-color: #5570f1;
    border-radius: 9999px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:checked {
    border: 1px solid #5570f1;

    &::before {
      opacity: 1;
    }
  }

  ${(props) => (props.error ? styleError : '')}
`;

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Radio = ({ title, helperText, className, ...props }: TProps) => {
  return (
    <Label className={className}>
      <Wrapper>
        <BaseRadio type="radio" {...props} />
        {Boolean(title) && <Title>{title}</Title>}
      </Wrapper>
      {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
    </Label>
  );
};
export default Radio;
