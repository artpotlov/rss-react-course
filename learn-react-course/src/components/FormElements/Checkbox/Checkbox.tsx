import React, { ForwardedRef } from 'react';
import { HelperText } from '../HelperText';
import { Title } from '../Title';
import { CheckboxInput, CheckboxLabel, CheckboxWrapper } from './Checkbox.styled';

type TProps = {
  error?: boolean;
  type?: 'checkbox';
  title?: string;
  helperText?: string;
  dataTestId?: string;
  className?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export const CheckBox = React.forwardRef(
  (
    { title, helperText, className, dataTestId = 'checkbox', ...props }: TProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <CheckboxLabel data-testid={dataTestId} className={className}>
        <CheckboxWrapper>
          <CheckboxInput ref={ref} type="checkbox" {...props} />
          {Boolean(title) && <Title>{title}</Title>}
        </CheckboxWrapper>
        {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
      </CheckboxLabel>
    );
  }
);
