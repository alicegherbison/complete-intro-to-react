import {
  ELocationActions,
  TLocation,
  TLocationActions,
} from "../types/location";

export default function location(
  state: TLocation = "Seattle, WA",
  action: TLocationActions
) {
  switch (action.type) {
    case ELocationActions.CHANGE_LOCATION:
      return action.payload;
    default:
      return state;
  }
}
