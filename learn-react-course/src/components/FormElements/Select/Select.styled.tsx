import styled from '@emotion/styled';

type TProps = {
  error?: boolean;
};

export const SelectElement = styled.select<TProps>`
  height: 58px;
  margin-top: 8px;
  padding: 8px 8px;
  border: 1px solid ${(p) => (p.error ? '#f57e77' : '#cfd3d5')};
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  line-height: 1;
  position: relative;

  &:focus {
    border: 1px solid #5570f1;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
