import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithTheme from 'testUtils';

import * as storage from 'helpers/storage';

import Component from './index';

const mockedUsedNavigate = jest.fn();

jest.mock('helpers/storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('pages/BarbecueCreate', () => {
  it('Should be render and create a barbecue', () => {
    (storage.getItem as jest.Mock).mockImplementationOnce(() =>
      JSON.stringify([]),
    );
    const { getByTestId } = renderWithTheme(<Component />);

    fireEvent.change(getByTestId('date-input'), {
      target: { value: '2022-07-07' },
    });

    fireEvent.change(getByTestId('title-input'), {
      target: { value: 'teste' },
    });

    fireEvent.change(getByTestId('additionalInfos-input'), {
      target: { value: 'teste' },
    });

    fireEvent.click(getByTestId('button-submit'));

    expect(mockedUsedNavigate).toHaveBeenCalled();
    expect(storage.setItem).toHaveBeenCalled();
  });
});
