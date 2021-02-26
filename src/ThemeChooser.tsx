import React, { ReactElement, useContext } from "react";

import ThemeContext from "./useThemeContext";

export default function ThemeChooser(): ReactElement {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <section className="theme-chooser">
      <form>
        <label htmlFor="theme">
          <span>Button colour</span>
          <select
            onBlur={(event) => setTheme(event.target.value)}
            onChange={(event) => setTheme(event.target.value)}
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
