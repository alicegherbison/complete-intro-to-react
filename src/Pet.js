import React from 'react';
import { Link } from '@reach/router';

const Pet = ({ animal, breed, id, location, media, name }) => {
  let hero = 'http://placekitten.com/300/300';

  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link className="pet" to={`/details/${id}`}>
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
