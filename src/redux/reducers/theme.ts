import { EThemeActions, TThemeActions } from "../types/theme";

export default function theme(state = "Seattle, WA", action: TThemeActions) {
  switch (action.type) {
    case EThemeActions.CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
}
