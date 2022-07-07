import React from 'react';
import Router from 'react-router-dom';
import renderWithTheme from 'testUtils';

import withBarbecueProvider, { initialState } from 'containers/barbecues';

import * as storage from 'helpers/storage';

import Component from './index';

jest.mock('helpers/storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('pages/BarbecueDetails', () => {
  it('Should be render and list details', () => {
    (storage.getItem as jest.Mock).mockImplementationOnce(() =>
      JSON.stringify([
        {
          date: '2012-12-2020',
          title: 'teste',
          amountCollected: 1000,
          uuid: '123',
          suggestedValueWithDrink: 20,
          suggestedValueNoDrink: 10,
          participants: [
            {
              name: 'teste',
              value: 20,
            },
          ],
        },
      ]),
    );

    jest.spyOn(Router, 'useParams').mockReturnValue({ id: '123' });

    const Container = withBarbecueProvider(Component);

    const { getByTestId } = renderWithTheme(<Container />);

    expect(getByTestId('header-infos')).toBeInTheDocument();
    expect(getByTestId('participants')).toBeInTheDocument();
    expect(getByTestId('participant-teste')).toBeInTheDocument();
  });

  it('Should be render and list details with missing some informations', () => {
    (storage.getItem as jest.Mock).mockImplementationOnce(() =>
      JSON.stringify([
        {
          date: '2012-12-2020',
          title: 'teste',
          amountCollected: undefined,
          uuid: '123',
          suggestedValueWithDrink: 20,
          suggestedValueNoDrink: 10,
          participants: undefined,
        },
      ]),
    );

    jest.spyOn(Router, 'useParams').mockReturnValue({ id: '123' });

    const Container = withBarbecueProvider(Component);

    const { getByTestId, queryByTestId } = renderWithTheme(<Container />);

    expect(getByTestId('header-infos')).toBeInTheDocument();
    expect(getByTestId('participants')).toBeInTheDocument();
    expect(queryByTestId('participant-teste')).not.toBeInTheDocument();
  });

  it('Should be render with no data', () => {
    (storage.getItem as jest.Mock).mockImplementationOnce(() =>
      JSON.stringify([]),
    );

    jest.spyOn(Router, 'useParams').mockReturnValue({ id: '123' });

    const Container = withBarbecueProvider(Component, {
      ...initialState,
      loading: true,
    });

    const { getByTestId } = renderWithTheme(<Container />);

    expect(getByTestId('no-data-found')).toBeInTheDocument();
  });
});
