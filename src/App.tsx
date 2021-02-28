import React, {
  Suspense,
  lazy,
  // useState
} from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "@reach/router";

import store from "./store";

// import ThemeContext from "./useThemeContext";

import NavBar from "./NavBar";

const Details = lazy(() => import("./Details"));
const Search = lazy(() => import("./Search"));

const App = () => {
  // can also use an object instead of a string, then access properties as needed
  // const themeHook = useState("var(--color-green)");

  return (
    <Provider store={store}>
      <React.StrictMode>
        {/* <ThemeContext.Provider value={themeHook}> */}
        <NavBar />
        <main>
          <Suspense fallback={null}>
            <Router>
              <Search path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </main>
        {/* </ThemeContext.Provider> */}
      </React.StrictMode>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
