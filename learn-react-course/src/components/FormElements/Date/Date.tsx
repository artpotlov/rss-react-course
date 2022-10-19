import React, { ForwardedRef } from 'react';
import Title from '../Title/Title';
import HelperText from '../HelperText/HelperText';
import Required from '../Required/Required';
import BaseDate from './BaseDate.styled';
import Label from './Label.styled';

type TCustomProps = {
  title?: string;
  helperText?: string;
  error?: boolean;
  type?: 'date';
};

type TProps = TCustomProps & React.ComponentProps<'input'>;

const Date = React.forwardRef(
  ({ title, helperText, className, ...props }: TProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Label className={className}>
        {Boolean(title) && (
          <Title>
            {title}
            {props.required && <Required />}
          </Title>
        )}
        <BaseDate type="date" ref={ref} {...props} />
        {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
      </Label>
    );
  }
);

export default Date;
