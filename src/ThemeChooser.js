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
            <option value="peru">Peru</option>
            <option value="darkblue">Dark blue</option>
            <option value="mediumorchid">Medium orchid</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
      </form>
    </section>
  );
}
