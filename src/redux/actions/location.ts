import {
  ELocationActions,
  TLocation,
  IChangeLocationAction,
} from "../types/location";

export function changeLocation(location: TLocation): IChangeLocationAction {
  return {
    payload: location,
    type: ELocationActions.CHANGE_LOCATION,
  };
}
