import React, { ReactElement, useContext } from "react";
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

  console.log(Object.keys(EThemes));
  console.log(Object.values(EThemes));

  return (
    <section className="theme-chooser">
      <form>
        <label htmlFor="theme">
          <span>Button colour</span>
          <select
            onBlur={(event) => dispatchChangeTheme(event.target.value)}
            onChange={(event) => dispatchChangeTheme(event.target.value)}
            value={theme}>
            <option value="var(--color-lilac)">Lilac</option>
            <option value="var(--color-pink)">Pink</option>
            <option value="var(--color-orange)">Orange</option>
            <option value="var(--color-yellow)">Yellow</option>
            <option value="var(--color-green)">Green</option>
            <option value="var(--color-cyan)">Cyan</option>
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
