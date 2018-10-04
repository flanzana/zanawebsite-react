import { injectGlobal } from 'styled-components';

export const theme = {
  primary: '#4a266a',
  secondary: '#61c0bf',
  secondaryLight: '#dbf0f0',
  white: '#ffffff',
  light: '#f6f6f6',
  dark: '#5c5c5c'
};

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto:400,900|Coda');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  h1,h2 {
    font-family: Coda, cursive;
    text-transform: uppercase;
  }
`;
