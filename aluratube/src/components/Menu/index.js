import styled from "styled-components";
import { Logo } from "../Logo";
import Search from "./components/Search";

const StyledMenu = styled.header`
  z-index: 9999;
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) =>
    theme.backgroundLevel1 || "rgba(255, 255, 255, 0.85)"};
  backdrop-filter: blur(8px);
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
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

export default function Menu({ valorDoFiltro, setValorDoFiltro }) {
  return (
    <StyledMenu>
      <a href="/">
        <Logo />
      </a>
      <Search
        valorDoFiltro={valorDoFiltro}
        setValorDoFiltro={setValorDoFiltro}
      />
    </StyledMenu>
  );
}
