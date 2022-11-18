import styled from "styled-components";

export const StyledMenu = styled.header`
  z-index: 999;
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) =>
    theme.backgroundOpacity || "rgba(32, 32, 32, 0.85)"};
  backdrop-filter: blur(16px);
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;

  a {
    display: flex;
    align-items: center;
    border-radius: 12px;
    padding: 6px;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 0.18rem ${({ theme }) => theme.colorMain || "#1d90f5"};
    }
  }

  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;
