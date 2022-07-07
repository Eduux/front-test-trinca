import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithTheme from 'testUtils';

import withBarbecueProvider, { initialState } from 'containers/barbecues';

import * as storage from 'helpers/storage';

import Component from './index';

jest.mock('helpers/storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

describe('pages/BarbecueDetials/Participants', () => {
  it('Should be render and create a new participant', () => {
    const mock = [
      {
        date: '2012-12-2020',
        title: 'teste',
        amountCollected: 1000,
        uuid: '123',
        suggestedValueWithDrink: 20,
        suggestedValueNoDrink: 10,
        additionalInfos: 'teste',
        participants: [
          {
            name: 'teste',
            value: 20,
          },
        ],
      },
    ];

    (storage.getItem as jest.Mock).mockImplementationOnce(() =>
      JSON.stringify(mock),
    );

    const Container = withBarbecueProvider(Component, {
      ...initialState,
      barbecueDetail: mock[0],
    });

    const { getByTestId } = renderWithTheme(<Container />);

    fireEvent.change(getByTestId('name-participant'), {
      target: { value: 'Teste' },
    });

    fireEvent.change(getByTestId('value-participant'), {
      target: { value: '200' },
    });

    (storage.getItem as jest.Mock).mockImplementationOnce(() =>
      JSON.stringify(mock),
    );

    fireEvent.click(getByTestId('button-submit-participant'));

    expect(storage.setItem).toHaveBeenCalled();
  });

  it('Should be render and delete a participant', () => {
    const mock = [
      {
        date: '2012-12-2020',
        title: 'teste',
        amountCollected: 1000,
        uuid: '123',
        suggestedValueWithDrink: 20,
        suggestedValueNoDrink: 10,
        additionalInfos: 'teste',
        participants: [
          {
            name: 'teste',
            value: 20,
          },
        ],
      },
    ];

    (storage.getItem as jest.Mock).mockImplementationOnce(() =>
      JSON.stringify(mock),
    );

    const Container = withBarbecueProvider(Component, {
      ...initialState,
      barbecueDetail: mock[0],
    });

    const { getByTestId } = renderWithTheme(<Container />);

    (storage.getItem as jest.Mock).mockImplementationOnce(() =>
      JSON.stringify(mock),
    );

    fireEvent.click(getByTestId('delete-participant-teste'));

    expect(storage.setItem).toHaveBeenCalled();
  });
});
