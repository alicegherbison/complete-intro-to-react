export enum EThemes {
  Lilac = "var(--color-lilac)",
  Pink = "var(--color-pink)",
  Orange = "var(--color-orange)",
  Yellow = "var(--color-yellow)",
  Green = "var(--color-green)",
  Cyan = "var(--color-cyan)",
}

export enum EThemeActions {
  CHANGE_THEME = "change theme",
}

export interface IChangeThemeAction {
  payload: EThemes;
  type: EThemeActions;
}

export type TThemeActions = IChangeThemeAction;
