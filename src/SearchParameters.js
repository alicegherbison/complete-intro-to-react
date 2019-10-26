import React from 'react';

const SearchParameters = () => {
  const location = 'Seattle, WA';

  return (
    <div className="search-parameters">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} />
        </label>
      </form>
      <button>Submit</button>
    </div>
  );
};

export default SearchParameters;
