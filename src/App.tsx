import React from 'react';
import { styled } from 'styled-components';
import { Timer } from './components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
`;

function App() {
  return (
    <Wrapper>
      <Title>Pomodoro</Title>
      <Timer />
    </Wrapper>
  );
}

export default App;
