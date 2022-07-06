import { setItem, getItem } from 'helpers/storage';
import { v4 as uuidv4 } from 'uuid';

import {
  IActions,
  IBarbecue,
  IBarbecueCreate,
  IParticipant,
  IState,
} from './dtos';

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

  function findBarbecue(uuid: string) {
    setData({ ...data, loading: true });

    const response = getItem(barbecueKey);

    const parsedBarbecues = JSON.parse(response) as IBarbecue[];

    setData({
      ...data,
      loading: false,
      barbecueDetail: parsedBarbecues.find(
        item => item.uuid === uuid,
      ) as IBarbecue,
    });
  }

  function createBarbecue(barbecue: IBarbecueCreate) {
    setData({ ...data, loading: true });

    const dbBarbecues = JSON.parse(getItem(barbecueKey)) || [];

    const uuidGenerated = uuidv4();

    dbBarbecues.push({ ...barbecue, participants: [], uuid: uuidGenerated });

    setItem(barbecueKey, JSON.stringify(dbBarbecues));

    setData({ ...data, loading: false });

    return uuidGenerated;
  }

  function insertParticipant(uuid: string, participant: IParticipant) {
    const response = getItem(barbecueKey);

    const parsedBarbecues = JSON.parse(response) as IBarbecue[];

    const barbecueToInsert = parsedBarbecues.findIndex(
      item => item.uuid === uuid,
    );

    const newBarbecue = parsedBarbecues[barbecueToInsert];

    newBarbecue.amountCollected =
      (newBarbecue.amountCollected || 0) + participant.value;

    newBarbecue.participants?.push(participant);

    setItem(barbecueKey, JSON.stringify(parsedBarbecues));
  }

  function deleteParticipant(
    uuid: string,
    index: number,
    participant: IParticipant,
  ) {
    const response = getItem(barbecueKey);

    const parsedBarbecues = JSON.parse(response) as IBarbecue[];

    const barbecueToDelete = parsedBarbecues.findIndex(
      item => item.uuid === uuid,
    );

    const newBarbecue = parsedBarbecues[barbecueToDelete];

    newBarbecue.amountCollected =
      (newBarbecue.amountCollected || 0) - participant.value;

    newBarbecue.participants?.splice(index, 1);

    setItem(barbecueKey, JSON.stringify(parsedBarbecues));
  }

  return {
    getBarbecues,
    findBarbecue,
    createBarbecue,
    insertParticipant,
    deleteParticipant,
  };
};
