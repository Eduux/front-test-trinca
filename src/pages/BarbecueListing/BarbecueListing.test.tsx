import React from 'react';
import renderWithTheme from 'testUtils';
import { fireEvent } from '@testing-library/react';

import * as storage from 'helpers/storage';

import withBarbecueProvider, { initialState } from 'containers/barbecues';

import Component from './index';

jest.mock('helpers/storage', () => ({
  getItem: jest.fn(),
}));

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockNavigate,
}));

const mockList = [
  {
    date: '2012-12-2020',
    title: 'teste',
    amountCollected: 1000,
    uuid: '123',
  },
];

describe('pages/BarbecueListing', () => {
  it('Should be render load barbecues', () => {
    (storage.getItem as jest.Mock).mockImplementationOnce(() =>
      JSON.stringify(mockList),
    );
    const Container = withBarbecueProvider(Component);

    const { getByTestId } = renderWithTheme(<Container />);

    expect(getByTestId('barbecue-items')).toBeInTheDocument();

    fireEvent.click(getByTestId('barbecue-teste'));

    expect(mockNavigate).toHaveBeenCalled();
  });

  it('Should be render load with no barbecues', () => {
    (storage.getItem as jest.Mock).mockImplementationOnce(() =>
      JSON.stringify([]),
    );
    const Container = withBarbecueProvider(Component, {
      ...initialState,
      loading: true,
      barbecues: null,
    });

    const { getByTestId } = renderWithTheme(<Container />);

    expect(getByTestId('no-data-barbecues')).toBeInTheDocument();
  });

  it('Should be render and click to create a new barbecue', () => {
    (storage.getItem as jest.Mock).mockImplementationOnce(() =>
      JSON.stringify([{ ...mockList[0], amountCollected: 0 }]),
    );
    const Container = withBarbecueProvider(Component);

    const { getByTestId } = renderWithTheme(<Container />);

    fireEvent.click(getByTestId('create-new-barbecue'));

    expect(mockNavigate).toHaveBeenCalled();
  });
});
