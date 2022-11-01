import { Title } from '../Title';
import { HelperText } from '../HelperText';
import React from 'react';
import { Required } from '../Required';
import BoxGroupContainer from './BoxGroup.styled';

type TProps = {
  title?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  className?: string;
  dataTestId?: string;
} & React.PropsWithChildren;

export const BoxGroup = ({
  title,
  helperText,
  required,
  children,
  className,
  dataTestId = 'box-group',
}: TProps) => {
  return (
    <div data-testid={dataTestId} className={className}>
      {Boolean(title) && (
        <Title>
          {title}
          {required && <Required />}
        </Title>
      )}
      <BoxGroupContainer>{children}</BoxGroupContainer>
      {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
    </div>
  );
};
