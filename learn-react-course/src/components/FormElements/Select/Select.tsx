import React, { ForwardedRef } from 'react';
import Title from '../Title/Title';
import HelperText from '../HelperText/HelperText';
import Required from '../Required/Required';
import BaseSelect from './BaseSelect.styled';
import Wrapper from './Wrapper.styled';

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

const Select = React.forwardRef(
  (
    { title, helperText, options, className, ...props }: TProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <Wrapper className={className}>
        {Boolean(title) && (
          <Title>
            {title}
            {props.required && <Required />}
          </Title>
        )}
        <BaseSelect ref={ref} {...props}>
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
  }
);

export default Select;
