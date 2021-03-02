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

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="search"
    >
      <section
        class="parameters"
      >
        <form>
          <label
            for="location"
          >
            <span>
              Location
            </span>
            <input
              id="location"
              value="Seattle, WA"
            />
          </label>
          <label
            for="use-dropdown-animal"
          >
            <span>
              Animal
            </span>
            <select
              data-testid="use-dropdown-animal"
              id="use-dropdown-animal"
            >
              <option>
                All
              </option>
              <option
                value="bird"
              >
                bird
              </option>
              <option
                value="cat"
              >
                cat
              </option>
              <option
                value="dog"
              >
                dog
              </option>
            </select>
          </label>
          <label
            for="use-dropdown-breed"
          >
            <span>
              Breed
            </span>
            <select
              data-testid="use-dropdown-breed"
              id="use-dropdown-breed"
            >
              <option>
                All
              </option>
              <option
                value="Burmese"
              >
                Burmese
              </option>
              <option
                value="Calico"
              >
                Calico
              </option>
              <option
                value="Moggy"
              >
                Moggy
              </option>
              <option
                value="Persian"
              >
                Persian
              </option>
              <option
                value="Siamese"
              >
                Siamese
              </option>
            </select>
          </label>
          <button
            class="text-button"
            data-testid="search"
          >
            Search
          </button>
        </form>
      </section>
      <section
        class="results"
        data-testid="results"
      >
        <a
          class="pet"
          href="/details/44461435"
        >
          <div
            class="image-container"
          >
            <img
              alt="Lee Lee & Lolo"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44461435/5/?bust=1555257141&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Lee Lee & Lolo
          </h3>
          <p>
            Terrier
          </p>
          <p>
            Seattle, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44461391"
        >
          <div
            class="image-container"
          >
            <img
              alt="Niko"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44461391/1/?bust=1555256631&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Niko
          </h3>
          <p>
            Tabby
          </p>
          <p>
            Seattle, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44461362"
        >
          <div
            class="image-container"
          >
            <img
              alt="DYLAN - Super friendly,sweet,quiet cuddler"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44461362/1/?bust=1555255095&width=100"
            />
          </div>
          <h3
            class="name"
          >
            DYLAN - Super friendly,sweet,quiet cuddler
          </h3>
          <p>
            Australian Shepherd
          </p>
          <p>
            Seattle, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460976"
        >
          <div
            class="image-container"
          >
            <img
              alt="Vinny"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460976/1/?bust=1555233068&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Vinny
          </h3>
          <p>
            Chihuahua
          </p>
          <p>
            Olalla, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460975"
        >
          <div
            class="image-container"
          >
            <img
              alt="Victoria"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460975/1/?bust=1555233067&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Victoria
          </h3>
          <p>
            Chihuahua
          </p>
          <p>
            Olalla, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460811"
        >
          <div
            class="image-container"
          >
            <img
              alt="Inez"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460811/1/?bust=1555234091&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Inez
          </h3>
          <p>
            Mixed Breed
          </p>
          <p>
            Lynnwood, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460812"
        >
          <div
            class="image-container"
          >
            <img
              alt="Savannah"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460812/1/?bust=1555234090&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Savannah
          </h3>
          <p>
            Labrador Retriever
          </p>
          <p>
            Lynnwood, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460810"
        >
          <div
            class="image-container"
          >
            <img
              alt="Blue Moon"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460810/1/?bust=1555234089&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Blue Moon
          </h3>
          <p>
            Domestic Short Hair
          </p>
          <p>
            Seattle, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460480"
        >
          <div
            class="image-container"
          >
            <img
              alt="Kirby"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460480/1/?bust=1555231061&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Kirby
          </h3>
          <p>
            Tabby
          </p>
          <p>
            Anacortes, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460366"
        >
          <div
            class="image-container"
          >
            <img
              alt="Chasee"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460366/1/?bust=1555250726&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Chasee
          </h3>
          <p>
            Domestic Short Hair
          </p>
          <p>
            Silverdale, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460363"
        >
          <div
            class="image-container"
          >
            <img
              alt="Kiev"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460363/1/?bust=1555250722&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Kiev
          </h3>
          <p>
            Domestic Medium Hair
          </p>
          <p>
            Silverdale, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460369"
        >
          <div
            class="image-container"
          >
            <img
              alt="Lady"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460369/1/?bust=1555250719&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Lady
          </h3>
          <p>
            Hound
          </p>
          <p>
            Silverdale, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460365"
        >
          <div
            class="image-container"
          >
            <img
              alt="Midge"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460365/1/?bust=1555250720&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Midge
          </h3>
          <p>
            Domestic Short Hair
          </p>
          <p>
            Silverdale, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460364"
        >
          <div
            class="image-container"
          >
            <img
              alt="Roxy"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460364/1/?bust=1555250718&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Roxy
          </h3>
          <p>
            Chihuahua
          </p>
          <p>
            Silverdale, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460370"
        >
          <div
            class="image-container"
          >
            <img
              alt="Mellow"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460370/1/?bust=1555250708&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Mellow
          </h3>
          <p>
            Domestic Short Hair
          </p>
          <p>
            Silverdale, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460373"
        >
          <div
            class="image-container"
          >
            <img
              alt="Tiger Lily"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460373/1/?bust=1555250716&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Tiger Lily
          </h3>
          <p>
            Domestic Short Hair
          </p>
          <p>
            Silverdale, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460374"
        >
          <div
            class="image-container"
          >
            <img
              alt="Tela"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460374/1/?bust=1555250723&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Tela
          </h3>
          <p>
            Chihuahua
          </p>
          <p>
            Silverdale, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460375"
        >
          <div
            class="image-container"
          >
            <img
              alt="Cooper"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460375/1/?bust=1555250714&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Cooper
          </h3>
          <p>
            Terrier
          </p>
          <p>
            Silverdale, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460371"
        >
          <div
            class="image-container"
          >
            <img
              alt="Cypher"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460371/1/?bust=1555250721&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Cypher
          </h3>
          <p>
            Australian Cattle Dog / Blue Heeler
          </p>
          <p>
            Silverdale, WA
          </p>
        </a>
        <a
          class="pet"
          href="/details/44460361"
        >
          <div
            class="image-container"
          >
            <img
              alt="Brooke"
              class="image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460361/1/?bust=1555250700&width=100"
            />
          </div>
          <h3
            class="name"
          >
            Brooke
          </h3>
          <p>
            Domestic Short Hair
          </p>
          <p>
            Silverdale, WA
          </p>
        </a>
      </section>
    </div>
  `);
});
