import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithTheme from 'testUtils';

import withBarbecueProvider from 'containers/barbecues';

import Component from './index';

describe('pages/BarbecueListing', () => {
  it('Should be render load barbecues', () => {
    const Container = withBarbecueProvider(Component, {
      loading: false,
      barbecues: [
        {
          amountCollected: 100,
          date: '2012-12-13',
          title: 'teste',
          uuid: '123',
        },
      ],
    });

    const { getByTestId } = renderWithTheme(<Container />);

    expect(getByTestId('barbecue-items')).toBeInTheDocument();
  });

  it('Should be render load with no barbecues', () => {
    const Container = withBarbecueProvider(Component, {
      loading: true,
      barbecues: null,
    });

    const { getByTestId } = renderWithTheme(<Container />);

    expect(getByTestId('no-data-barbecues')).toBeInTheDocument();
  });
});
