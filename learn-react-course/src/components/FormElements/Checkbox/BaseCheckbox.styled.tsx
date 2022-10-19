import styled from '@emotion/styled';

type TProps = {
  error?: boolean;
};

const BaseCheckbox = styled.input<TProps>`
  appearance: none;
  width: 24px;
  height: 24px;
  border: 1px solid ${(p) => (p.error ? '#f57e77' : '#cfd3d5')};
  transition: background-color 0.2s ease-in-out;
  border-radius: 8px;

  &:checked {
    background-color: #5570f1;
    border: 1px solid #5570f1;
  }
`;

export default BaseCheckbox;
