import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 500ms;
    animation-name: init-page;
    animation-duration: 1s;
  }
  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.backgroundBase || "#181818"} ;
    color: ${({ theme }) => theme.textColorBase || "#FFFFFF"};
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

  .div-notification {
    z-index: 999999 !important;
  }
  .message {
    background: ${({ theme }) =>
      theme.backgroundOpacity || "rgba(32, 32, 32, 0.75)"};
    color: ${({ theme }) => theme.textColorBase || "#FFFFFF"};
    backdrop-filter: blur(16px);
  }

  @keyframes init-page {
  0% {
    opacity: 0;
    transform: translateY(-2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
