/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Required = () => {
  return (
    <span
      css={css`
        color: red;
        font-weight: bold;
      `}
    >
      &nbsp;*
    </span>
  );
};

export default Required;
