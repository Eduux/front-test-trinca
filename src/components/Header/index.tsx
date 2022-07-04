import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1 data-testid="header-text">Agenda de Churras</h1>
    </Container>
  );
};

export default Header;
