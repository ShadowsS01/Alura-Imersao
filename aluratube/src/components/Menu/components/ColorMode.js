import { createContext, useEffect, useState } from "react";

export const ColorModeContext = createContext({
  mode: "",
  setMode: () => {
    alert("Você precisa me configurar primeiro!");
  },
  toggleMode: () => {
    alert("Você precisa me configurar primeiro!");
  },
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = useState(props.initialMode);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");

    if (!localTheme) {
      localStorage.setItem("theme", mode);
    } else {
      if (mode !== localTheme) {
        toggleMode();
      }
    }
  }, []);

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
      localStorage.setItem("theme", "light");
    }
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <ColorModeContext.Provider
      value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}
    >
      {props.children}
    </ColorModeContext.Provider>
  );
}
