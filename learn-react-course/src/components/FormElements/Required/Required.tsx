import React from 'react';
import Wrapper from './Wrapper.styled';

const Required = (props: React.ComponentPropsWithoutRef<'span'>) => {
  return <Wrapper {...props}>&nbsp;*</Wrapper>;
};

export default Required;
