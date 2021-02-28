export enum EThemes {
  Lilac = "#ab9df2",
  Pink = "#ff6188",
  Orange = "#fc9867",
  Yellow = "#ffd866",
  Green = "#a9dc76",
  Cyan = "#78dce8",
}

export enum EThemeActions {
  CHANGE_THEME = "change theme",
}

export interface IChangeThemeAction {
  payload: EThemes;
  type: EThemeActions;
}

export type TThemeActions = IChangeThemeAction;
