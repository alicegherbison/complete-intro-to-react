import React from 'react';
import Pet from './Pet';

const Results = ({ pets }) => {
  return (
    <section className="results">
      {!pets.length ? (
        <h2>No pets found</h2>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.type}
              key={pet.id}
              name={pet.name}
              breed={pet.breeds.primary}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </section>
  );
};

export default Results;
