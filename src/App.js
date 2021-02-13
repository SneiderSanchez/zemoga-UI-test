import "./App.css";
import Hero from "./components/hero";
import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/themes";
import { Toggle } from "./components/toggle";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Hero />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
