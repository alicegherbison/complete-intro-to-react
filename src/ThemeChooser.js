import React, { useContext } from 'react';

import ThemeContext from './useThemeContext';

export default function ThemeChooser() {
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
            <option value="#ab9df2">Lilac</option>
            <option value="#ff6188">Pink</option>
            <option value="#fc9867">Orange</option>
            <option value="#ffd866">Yellow</option>
            <option value="#a9dc76">Green</option>
            <option value="#78dce8">Cyan</option>
          </select>
        </label>
      </form>
    </section>
  );
}
