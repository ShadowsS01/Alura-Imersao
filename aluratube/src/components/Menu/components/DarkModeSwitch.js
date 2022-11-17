import { useContext } from "react";
import styled from "styled-components";
import { ColorModeContext } from "./ColorMode";

import { BiMoon, BiSun } from "react-icons/bi";

const StyledSwitch = styled.button`
  * {
    cursor: pointer;
  }

  & > * {
    animation: none;
    transition: 0ms;
  }

  border: 0;
  outline: none;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundBase};
  color: ${({ theme }) => theme.textColorBase};
  border: 2px solid ${({ theme }) => theme.borderBase};
  backdrop-filter: blur(16px);
  animation: none;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.backgroundOpacity};
    border-color: ${({ theme }) => theme.colorMain};
  }
`;

export default function DarkModeSwitch() {
  const { mode, toggleMode } = useContext(ColorModeContext);

  function isDark() {
    return mode === "dark";
  }

  return (
    <StyledSwitch
      type="button"
      onClick={() => toggleMode()}
      aria-label="Trocar tema"
      title={`Trocar o tema para ${isDark() ? "claro" : "escuro"}`}
    >
      {isDark() ? <BiSun size={25} /> : <BiMoon size={25} />}
    </StyledSwitch>
  );
}
