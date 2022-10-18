import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Loader = () => {
  return (
    <Container>
      <IconContainer>
        <Circle />
      </IconContainer>
      <span>Loading data...</span>
    </Container>
  );
};

export default Loader;

const LoaderAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background: conic-gradient(from 0deg at 50% 50%, #064cff 0deg, rgba(6, 76, 255, 0) 360deg);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${LoaderAnimation} 0.3s linear infinite;
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background-color: #fff;
`;
