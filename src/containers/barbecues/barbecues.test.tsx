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
    suggestedValueWithDrink: 20,
    suggestedValueNoDrink: 10,
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
      it('should be list barbecues with success', () => {
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

    describe('# findBarbecue', () => {
      it('should be get barbecue with success', () => {
        (storage.getItem as jest.Mock).mockImplementationOnce(() =>
          JSON.stringify(mockList),
        );

        const changeStateMock = jest.fn();

        const actionsMock = actions({
          setData: changeStateMock,
          data: { ...initialState },
        });

        actionsMock.findBarbecue('123');

        expect(changeStateMock).toHaveBeenCalledWith({
          ...initialState,
          barbecueDetail: mockList[0],
        });
      });
    });

    describe('# createBarbecue', () => {
      it('should be create a barbecue with success', () => {
        const createMock = {
          amountCollected: 100,
          date: '2012-12-02',
          title: 'teste',
          additionalInfos: 'teste',
          suggestedValueWithDrink: 20,
          suggestedValueNoDrink: 10,
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

      it('should be create barbecue with []', () => {
        const createMock = {
          amountCollected: 100,
          date: '2012-12-02',
          title: 'teste',
          additionalInfos: 'teste',
          suggestedValueWithDrink: 20,
          suggestedValueNoDrink: 10,
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

    describe('# insertParticipant', () => {
      it('should be insertParticipant with success', () => {
        const insertMock = [
          {
            ...mockList[0],
            participants: [
              {
                name: 'teste',
                value: 10,
              },
            ],
          },
        ];

        (storage.getItem as jest.Mock).mockImplementationOnce(() =>
          JSON.stringify(mockList),
        );

        (storage.setItem as jest.Mock).mockImplementationOnce(() =>
          JSON.stringify(insertMock),
        );

        const changeStateMock = jest.fn();

        const actionsMock = actions({
          setData: changeStateMock,
          data: { ...initialState },
        });

        actionsMock.insertParticipant('123', insertMock[0].participants[0]);

        expect(storage.setItem).toHaveBeenCalled();
      });

      it('should be insertParticipant with amount undefined', () => {
        const insertMock = [
          {
            ...mockList[0],
            participants: [
              {
                name: 'teste',
                value: 10,
              },
            ],
          },
        ];

        (storage.getItem as jest.Mock).mockImplementationOnce(() =>
          JSON.stringify([{ ...mockList[0], amountCollected: undefined }]),
        );

        (storage.setItem as jest.Mock).mockImplementationOnce(() =>
          JSON.stringify(insertMock),
        );

        const changeStateMock = jest.fn();

        const actionsMock = actions({
          setData: changeStateMock,
          data: { ...initialState },
        });

        actionsMock.insertParticipant('123', insertMock[0].participants[0]);

        expect(storage.setItem).toHaveBeenCalled();
      });
    });

    describe('# deleteParticipant', () => {
      it('should be deleteParticipant with success', () => {
        const insertMock = [
          {
            ...mockList[0],
            participants: [
              {
                name: 'teste',
                value: 10,
              },
            ],
          },
        ];

        (storage.getItem as jest.Mock).mockImplementationOnce(() =>
          JSON.stringify(mockList),
        );

        (storage.setItem as jest.Mock).mockImplementationOnce(() =>
          JSON.stringify(insertMock),
        );

        const changeStateMock = jest.fn();

        const actionsMock = actions({
          setData: changeStateMock,
          data: { ...initialState },
        });

        actionsMock.deleteParticipant('123', 0, insertMock[0].participants[0]);

        expect(storage.setItem).toHaveBeenCalled();
      });

      it('should be deleteParticipant with amount undefined', () => {
        const insertMock = [
          {
            ...mockList[0],
            participants: [
              {
                name: 'teste',
                value: 10,
              },
            ],
          },
        ];

        (storage.getItem as jest.Mock).mockImplementationOnce(() =>
          JSON.stringify([{ ...mockList[0], amountCollected: undefined }]),
        );

        (storage.setItem as jest.Mock).mockImplementationOnce(() =>
          JSON.stringify(insertMock),
        );

        const changeStateMock = jest.fn();

        const actionsMock = actions({
          setData: changeStateMock,
          data: { ...initialState },
        });

        actionsMock.deleteParticipant('123', 0, insertMock[0].participants[0]);

        expect(storage.setItem).toHaveBeenCalled();
      });
    });
  });
});
