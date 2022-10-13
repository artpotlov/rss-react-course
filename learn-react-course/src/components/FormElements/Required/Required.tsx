/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const Required = (props: React.ComponentPropsWithoutRef<'span'>) => {
  return (
    <span
      css={css`
        color: red;
        font-weight: bold;
      `}
      {...props}
    >
      &nbsp;*
    </span>
  );
};

export default Required;
