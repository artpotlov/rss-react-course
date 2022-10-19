import styled from '@emotion/styled';

type TProps = {
  error?: boolean;
};

const BaseDate = styled.input<TProps>`
  margin-top: 8px;
  height: 58px;
  outline: 0;
  border: 1px solid ${(p) => (p.error ? '#f57e77' : '#cfd3d5')};
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;

  &:focus {
    border: 1px solid #5570f1;
  }
`;

export default BaseDate;
