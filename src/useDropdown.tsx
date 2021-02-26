import React, { Dispatch, FunctionComponent, useState } from "react";

const useDropdown = (
  label: string,
  defaultState: string,
  options: string[]
) => {
  const [state, setState] = useState(defaultState);

  const id = `use-dropdown-${label.replace(" ", "-").toLowerCase()}`;

  const Dropdown: FunctionComponent = () => (
    <label htmlFor={id}>
      <span>{label}</span>
      <select
        disabled={options.length === 0}
        id={id}
        onBlur={(event) => setState(event.target.value)}
        onChange={(event) => setState(event.target.value)}
        value={state}>
        <option>All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState] as [
    string,
    FunctionComponent,
    Dispatch<string>
  ];
};

export default useDropdown;
