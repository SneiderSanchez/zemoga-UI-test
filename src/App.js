import "./App.css";
import Hero from "./components/Hero";
import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/themes";
import { Toggle } from "./components/Toggle";
import { useDarkMode } from "./hooks/useDarkMode";
import { MainContent } from "./app.styles";
import Footer from "./components/Footer";
import ProductDescription from "./components/ProductDescription";
import SubmitName from "./components/SubmitName";

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
        <MainContent>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <ProductDescription />
          <SubmitName />
        </MainContent>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
