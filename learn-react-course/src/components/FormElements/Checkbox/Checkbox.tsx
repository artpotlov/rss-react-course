import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import HelperText from '../HelperText/HelperText';
import Title from '../Title/Title';

type TCustomProps = {
  error?: boolean;
  type?: 'checkbox';
  title?: string;
  helperText?: string;
};

type TProps = TCustomProps & React.ComponentPropsWithoutRef<'input'>;

const styleError = css`
  border: 1px solid #f57e77;
`;

const BaseCheckbox = styled.input<TCustomProps>`
  appearance: none;
  width: 24px;
  height: 24px;
  border: 1px solid #cfd3d5;
  transition: background-color 0.2s ease-in-out;
  border-radius: 8px;

  &:checked {
    background-color: #5570f1;
    border: 1px solid #5570f1;
  }

  ${(props) => (props.error ? styleError : '')}
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CheckBox = ({ title, helperText, className, ...props }: TProps) => {
  return (
    <Label className={className}>
      <Wrapper>
        <BaseCheckbox type="checkbox" {...props} />
        {Boolean(title) && <Title>{title}</Title>}
      </Wrapper>
      {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
    </Label>
  );
};

export default CheckBox;
