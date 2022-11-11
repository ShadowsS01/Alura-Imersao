import { useContext } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, {
  ColorModeContext,
} from "../src/components/Menu/components/ColorMode";
import RegisterVideo from "../src/components/RegisterVideo";

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    backgroundOpacity: "rgba(255, 255, 255, 0.80)",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    backgroundOpacity: "rgba(32, 32, 32, 0.95)",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  },
};

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={"dark"}>{props.children}</ColorModeProvider>
  );
}

function Root({ Component, pageProps }) {
  const contexto = useContext(ColorModeContext);

  return (
    <ThemeProvider theme={theme[contexto.mode]}>
      <Head>
        <title>AluraTube</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <CSSReset />
      <Component {...pageProps} />
      <RegisterVideo />
    </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <Root {...props} />
    </ProviderWrapper>
  );
}
