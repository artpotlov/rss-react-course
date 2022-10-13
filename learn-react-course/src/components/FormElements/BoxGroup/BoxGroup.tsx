import styled from '@emotion/styled';
import Title from '../Title/Title';
import HelperText from '../HelperText/HelperText';
import React from 'react';
import Required from '../Required/Required';

type TCustomProps = {
  title?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
};

type TProps = TCustomProps & React.ComponentPropsWithoutRef<'div'>;

const Group = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BoxGroup = ({ title, helperText, required, children, className, ...props }: TProps) => {
  return (
    <div className={className}>
      {Boolean(title) && (
        <Title>
          {title}
          {required && <Required />}
        </Title>
      )}
      <Group {...props}>{children}</Group>
      {Boolean(helperText) && <HelperText>{helperText}</HelperText>}
    </div>
  );
};

export default BoxGroup;
