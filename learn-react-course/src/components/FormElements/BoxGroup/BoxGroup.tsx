import { Title } from '../Title';
import { HelperText } from '../HelperText';
import React from 'react';
import { Required } from '../Required';
import BoxGroupContainer from './BoxGroup.styled';

type TCustomProps = {
  title?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
};

type TProps = TCustomProps & React.ComponentPropsWithoutRef<'div'>;

export const BoxGroup = ({
  title,
  helperText,
  required,
  children,
  className,
  ...props
}: TProps) => {
  return (
    <div className={className}>
      {Boolean(title) && (
        <Title>
          {title}
          {required && <Required />}
        </Title>
      )}
      <BoxGroupContainer {...props}>{children}</BoxGroupContainer>
      {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
    </div>
  );
};
