import React, { ForwardedRef } from 'react';
import HelperText from '../HelperText/HelperText';
import Title from '../Title/Title';
import BaseRadio from './BaseRadio.styled';
import Label from './Label.styled';
import Wrapper from './Wrapper.styled';

type TCustomProps = {
  error?: boolean;
  type?: 'radio';
  title?: string;
  helperText?: string;
};

type TProps = TCustomProps & React.ComponentPropsWithoutRef<'input'>;

const Radio = React.forwardRef(
  ({ title, helperText, className, ...props }: TProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Label className={className}>
        <Wrapper>
          <BaseRadio type="radio" ref={ref} {...props} />
          {Boolean(title) && <Title>{title}</Title>}
        </Wrapper>
        {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
      </Label>
    );
  }
);
export default Radio;
