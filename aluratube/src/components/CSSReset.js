import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *::-webkit-scrollbar {
    height: 0.625rem;
    width: 0.625rem;
  }
  *::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.3);
  }
  *::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: gray;
  }

  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase};
  }

  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    border: 2px solid transparent;
    border-radius: 12px;
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    &:focus-visible {
      outline: none;
      border-color: #1d90f5;
    }
  }
`;
