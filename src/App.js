import React, { useState } from 'react';
import { render } from 'react-dom';
import { Link, Router } from '@reach/router';

import ThemeContext from './ThemeContext';

import Details from './Details';
import SearchParameters from './SearchParameters';

const App = () => {
  const themeHook = useState('pink');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <Router>
          <SearchParameters path="/" />
          <Details path="/details/:id" />
        </Router>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
