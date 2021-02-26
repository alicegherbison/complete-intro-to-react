import {
  ELocationActions,
  ILocation,
  IChangeLocation,
} from "../types/location";

export function changeLocation(location: ILocation): IChangeLocation {
  return {
    payload: location,
    type: ELocationActions.CHANGE_LOCATION,
  };
}
