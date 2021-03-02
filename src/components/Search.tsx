import React, {
  // useContext,
  useEffect,
  useState,
} from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import pet, { Animal, ANIMALS } from "@frontendmasters/pet";
import { RouteComponentProps } from "@reach/router";

import TState from "../redux/types";
import { TLocation } from "../redux/types/location";
import { EThemes } from "../redux/types/theme";

import { changeLocation } from "../redux/actions/location";

import useDropdown from "../hooks/useDropdown";
// import useThemeContext from "./useThemeContext";

import Results from "./Results";
import ThemeChooser from "./ThemeChooser";

interface ISearch extends RouteComponentProps {
  animalLocation: string;
  dispatchChangeLocation: typeof changeLocation;
  theme: EThemes;
}

const Search = (props: ISearch) => {
  const { animalLocation, dispatchChangeLocation, theme } = props;

  const [breeds, setBreeds] = useState([] as string[]);
  //const [location, setLocation] = useState("Seattle, WA");
  const [pets, setPets] = useState(null as Animal[] | null);

  const [animal, AnimalDropdown] = useDropdown("Animal", "cat", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  // const [theme] = useContext(useThemeContext);

  function requestPets() {
    pet
      .animals({
        location: animalLocation,
        breed,
        type: animal,
      })
      .then(({ animals }) => {
        setPets(animals || []);
      });
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
                onChange={(event) => dispatchChangeLocation(event.target.value)}
                value={animalLocation}
              />
            </label>
            <AnimalDropdown />
            <BreedDropdown />
            <button
              className="text-button"
              data-testid="search"
              style={{ backgroundColor: theme }}>
              Search
            </button>
          </form>
        </section>
        <Results pets={pets} />
      </div>
      <ThemeChooser />
    </>
  );
};

const mapStateToProps = ({ location, theme }: TState) => ({
  animalLocation: location,
  theme,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchChangeLocation: (location: TLocation) =>
    dispatch(changeLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
