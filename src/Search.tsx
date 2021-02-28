import React, {
  // useContext,
  useEffect,
  useState,
} from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import pet, { Animal, ANIMALS } from "@frontendmasters/pet";
import { RouteComponentProps } from "@reach/router";

import TState from "./redux/types";
import { TLocation } from "./redux/types/location";
import { EThemes } from "./redux/types/theme";

import { changeLocation } from "./redux/actions/location";
import { changeTheme } from "./redux/actions/theme";

import useDropdown from "./useDropdown";
// import useThemeContext from "./useThemeContext";

import Results from "./Results";
import ThemeChooser from "./ThemeChooser";

interface ISearchParameters extends RouteComponentProps {
  animalLocation: string;
  dispatchChangeLocation: typeof changeLocation;
  theme: EThemes;
}

const SearchParameters = (props: ISearchParameters) => {
  const { animalLocation, dispatchChangeLocation, theme } = props;

  const [breeds, setBreeds] = useState([] as string[]);
  //const [location, setLocation] = useState("Seattle, WA");
  const [pets, setPets] = useState(null as Animal[] | null);

  const [animal, AnimalDropdown] = useDropdown("Animal", "cat", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  // const [theme] = useContext(useThemeContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      location: animalLocation,
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
                onChange={(event) => dispatchChangeLocation(event.target.value)}
                value={animalLocation}
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

const mapStateToProps = ({ location, theme }: TState) => ({
  animalLocation: location,
  theme,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchChangeLocation: (location: TLocation) =>
    dispatch(changeLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchParameters);
