export interface IActions {
  getBarbecues(): void;
  createBarbecue(barbecue: IBarbecueCreate): string;
  findBarbecue(uuid: string): void;
}

export interface IState {
  loading: boolean;
  barbecues: IBarbecue[] | null;
  barbecueDetail?: IBarbecue;
}

export type IBarbecueCreate = Omit<IBarbecue, 'uuid'>;

export interface IBarbecue {
  uuid: string;
  date: string;
  title: string;
  additionalInfos: string;
  amountCollected?: number;
  participants?: IParticipants[];
}

export interface IParticipants {
  name: string;
  value: number;
  willParticipate: boolean;
}
