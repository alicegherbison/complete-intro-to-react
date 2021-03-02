import { readFileSync } from "fs";
import path from "path";
import { act } from "@testing-library/react";

const breeds = [
  { name: "Burmese" },
  { name: "Calico" },
  { name: "Moggy" },
  { name: "Persian" },
  { name: "Siamese" },
];

const data = JSON.parse(
  readFileSync(path.join(__dirname, "/res.json")).toString()
);

export const ANIMALS = ["bird", "cat", "dog"];
export const _animals = data.animals;
export const _breeds = breeds;

const mock = {
  animals: jest.fn(() => {
    return {
      then: (callback) => act(() => callback(data)),
    };
  }),
  breeds: jest.fn(() => {
    return {
      then: (callback) => act(() => callback({ breeds })),
    };
  }),
};

export default mock;
