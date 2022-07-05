import { fireEvent } from '@testing-library/react';
import React from 'react';
import renderWithTheme from 'testUtils';
import Component from './index';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockNavigate,
}));

describe('components/GoBackButton', () => {
  it('Should be render', () => {
    const { getByTestId } = renderWithTheme(<Component />);

    fireEvent.click(getByTestId('go-back-button'));

    expect(mockNavigate).toHaveBeenCalled();
  });
});
