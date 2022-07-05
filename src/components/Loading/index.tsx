import React from 'react';

import { Container } from './styles';

const Loading: React.FC = () => {
  return <Container data-testid="loading-item">Carregando ...</Container>;
};

export default Loading;
