import { createGlobalStyle } from 'styled-components';

export const Globalstyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Martian+Mono:wght@400;700&display=swap');
    body {
        background-color: tomato;
        margin: 0 auto;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items:center;
        font-family: 'Martian Mono', monospace;
    }
    a {
        text-decoration: none;
        &:visited:not(.history-link) {
        color: inherit;
       }
    }
`;
