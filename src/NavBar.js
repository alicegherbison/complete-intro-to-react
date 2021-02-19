import { Link } from "@reach/router";
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";

const spin = keyframes`to {
  transform: rotate(360deg);
}`;

const NavBar = () => (
  <header
    css={css`
      border-radius: var(--radius);
      padding: 3.2rem;
      background-color: var(--color-lilac);
      font-size: 2.4rem;
    `}>
    <Link className="title" to="/">
      Adopt me{" "}
      <span
        aria-label="logo"
        css={css`
          display: inline-block;
          animation: 1s ${spin} linear infinite;

          &:hover {
            animation: 1s ${spin} linear infinite reverse;
          }
        `}
        role="img">
        🌈
      </span>
    </Link>
  </header>
);

export default NavBar;
