import React, { useState } from 'react';

import Button from 'components/Button';
import Input from 'components/Input';

import { Container, Wrapper } from './styles';

const Login: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const isCompleted = login && password;

  return (
    <Container>
      <Wrapper>
        <Input
          name="login"
          placeholder="e-mail"
          value={login}
          onChange={setLogin}
          label="Login"
        />
        <Input
          name="password"
          placeholder="senha"
          value={password}
          onChange={setPassword}
          type="password"
          label="Senha"
        />
        <Button disabled={!isCompleted}>Entrar</Button>
      </Wrapper>
    </Container>
  );
};

export default Login;
