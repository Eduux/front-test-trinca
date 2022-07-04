import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithTheme from 'testUtils';

import Component from './index';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('pages/Login', () => {
  it('Should be render and make error on login', () => {
    const { getByTestId, queryByTestId } = renderWithTheme(<Component />);

    fireEvent.change(getByTestId('login-input'), {
      target: { value: 'teste' },
    });

    fireEvent.change(getByTestId('password-input'), {
      target: { value: 'teste' },
    });

    fireEvent.click(getByTestId('button-submit'));

    expect(getByTestId('login-feedback').textContent).toBe(
      'Login ou senha incorretos',
    );

    fireEvent.change(getByTestId('login-input'), {
      target: { value: 'testeerror' },
    });

    expect(queryByTestId('login-feedback')).toBeNull();
  });

  it('Should make login and redirect to list', () => {
    const { getByTestId } = renderWithTheme(<Component />);

    fireEvent.change(getByTestId('login-input'), {
      target: { value: 'trinca@teste.com' },
    });

    fireEvent.change(getByTestId('password-input'), {
      target: { value: 'trincateste' },
    });

    fireEvent.click(getByTestId('button-submit'));

    expect(mockedUsedNavigate).toHaveBeenCalled();
  });
});
