import React, { ForwardedRef } from 'react';
import { Title } from '../Title';
import { HelperText } from '../HelperText';
import { Required } from '../Required';
import { DateInput, DateLabel } from './Date.styled';

type TProps = {
  title?: string;
  helperText?: string;
  error?: boolean;
  type?: 'date';
  dataTestId?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export const Date = React.forwardRef(
  (
    { title, helperText, className, dataTestId = 'date', ...props }: TProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <DateLabel data-testid={dataTestId} className={className}>
        {Boolean(title) && (
          <Title>
            {title}
            {props.required && <Required />}
          </Title>
        )}
        <DateInput type="date" ref={ref} {...props} />
        {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
      </DateLabel>
    );
  }
);
