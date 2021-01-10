import { Link } from "@reach/router";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const NavBar = () => (
  <header
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: pink;
      }
    `}>
    <Link className="title" to="/">
      Adopt me{" "}
      <span aria-label="logo" role="img">
        🌈
      </span>
    </Link>
  </header>
);

export default NavBar;
