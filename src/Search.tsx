import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import pet, { Animal, ANIMALS } from "@frontendmasters/pet";
import { RouteComponentProps } from "@reach/router";

import useDropdown from "./useDropdown";
import useThemeContext from "./useThemeContext";

import Results from "./Results";
import ThemeChooser from "./ThemeChooser";

const SearchParameters: FunctionComponent<RouteComponentProps> = () => {
  const [breeds, setBreeds] = useState([] as string[]);
  const [location, setLocation] = useState("Seattle, WA");
  const [pets, setPets] = useState(null as Animal[] | null);

  const [animal, AnimalDropdown] = useDropdown("Animal", "cat", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  const [theme] = useContext(useThemeContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const names = breeds.map(({ name }) => name);

      setBreeds(names);
    });
  }, [animal, setBreed, setBreeds]);

  return (
    <>
      <div className="search">
        <section className="parameters">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              requestPets();
            }}>
            <label htmlFor="location">
              <span>Location</span>
              <input
                id="location"
                onChange={(event) => setLocation(event.target.value)}
                value={location}
              />
            </label>
            <AnimalDropdown />
            <BreedDropdown />
            <button className="text-button" style={{ backgroundColor: theme }}>
              Submit
            </button>
          </form>
        </section>
        <Results pets={pets} />
      </div>
      <ThemeChooser />
    </>
  );
};

export default SearchParameters;