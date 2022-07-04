import React from 'react';
import Component from './index';
import renderWithTheme from 'testUtils';

describe('components/Header', () => {
  it('Should be render with text', () => {
    const { getByTestId } = renderWithTheme(<Component />);

    expect(getByTestId('header-text').textContent).toBe('Agenda de Churras');
  });
});
