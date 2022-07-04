import React from 'react';
import { render } from '@testing-library/react';
import Component from './index';

describe('components/ThemeProvider', () => {
  it('Should be render', () => {
    render(
      <Component>
        <>Test</>
      </Component>,
    );
  });
});
