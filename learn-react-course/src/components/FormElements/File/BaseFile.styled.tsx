import styled from '@emotion/styled';

type TProps = {
  error?: boolean;
};

const BaseFile = styled.input<TProps>`
  margin-top: 8px;
  height: 40px;
  border-radius: 8px;
  padding: 8px;
  outline: none;
  border: 1px solid ${(p) => (p.error ? '#f57e77' : '#cfd3d5')};

  &:focus {
    border: 1px solid #5570f1;
  }
`;

export default BaseFile;
