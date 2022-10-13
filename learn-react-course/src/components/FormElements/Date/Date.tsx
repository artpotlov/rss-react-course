import styled from '@emotion/styled';
import React from 'react';
import Title from '../Title/Title';
import HelperText from '../HelperText/HelperText';
import { css } from '@emotion/react';
import Required from '../Required/Required';

type TCustomProps = {
  title?: string;
  helperText?: string;
  error?: boolean;
  type?: 'date';
};

type TProps = TCustomProps & React.ComponentProps<'input'>;

const styleError = css`
  border: 1px solid #f57e77;
`;

const BaseDate = styled.input<TCustomProps>`
  margin-top: 8px;
  height: 58px;
  outline: 0;
  border: 1px solid #cfd3d5;
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;

  &:focus {
    border: 1px solid #5570f1;
  }

  ${(props) => (props.error ? styleError : '')}
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Date = ({ title, helperText, className, ...props }: TProps) => {
  return (
    <Label className={className}>
      {Boolean(title) && (
        <Title>
          {title}
          {props.required && <Required />}
        </Title>
      )}
      <BaseDate type="date" {...props} />
      {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
    </Label>
  );
};

export default Date;
