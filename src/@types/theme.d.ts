import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      gray: string;
      yellow: string;
    };
    fontSize: {
      small: string;
      medium: string;
      big: string;
    };
  }
}
