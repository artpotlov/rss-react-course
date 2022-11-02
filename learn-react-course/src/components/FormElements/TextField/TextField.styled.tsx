import styled from '@emotion/styled';

type TProps = {
  error?: boolean;
};

export const TextFieldInput = styled.input<TProps>`
  height: 58px;
  margin-top: 8px;
  padding: 8px 16px;
  border: 1px solid ${(p) => (p.error ? '#f57e77' : '#cfd3d5')};
  border-radius: 8px;
  font-size: 16px;
  line-height: 1;
  outline: none;
  transition: border 0.2s ease-in-out;

  &::placeholder {
    color: #abafb1;
  }

  &:focus {
    border: 1px solid #5570f1;
  }
`;

export const TextFieldLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
