import React, { ReactElement, useMemo } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import TState from "./redux/types";
import { EThemes } from "./redux/types/theme";

import { changeTheme } from "./redux/actions/theme";

interface TThemeChooser {
  dispatchChangeTheme: typeof changeTheme;
  theme: EThemes;
}

function ThemeChooser(props: TThemeChooser): ReactElement {
  const { dispatchChangeTheme, theme } = props;

  const options = useMemo(
    () =>
      Object.keys(EThemes).map((color, i) => (
        <option key={i} value={Object.values(EThemes)[i]}>
          {color}
        </option>
      )),
    [EThemes]
  );

  return (
    <section className="theme-chooser">
      <form>
        <label htmlFor="theme">
          <span>Button colour</span>
          <select
            onBlur={(event) => dispatchChangeTheme(event.target.value)}
            onChange={(event) => dispatchChangeTheme(event.target.value)}
            value={theme}>
            {options}
          </select>
        </label>
      </form>
    </section>
  );
}

const mapStateToProps = ({ theme }: TState) => ({
  theme,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchChangeTheme: (theme: EThemes) => dispatch(changeTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeChooser);
