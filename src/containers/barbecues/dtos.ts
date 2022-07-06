export interface IActions {
  getBarbecues(): void;
  createBarbecue(barbecue: IBarbecueCreate): string;
  findBarbecue(uuid: string): void;
  insertParticipant(uuid: string, participant: IParticipant): void;
  deleteParticipant(
    uuid: string,
    index: number,
    participant: IParticipant,
  ): void;
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
  suggestedValueWithDrink: number;
  suggestedValueNoDrink: number;
  participants?: IParticipant[];
}

export interface IParticipant {
  name: string;
  value: number;
}
