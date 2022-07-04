import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { setItem } from 'helpers/storage';
import { key } from 'helpers/auth';

import Button from 'components/Button';
import Input from 'components/Input';

import { Container, Wrapper, FeedBack } from './styles';

const Login: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const isCompleted = login && password;

  const handleLogin = () => {
    if (login === 'trinca@teste.com' && password === 'trincateste') {
      setItem(key, 'logged');
      navigate('/');
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (error) setError(false);
  }, [login, password]);

  return (
    <Container>
      <Wrapper>
        <Input
          name="login"
          placeholder="e-mail"
          value={login}
          onChange={setLogin}
          label="Login"
          data-testid="login-input"
        />
        <Input
          name="password"
          placeholder="senha"
          value={password}
          onChange={setPassword}
          type="password"
          label="Senha"
          data-testid="password-input"
        />
        {error && (
          <FeedBack data-testid="login-feedback">
            Login ou senha incorretos
          </FeedBack>
        )}
        <Button
          data-testid="button-submit"
          disabled={!isCompleted}
          onClick={handleLogin}
        >
          Entrar
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Login;
