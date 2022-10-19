import React, { ForwardedRef } from 'react';
import HelperText from '../HelperText/HelperText';
import Title from '../Title/Title';
import Required from '../Required/Required';
import Field from './Field.styled';
import Label from './Label.styled';

type TFieldType = 'text' | 'password' | 'email' | 'tel';

type TCustomProps = {
  title?: string;
  helperText?: string;
  error?: boolean;
  type?: TFieldType;
};

type TProps = TCustomProps & React.ComponentPropsWithoutRef<'input'>;

const TextField = React.forwardRef(
  (
    { title, helperText, className, required, ...props }: TProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Label className={className}>
        {Boolean(title) && (
          <Title>
            {title}
            {required && <Required />}
          </Title>
        )}
        <Field ref={ref} required={required} {...props} />
        {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
      </Label>
    );
  }
);

export default TextField;
