import React from 'react';
import { render } from 'react-dom';
import { Link, Router } from '@reach/router';

import Details from './Details';
import SearchParameters from './SearchParameters';

const App = () => {
  return (
    <React.StrictMode>
      <header>
        <Link to="/">Adopt me!</Link>
      </header>
      <Router>
        <SearchParameters path="/" />
        <Details path="/details/:id" />
      </Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
