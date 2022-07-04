import { fireEvent } from '@testing-library/react';
import renderWithTheme from 'testUtils';

import Component from './index';

describe('Components/Input', () => {
  it('should be change.', () => {
    const changeMock = jest.fn();

    const { getByTestId } = renderWithTheme(
      <Component
        value=""
        name="input-test"
        onChange={changeMock}
        data-testid="input-test"
      />,
    );

    fireEvent.change(getByTestId('input-test'), { target: { value: '23' } });

    expect(changeMock).toHaveBeenCalled();
  });

  it('should be render with label.', () => {
    const changeMock = jest.fn();

    const { getByTestId } = renderWithTheme(
      <Component
        value=""
        name="input-test"
        onChange={changeMock}
        data-testid="input-test"
        label="Label test"
      />,
    );

    expect(getByTestId('label-input-input-test').textContent).toBe(
      'Label test',
    );
  });
});
