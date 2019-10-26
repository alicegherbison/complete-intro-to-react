import React from 'react';
import { render } from 'react-dom';

import SearchParameters from './SearchParameters';

const App = () => {
  return (
    <>
      <h1>Adopt me!</h1>
      <SearchParameters />
    </>
  );
};

render(<App />, document.getElementById('root'));
