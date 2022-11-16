import Link from "next/link";
import { StyledMenu } from "./styles";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Search from "./components/Search";
import { Logo } from "../Logo";

export default function Menu({ valorDoFiltro, setValorDoFiltro }) {
  return (
    <StyledMenu>
      <Link href="/">
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
