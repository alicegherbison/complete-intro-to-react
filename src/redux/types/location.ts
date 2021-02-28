export enum ELocationActions {
  CHANGE_LOCATION = "change location",
}

export type TLocation = string;

export interface IChangeLocationAction {
  payload: TLocation;
  type: ELocationActions;
}

export type TLocationActions = IChangeLocationAction;
