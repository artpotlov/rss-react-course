import React, { ForwardedRef } from 'react';
import { HelperText } from '../HelperText';
import { Title } from '../Title';
import { CheckboxInput, CheckboxLabel, CheckboxWrapper } from './Checkbox.styled';

type TCustomProps = {
  error?: boolean;
  type?: 'checkbox';
  title?: string;
  helperText?: string;
};

type TProps = TCustomProps & React.ComponentPropsWithoutRef<'input'>;

export const CheckBox = React.forwardRef(
  ({ title, helperText, className, ...props }: TProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <CheckboxLabel className={className}>
        <CheckboxWrapper>
          <CheckboxInput ref={ref} type="checkbox" {...props} />
          {Boolean(title) && <Title>{title}</Title>}
        </CheckboxWrapper>
        {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
      </CheckboxLabel>
    );
  }
);
