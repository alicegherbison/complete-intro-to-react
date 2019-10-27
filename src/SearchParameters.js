import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParameters = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, setAnimal] = useState('cat');

  return (
    <div className="search-parameters">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={event => setLocation(event.target.value)}
            value={location}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            onBlur={event => setAnimal(event.target.value)}
            onChange={event => setAnimal(event.target.value)}
            value={animal}>
            <option>All</option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParameters;
