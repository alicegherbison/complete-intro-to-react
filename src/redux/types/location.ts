export enum ELocationActions {
  CHANGE_LOCATION = "change location",
}

export interface ILocation {
  location: string;
}

export interface IChangeLocation {
  type: ELocationActions;
  payload: ILocation;
}

export type TLocationActions = IChangeLocation;
