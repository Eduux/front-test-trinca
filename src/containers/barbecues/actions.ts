import { setItem, getItem } from 'helpers/storage';
import { v4 as uuidv4 } from 'uuid';

import { IActions, IBarbecueCreate, IState } from './dtos';

interface IParams {
  data: IState;
  setData(data: IState): void;
}

const barbecueKey = 'trincaBarbecue';

export default (params: IParams): IActions => {
  const { setData, data } = params;

  function getBarbecues() {
    setData({ ...data, loading: true });

    const response = getItem(barbecueKey);

    setData({ ...data, barbecues: JSON.parse(response), loading: false });
  }

  function createBarbecue(barbecue: IBarbecueCreate) {
    setData({ ...data, loading: true });

    const dbBarbecues = JSON.parse(getItem(barbecueKey)) || [];

    dbBarbecues.push({ ...barbecue, uuid: uuidv4() });

    setItem(barbecueKey, JSON.stringify(dbBarbecues));

    setData({ ...data, loading: false });
  }

  return {
    getBarbecues,
    createBarbecue,
  };
};
