import { ELocationActions, TLocationActions } from "../types/location";

export default function location(
  state = "Seattle, WA",
  action: TLocationActions
) {
  switch (action.type) {
    case ELocationActions.CHANGE_LOCATION:
      return action.payload;
    default:
      return state;
  }
}
