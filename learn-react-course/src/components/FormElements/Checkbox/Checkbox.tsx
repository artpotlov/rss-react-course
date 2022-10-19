import React, { ForwardedRef } from 'react';
import HelperText from '../HelperText/HelperText';
import Title from '../Title/Title';
import BaseCheckbox from './BaseCheckbox.styled';
import Label from './Label.styled';
import Wrapper from './Wrapper.styled';

type TCustomProps = {
  error?: boolean;
  type?: 'checkbox';
  title?: string;
  helperText?: string;
};

type TProps = TCustomProps & React.ComponentPropsWithoutRef<'input'>;

const CheckBox = React.forwardRef(
  ({ title, helperText, className, ...props }: TProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Label className={className}>
        <Wrapper>
          <BaseCheckbox ref={ref} type="checkbox" {...props} />
          {Boolean(title) && <Title>{title}</Title>}
        </Wrapper>
        {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
      </Label>
    );
  }
);

export default CheckBox;
