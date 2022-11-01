import React, { ForwardedRef } from 'react';
import { Title } from '../Title';
import { HelperText } from '../HelperText';
import { Required } from '../Required';
import { SelectElement, SelectWrapper } from './Select.styled';

type TProps = {
  error?: boolean;
  title?: string;
  helperText?: string;
  dataTestId?: string;
  options?: {
    value: string | number;
    title: string;
  }[];
} & React.ComponentPropsWithoutRef<'select'>;

export const Select = React.forwardRef(
  (
    { title, helperText, options, className, dataTestId = 'select', ...props }: TProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <SelectWrapper data-testid={dataTestId} className={className}>
        {Boolean(title) && (
          <Title>
            {title}
            {props.required && <Required />}
          </Title>
        )}
        <SelectElement ref={ref} {...props}>
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
        </SelectElement>
        {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
      </SelectWrapper>
    );
  }
);
