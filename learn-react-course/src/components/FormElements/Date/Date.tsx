import React, { ForwardedRef } from 'react';
import { Title } from '../Title';
import { HelperText } from '../HelperText';
import { Required } from '../Required';
import { DateInput, DateLabel } from './Date.styled';

type TCustomProps = {
  title?: string;
  helperText?: string;
  error?: boolean;
  type?: 'date';
};

type TProps = TCustomProps & React.ComponentProps<'input'>;

export const Date = React.forwardRef(
  ({ title, helperText, className, ...props }: TProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <DateLabel className={className}>
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
