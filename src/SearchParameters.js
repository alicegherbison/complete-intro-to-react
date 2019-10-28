import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

import useDropdown from './useDropdown';

const SearchParameters = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, AnimalDropdown] = useDropdown('Animal', 'cat', ANIMALS);
  const [breed, BreedDropdown] = useDropdown('Breed', '', ANIMALS);
  const [breeds, setBreeds] = useState([]);

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
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParameters;
