import styled from '@emotion/styled';

const Button = styled.button`
  width: fit-content;
  height: 48px;
  padding: 8px 32px;
  border: none;
  border-radius: 8px;
  background-color: #5570f1;
  color: #fff;
  font-size: 20px;
  line-height: 1;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:active:not(:disabled) {
    background-color: #5b6ec6;
    box-shadow: inset 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: #5570f1;
    opacity: 0.6;
    cursor: default;
  }
`;

export default Button;
