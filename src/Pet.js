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
        <img alt={name} className="image" src={hero} />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <span>{`${animal} - ${breed} - ${location}`}</span>
      </div>
    </Link>
  );
};

export default Pet;
