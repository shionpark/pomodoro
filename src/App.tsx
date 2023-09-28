import React from 'react';
import { styled, ThemeProvider } from 'styled-components';

import { Globalstyles } from '@/styles';
import { darkTheme } from './theme.ts';
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
    <ThemeProvider theme={darkTheme}>
      <Globalstyles />
      <Wrapper>
        <Title>Pomodoro</Title>
        <Timer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
