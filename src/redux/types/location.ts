export enum ELocationActions {
  CHANGE_LOCATION = "change location",
}

export interface ILocation {
  location: string;
}

export interface IChangeLocationAction {
  payload: ILocation;
  type: ELocationActions;
}

export type TLocationActions = IChangeLocationAction;
