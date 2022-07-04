import { createGlobalStyle } from 'styled-components';
import Raleway from 'assets/fonts/raleway.ttf';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${Raleway});
    src: local('');
  }
`;
