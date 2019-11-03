import React from 'react';

const Pet = ({ animal, breed, id, location, media, name }) => {
  let hero = 'http://placekitten.com/300/300';

  if (media.length) {
    hero = media[0].small;
  }

  return (
    <>
      <a href={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
      </a>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </>
  );
};

export default Pet;
