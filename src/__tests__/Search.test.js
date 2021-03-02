import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import pet, { ANIMALS, _animals, _breeds } from "@frontendmasters/pet";
import store from "../store";
import Search from "../Search";

afterEach(cleanup);

test("Search", async () => {
  const { container, getByTestId, getByText } = render(
    <Provider store={store}>
      <Search />
    </Provider>
  );

  const animalDropdown = getByTestId("use-dropdown-animal");
  const breedDropdown = getByTestId("use-dropdown-breed");
  const results = getByTestId("results");
  const search = getByTestId("search");

  expect(pet.breeds).toHaveBeenCalled();
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);
  expect(breedDropdown.children.length).toEqual(_breeds.length + 1);

  fireEvent(search, new MouseEvent("click"));

  expect(pet.animals).toHaveBeenCalled();
  expect(results.children.length).toEqual(_animals.length);
});
