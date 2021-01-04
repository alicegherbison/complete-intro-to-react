import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const NavBar = () => (
  <header>
    <Link to="/">Adopt me</Link>
    <span aria-label="logo" role="img">
      🌈
    </span>
  </header>
);

export default NavBar;
