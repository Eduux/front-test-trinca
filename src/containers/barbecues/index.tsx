import React, { useState, useCallback, useContext, memo } from 'react';

import initialActions from './actions';

import { IState, IActions } from './dtos';

export const initialState: IState = {
  loading: false,
  barbecues: null,
};

interface IData {
  data: IState;
  actions: IActions;
}

export const BarbecueContext = React.createContext<IData>({
  data: initialState,
  actions: initialActions({ data: initialState, setData: () => null }),
});

export const useBarbecueContext = (): IData => useContext(BarbecueContext);

export default function withBarbecueProvider(
  WrappedComponent: React.FC,
  state: IState = initialState,
  actions = initialActions,
): React.FC {
  const WithBarbecueContext = (props: object) => {
    const [data, setData] = useState(state);

    const value = useCallback(
      () => ({
        data,
        actions: actions({ data, setData }),
      }),
      [data],
    );

    return (
      <BarbecueContext.Provider value={value()}>
        <WrappedComponent {...props} />
      </BarbecueContext.Provider>
    );
  };

  return memo(WithBarbecueContext);
}
