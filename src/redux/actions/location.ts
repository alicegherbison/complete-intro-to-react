import {
  ELocationActions,
  ILocation,
  IChangeLocationAction,
} from "../types/location";

export function changeLocation(location: ILocation): IChangeLocationAction {
  return {
    payload: location,
    type: ELocationActions.CHANGE_LOCATION,
  };
}
