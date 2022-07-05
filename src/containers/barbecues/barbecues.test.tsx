import { render } from '@testing-library/react';

import * as storage from 'helpers/storage';

import actions from './actions';

import withContainer, { initialState } from './index';

jest.mock('helpers/storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

const mockList = [
  {
    date: '2012-12-2020',
    title: 'teste',
    amountCollected: 1000,
    uuid: '123',
  },
];

describe('Containers/User', () => {
  it('should be render with Component.', async () => {
    const MockComponent = () => <p>mock</p>;

    const MakeContainerWrapper = withContainer(MockComponent);
    const { getByText } = render(<MakeContainerWrapper />);

    expect(getByText('mock')).toBeTruthy();
  });

  describe('# actions', () => {
    describe('# getBarbecues', () => {
      it('should be list barbecues with success', async () => {
        (storage.getItem as jest.Mock).mockImplementationOnce(() =>
          JSON.stringify(mockList),
        );

        const changeStateMock = jest.fn();

        const actionsMock = actions({
          setData: changeStateMock,
          data: { ...initialState },
        });

        actionsMock.getBarbecues();

        expect(changeStateMock).toHaveBeenCalledWith({
          ...initialState,
          barbecues: mockList,
        });
      });
    });

    describe('# createBarbecue', () => {
      it('should be list barbecues with success', async () => {
        const createMock = {
          amountCollected: 100,
          date: '2012-12-02',
          title: 'teste',
        };

        (storage.getItem as jest.Mock).mockImplementationOnce(() =>
          JSON.stringify(mockList),
        );

        (storage.setItem as jest.Mock).mockImplementationOnce(() =>
          JSON.stringify(createMock),
        );

        const changeStateMock = jest.fn();

        const actionsMock = actions({
          setData: changeStateMock,
          data: { ...initialState },
        });

        actionsMock.createBarbecue(createMock);

        expect(storage.setItem).toHaveBeenCalled();
      });

      it('should be list barbecues with []', async () => {
        const createMock = {
          amountCollected: 100,
          date: '2012-12-02',
          title: 'teste',
        };

        (storage.getItem as jest.Mock).mockImplementationOnce(() => null);

        (storage.setItem as jest.Mock).mockImplementationOnce(() =>
          JSON.stringify(createMock),
        );

        const changeStateMock = jest.fn();

        const actionsMock = actions({
          setData: changeStateMock,
          data: { ...initialState },
        });

        actionsMock.createBarbecue(createMock);

        expect(storage.setItem).toHaveBeenCalled();
      });
    });
  });
});