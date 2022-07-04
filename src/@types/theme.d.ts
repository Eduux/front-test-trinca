import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      gray: string;
      yellow: string;
      blackWithOpacity: string;
    };
    fontSize: {
      small: string;
      medium: string;
      big: string;
    };
  }
}
