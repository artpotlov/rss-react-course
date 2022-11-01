import React, { ForwardedRef } from 'react';
import { Title } from '../Title';
import { HelperText } from '../HelperText';
import { Required } from '../Required';
import { FileInput, FileLabel } from './File.styled';

type TProps = {
  title?: string;
  helperText?: string;
  error?: boolean;
  type?: 'file';
  dataTestId?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export const File = React.forwardRef(
  (
    { title, helperText, className, dataTestId = 'file', ...props }: TProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <FileLabel data-testid={dataTestId} className={className}>
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
