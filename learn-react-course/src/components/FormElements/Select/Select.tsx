import styled from '@emotion/styled';
import React from 'react';
import Title from '../Title/Title';
import HelperText from '../HelperText/HelperText';
import { css } from '@emotion/react';
import Required from '../Required/Required';

type TCustomProps = {
  error?: boolean;
  title?: string;
  helperText?: string;
  options?: {
    value: string | number;
    title: string;
  }[];
};

type TProps = TCustomProps & React.ComponentPropsWithoutRef<'select'>;

const styleError = css`
  border: 1px solid #f57e77;
`;

const BaseSelect = styled.select<TCustomProps>`
  margin-top: 8px;
  height: 58px;
  border: 1px solid #cfd3d5;
  border-radius: 8px;
  padding: 8px 8px;
  outline: none;
  position: relative;
  font-size: 16px;
  line-height: 1;

  &:focus {
    border: 1px solid #5570f1;
  }

  ${(props) => (props.error ? styleError : '')}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Select = ({ title, helperText, options, className, ...props }: TProps) => {
  return (
    <Wrapper className={className}>
      {Boolean(title) && (
        <Title>
          {title}
          {props.required && <Required />}
        </Title>
      )}
      <BaseSelect {...props}>
        <option value="0" disabled>
          Chose the item:
        </option>
        {Boolean(options?.length) &&
          options?.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            );
          })}
      </BaseSelect>
      {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
    </Wrapper>
  );
};

export default Select;
