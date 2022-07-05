import React from 'react';

import withBarbecueProvider from 'containers/barbecues';
import RoutesConfig from 'routes';
import ThemeProvider from '../ThemeProvider';
import Header from '../Header';

import trincaLogo from 'assets/trincaLogo.png';

import { Container, Wrapper, LogoContainer } from './styles';

const Main: React.FC = () => {
  return (
    <ThemeProvider>
      <Container>
        <Wrapper>
          <Header />
          <RoutesConfig />
          <LogoContainer>
            <img src={trincaLogo} alt="Trinca Logo" />
          </LogoContainer>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default withBarbecueProvider(Main);
