import React, { useState } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";

import ThemeContext from "./useThemeContext";

import Details from "./Details";
import Search from "./Search";

const App = () => {
  // can also use an object instead of a string, then access properties as needed
  const themeHook = useState("var(--color-green)");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <header>
          <Link className="title" to="/">
            Adopt me!
          </Link>
        </header>
        <main>
          <Router>
            <Search path="/" />
            <Details path="/details/:id" />
          </Router>
        </main>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
