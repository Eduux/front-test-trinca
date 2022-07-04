import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import Theme from 'theme';

import { GlobalStyle } from './styles';

const DsProvider: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default DsProvider;
