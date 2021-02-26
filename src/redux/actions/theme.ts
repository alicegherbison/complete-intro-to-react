import { EThemeActions, ITheme, IChangeThemeAction } from "../types/theme";

export function changeTheme(theme: ITheme): IChangeThemeAction {
  return {
    payload: theme,
    type: EThemeActions.CHANGE_THEME,
  };
}
