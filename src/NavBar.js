import React from "react";
import { Link } from "@reach/router";

const NavBar = () => (
  <header>
    <Link className="title" to="/">
      Adopt me{" "}
      <span aria-label="logo" role="img">
        🌈
      </span>
    </Link>
  </header>
);

export default NavBar;
