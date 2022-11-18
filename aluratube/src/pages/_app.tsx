import { ReactNode, useContext } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../styles/CSSReset";

import { theme } from "../styles/theme";

import ColorModeProvider, {
  ColorModeContext,
} from "../components/Menu/components/ColorMode";
import RegisterVideo from "../components/RegisterVideo";

function ProviderWrapper(props: { children: ReactNode }) {
  return (
    <ColorModeProvider initialMode={"dark"}>{props.children}</ColorModeProvider>
  );
}

function Root({ Component, pageProps }: AppProps) {
  const { mode } = useContext(ColorModeContext);

  const Theme = () => {
    if (mode === "dark") return theme["dark"];
    if (mode === "light") return theme["light"];
    return theme["dark"];
  };

  return (
    <ThemeProvider theme={Theme}>
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

export default function _App(props: AppProps) {
  return (
    <ProviderWrapper>
      <Root {...props} />
    </ProviderWrapper>
  );
}
