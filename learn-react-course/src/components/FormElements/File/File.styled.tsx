import styled from '@emotion/styled';

type TProps = {
  error?: boolean;
};

export const FileInput = styled.input<TProps>`
  height: 40px;
  margin-top: 8px;
  padding: 8px;
  border: 1px solid ${(p) => (p.error ? '#f57e77' : '#cfd3d5')};
  border-radius: 8px;
  outline: none;

  &:focus {
    border: 1px solid #5570f1;
  }
`;

export const FileLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
