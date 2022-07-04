import { getByText } from '@testing-library/react';
import renderWithTheme from 'testUtils';

import Component from './index';

describe('Components/Button', () => {
  it('should be render with text.', () => {
    const text = 'Text here';

    const result = renderWithTheme(<Component>{text}</Component>);

    const resultText = getByText(result.container, text);

    expect(resultText).toBeTruthy();
  });
});
