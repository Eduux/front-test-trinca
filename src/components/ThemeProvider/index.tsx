import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import Theme from 'theme';

import { GlobalStyle } from './styles';

export default function DsProvider({ children }: PropsWithChildren<{}>) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
