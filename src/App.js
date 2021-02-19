import React, { Suspense, lazy, useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import ThemeContext from "./useThemeContext";

import NavBar from "./NavBar";
import Search from "./Search";

const Details = lazy(() => import("./Details"));

const App = () => {
  // can also use an object instead of a string, then access properties as needed
  const themeHook = useState("var(--color-green)");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <NavBar />
        <main>
          <Suspense fallback={null}>
            <Router>
              <Search path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </main>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
