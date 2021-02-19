import { Link } from "@reach/router";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const NavBar = () => (
  <header
    css={css`
      padding: 3.2rem;
      background-color: var(--color-lilac);
      font-size: 2.4rem;
      border-radius: 0.4rem;
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
