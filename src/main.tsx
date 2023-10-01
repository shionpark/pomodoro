import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { Globalstyles } from '@/styles';
import { darkTheme } from './theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <Globalstyles />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
