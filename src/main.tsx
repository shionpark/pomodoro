import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme.ts';
import { Globalstyles } from '@/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Globalstyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
