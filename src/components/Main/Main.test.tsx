import React from 'react';
import renderWithTheme from 'testUtils';
import Component from './index';

describe('components/Main', () => {
  it('Should be render', () => {
    renderWithTheme(<Component />);
  });
});
