import React, { ForwardedRef } from 'react';
import { HelperText } from '../HelperText/';
import { Title } from '../Title';
import { RadioInput, RadioLabel, RadioWrapper } from './Radio.styled';

type TProps = {
  error?: boolean;
  type?: 'radio';
  title?: string;
  helperText?: string;
  dataTestId?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export const Radio = React.forwardRef(
  (
    { title, helperText, className, dataTestId = 'radio', ...props }: TProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <RadioLabel data-testid={dataTestId} className={className}>
        <RadioWrapper>
          <RadioInput type="radio" ref={ref} {...props} />
          {Boolean(title) && <Title>{title}</Title>}
        </RadioWrapper>
        {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
      </RadioLabel>
    );
  }
);
