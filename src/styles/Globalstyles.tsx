import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const Globalstyles = createGlobalStyle`
    ${reset}
    body {
    }
    a {
        text-decoration: none;
        &:visited:not(.history-link) {
        color: inherit;
       }
    }
`;
