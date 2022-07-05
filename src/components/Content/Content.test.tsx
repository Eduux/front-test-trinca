import React from 'react';
import renderWithTheme from 'testUtils';
import Component from './index';

describe('components/Content', () => {
  it('Should be render', () => {
    renderWithTheme(<Component />);
  });
});
