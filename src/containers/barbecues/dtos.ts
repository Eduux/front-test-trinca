export interface IActions {
  getBarbecues(): void;
  createBarbecue(barbecue: IBarbecueCreate): void;
}

export interface IState {
  loading: boolean;
  barbecues: IBarbecue[] | null;
}

export type IBarbecueCreate = Omit<IBarbecue, 'uuid'>;

export interface IBarbecue {
  uuid: string;
  date: string;
  title: string;
  amountCollected: number;
  participants?: IParticipants[];
}

export interface IParticipants {
  name: string;
  value: number;
  willParticipate: boolean;
}
