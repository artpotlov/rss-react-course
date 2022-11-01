import React, { ForwardedRef } from 'react';
import { HelperText } from '../HelperText/';
import { Title } from '../Title';
import { RadioInput, RadioLabel, RadioWrapper } from './Radio.styled';

type TCustomProps = {
  error?: boolean;
  type?: 'radio';
  title?: string;
  helperText?: string;
};

type TProps = TCustomProps & React.ComponentPropsWithoutRef<'input'>;

export const Radio = React.forwardRef(
  ({ title, helperText, className, ...props }: TProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <RadioLabel className={className}>
        <RadioWrapper>
          <RadioInput type="radio" ref={ref} {...props} />
          {Boolean(title) && <Title>{title}</Title>}
        </RadioWrapper>
        {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
      </RadioLabel>
    );
  }
);
