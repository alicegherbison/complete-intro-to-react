import { EThemes, EThemeActions, TThemeActions } from "../types/theme";

export default function theme(
  state: EThemes = EThemes.Green,
  action: TThemeActions
) {
  switch (action.type) {
    case EThemeActions.CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
}
