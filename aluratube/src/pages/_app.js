import { useContext } from "react";
import Head from "next/head";

import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../styles/CSSReset";

import ColorModeProvider, {
  ColorModeContext,
} from "../components/Menu/components/ColorMode";
import RegisterVideo from "../components/RegisterVideo";

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    backgroundOpacity: "rgba(255, 255, 255, 0.60)",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
    colorMain: "#1d90f5",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    backgroundOpacity: "rgba(32, 32, 32, 0.75)",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
    colorMain: "#1d90f5",
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
      <Toaster
        position="top-right"
        containerClassName="div-notification"
        toastOptions={{
          className: "message",
          duration: 6000,
        }}
      />
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
