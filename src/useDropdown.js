import React, { useState } from 'react';

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);

  const id = `use-dropdown-${label.replace(' ', '-').toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        disabled={options.length === 0}
        id={id}
        onBlur={event => setState(event.target.value)}
        onChange={event => setState(event.target.value)}
        value={state}></select>
      <options>All</options>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
