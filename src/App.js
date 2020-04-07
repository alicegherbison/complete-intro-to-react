import React, { useState } from 'react';
import { render } from 'react-dom';
import { Link, Router } from '@reach/router';

import ThemeContext from './ThemeContext';

import Details from './Details';
import SearchParameters from './SearchParameters';

const App = () => {
  // can also use an object instead of a string, then access properties as needed
  const themeHook = useState('--var(color-magenta)');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <main>
          <Router>
            <SearchParameters path="/" />
            <Details path="/details/:id" />
          </Router>
        </main>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
