export enum EThemes {
  LILAC = "#ab9df2",
  PINK = "#ff6188",
  ORANGE = "#fc9867",
  YELLOW = "#ffd866",
  GREEN = "#a9dc76",
  CYAN = "#78dce8",
}

export enum EThemeActions {
  CHANGE_THEME = "change theme",
}

export interface ITheme {
  theme: EThemes;
}

export interface IChangeThemeAction {
  payload: ITheme;
  type: EThemeActions;
}

export type TThemeActions = IChangeThemeAction;
