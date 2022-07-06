import React from 'react';

import iconBack from 'assets/icon_back.svg';

import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

const GoBackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div onClick={() => navigate('/')} data-testid="go-back-button">
        <img src={iconBack} alt="Go back button" />
        <p>Voltar</p>
      </div>
    </Container>
  );
};

export default GoBackButton;
