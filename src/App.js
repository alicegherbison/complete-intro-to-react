import React from 'react';
import { render } from 'react-dom';

import Pet from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt me!'),
    React.createElement(Pet, {
      name: 'Magic',
      animal: 'cat',
      breed: 'moggie',
    }),
    React.createElement(Pet, {
      name: 'Garfield',
      animal: 'cat',
      breed: 'ginger',
    }),
    React.createElement(Pet, {
      name: 'Ollie',
      animal: 'cat',
      breed: 'polite',
    }),
  ]);
};

render(React.createElement(App), document.getElementById('root'));
