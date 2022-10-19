import React, { ForwardedRef } from 'react';
import Title from '../Title/Title';
import HelperText from '../HelperText/HelperText';
import Required from '../Required/Required';
import BaseFile from './BaseFile.styled';
import Label from './Label.styled';

type TCustomProps = {
  title?: string;
  helperText?: string;
  error?: boolean;
  type?: 'file';
};

type TProps = TCustomProps & React.ComponentPropsWithoutRef<'input'>;

const File = React.forwardRef(
  ({ title, helperText, className, ...props }: TProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Label className={className}>
        {Boolean(title) && (
          <Title>
            {title}
            {props.required && <Required />}
          </Title>
        )}
        <BaseFile type="file" ref={ref} {...props} />
        {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
      </Label>
    );
  }
);
export default File;
