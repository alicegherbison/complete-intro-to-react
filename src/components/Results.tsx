import React, { FunctionComponent } from "react";
import { Animal } from "@frontendmasters/pet";

import Pet from "./Pet";

interface IProps {
  pets: Animal[] | null;
}

const Results: FunctionComponent<IProps> = ({ pets }) => {
  return (
    <section className="content" data-testid="results">
      {pets === null ? (
        <h2>Use the search form to search for your ideal pet.</h2>
      ) : pets.length ? (
        <div className="results">
          {pets.map((pet) => (
            <Pet
              breed={pet.breeds.primary}
              id={pet.id}
              key={pet.id}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
              media={pet.photos}
              name={pet.name}
            />
          ))}
        </div>
      ) : (
        <h2>No pets found, try searching again.</h2>
      )}
    </section>
  );
};

export default Results;
