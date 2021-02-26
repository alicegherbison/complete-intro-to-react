export enum ELocationActions {
  CHANGE_LOCATION = "change location",
}

export interface ILocation {
  location: string;
}

export interface IChangeLocation {
  payload: ILocation;
  type: ELocationActions;
}

export type TLocationActions = IChangeLocation;
