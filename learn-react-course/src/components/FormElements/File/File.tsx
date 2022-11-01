import React, { ForwardedRef } from 'react';
import { Title } from '../Title';
import { HelperText } from '../HelperText';
import { Required } from '../Required';
import { FileInput, FileLabel } from './File.styled';

type TCustomProps = {
  title?: string;
  helperText?: string;
  error?: boolean;
  type?: 'file';
};

type TProps = TCustomProps & React.ComponentPropsWithoutRef<'input'>;

export const File = React.forwardRef(
  ({ title, helperText, className, ...props }: TProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <FileLabel className={className}>
        {Boolean(title) && (
          <Title>
            {title}
            {props.required && <Required />}
          </Title>
        )}
        <FileInput type="file" ref={ref} {...props} />
        {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
      </FileLabel>
    );
  }
);
