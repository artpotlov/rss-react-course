import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import HelperText from '../HelperText/HelperText';
import Title from '../Title/Title';
import Required from '../Required/Required';

type TFieldType = 'text' | 'password' | 'email' | 'tel';

type TCustomProps = {
  title?: string;
  helperText?: string;
  error?: boolean;
  type?: TFieldType;
};

type TProps = TCustomProps & React.ComponentPropsWithoutRef<'input'>;

const styleError = css`
  border: 1px solid #f57e77;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Field = styled.input<TCustomProps>`
  margin-top: 8px;
  height: 58px;
  border: 1px solid #cfd3d5;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 1;
  outline: none;
  transition: border 0.2s ease-in-out;

  &::placeholder {
    color: #abafb1;
  }

  &:focus {
    border: 1px solid #5570f1;
  }

  ${(props) => (props.error ? styleError : '')}
`;

const TextField = ({ title, helperText, className, ...props }: TProps) => {
  return (
    <Label className={className}>
      {Boolean(title) && (
        <Title>
          {title}
          {props.required && <Required />}
        </Title>
      )}
      <Field {...props} />
      {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
    </Label>
  );
};

export default TextField;
