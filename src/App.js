import React from 'react';
import { render } from 'react-dom';

import Pet from './Pet';

const App = () => {
  return (
    <>
      <h1>Adopt me!</h1>
      <Pet name="Magic" animal="Cat" breed="moggie" />
      <Pet name="Garfield" animal="Cat" breed="ginger" />
      <Pet name="Ollie" animal="Cat" breed="polite" />
    </>
  );
};

render(<App />, document.getElementById('root'));
