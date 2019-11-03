import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';

import Details from './Details';
import SearchParameters from './SearchParameters';

const App = () => {
  return (
    <React.StrictMode>
      <h1>Adopt me!</h1>
      <Router>
        <SearchParameters path="/" />
        <Details path="/details/:id" />
      </Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
