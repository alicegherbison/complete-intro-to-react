import React from 'react';
import { render } from 'react-dom';
import { router } from '@reach/router';

import SearchParameters from './SearchParameters';

const App = () => {
  return (
    <React.StrictMode>
      <h1>Adopt me!</h1>
      <SearchParameters />
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
