import React, { ForwardedRef } from 'react';
import { HelperText } from '../HelperText';
import { Title } from '../Title';
import { Required } from '../Required';
import { TextFieldInput, TextFieldLabel } from './TextField.styled';

type TFieldType = 'text' | 'password' | 'email' | 'tel';

type TCustomProps = {
  title?: string;
  helperText?: string;
  error?: boolean;
  type?: TFieldType;
};

type TProps = TCustomProps & React.ComponentPropsWithoutRef<'input'>;

export const TextField = React.forwardRef(
  (
    { title, helperText, className, required, ...props }: TProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <TextFieldLabel className={className}>
        {Boolean(title) && (
          <Title>
            {title}
            {required && <Required />}
          </Title>
        )}
        <TextFieldInput ref={ref} required={required} {...props} />
        {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
      </TextFieldLabel>
    );
  }
);
