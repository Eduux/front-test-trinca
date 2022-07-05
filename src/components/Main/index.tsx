import React from 'react';

import withBarbecueProvider from 'containers/barbecues';
import RoutesConfig from 'routes';
import ThemeProvider from '../ThemeProvider';
import Header from '../Header';

import { Container, Wrapper } from './styles';

const Main: React.FC = () => {
  return (
    <ThemeProvider>
      <Container>
        <Wrapper>
          <Header />
          <RoutesConfig />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default withBarbecueProvider(Main);
