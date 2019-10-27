import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParameters = () => {
  const [location, setLocation] = useState('Seattle, WA');

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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParameters;
