import styled from '@emotion/styled';

type TProps = {
  error?: boolean;
};

export const RadioInput = styled.input<TProps>`
  appearance: none;
  width: 24px;
  height: 24px;
  position: relative;
  border: 1px solid ${(p) => (p.error ? '#f57e77' : '#cfd3d5')};
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 0.2s ease-in-out;

  &::before {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 9999px;
    background-color: #5570f1;
    opacity: 0;
    display: block;
    transition: opacity 0.2s ease-in-out;
  }

  &:checked {
    border: 1px solid #5570f1;

    &::before {
      opacity: 1;
    }
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const RadioWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
