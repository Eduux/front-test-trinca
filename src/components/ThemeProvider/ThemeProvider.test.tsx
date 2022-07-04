import React from 'react';
import { render } from '@testing-library/react';
import Component from './index';

it('Should be render', () => {
  render(
    <Component>
      <>Test</>
    </Component>,
  );
});
