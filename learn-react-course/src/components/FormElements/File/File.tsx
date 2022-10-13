import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';
import Title from '../Title/Title';
import HelperText from '../HelperText/HelperText';
import Required from '../Required/Required';

type TCustomProps = {
  title?: string;
  helperText?: string;
  error?: boolean;
  type?: 'file';
};

type TProps = TCustomProps & React.ComponentPropsWithoutRef<'input'>;

const styleError = css`
  border: 1px solid #f57e77;
`;

const BaseFile = styled.input<TCustomProps>`
  margin-top: 8px;
  height: 40px;
  border-radius: 8px;
  padding: 8px;
  outline: none;
  border: 1px solid #cfd3d5;

  &:focus {
    border: 1px solid #5570f1;
  }

  ${(props) => (props.error ? styleError : '')}
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const File = ({ title, helperText, className, ...props }: TProps) => {
  return (
    <Label className={className}>
      {Boolean(title) && (
        <Title>
          {title}
          {props.required && <Required />}
        </Title>
      )}
      <BaseFile type="file" {...props} />
      {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
    </Label>
  );
};
export default File;
