import Link from "next/link";

import type { SearchProps } from "./type";

import { StyledMenu } from "./styles";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Search from "./components/Search";
import { Logo } from "../Logo";

export default function Menu({ valorDoFiltro, setValorDoFiltro }: SearchProps) {
  return (
    <StyledMenu>
      <Link href="/" title="Inicio">
        <Logo />
      </Link>
      <Search
        valorDoFiltro={valorDoFiltro}
        setValorDoFiltro={setValorDoFiltro}
      />
      <DarkModeSwitch />
    </StyledMenu>
  );
}
