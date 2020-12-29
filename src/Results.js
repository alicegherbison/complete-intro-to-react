import React from 'react';
import Pet from './Pet';

const Results = ({ pets }) => {
  return (
    <section className="results">
      {pets === null ? (
        <h2>Use the search form to search for your ideal pet.</h2>
      ) : pets.length ? (
        pets.map((pet) => {
          return (
            <Pet
              key={pet.id}
              name={pet.name}
              breed={pet.breeds.primary}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
              id={pet.id}
            />
          );
        })
      ) : (
        <h2>No pets found, try searching again.</h2>
      )}
    </section>
  );
};

export default Results;
