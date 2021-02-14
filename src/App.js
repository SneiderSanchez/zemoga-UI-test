import "./App.css";
import Hero from "./components/Hero";
import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import CandidateCard from "./components/CandidateCard";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/themes";
import { Toggle } from "./components/Toggle";
import { useDarkMode } from "./hooks/useDarkMode";
import { MainContent, CandidatesContainer, SectionTitle } from "./app.styles";
import { candidatesBase } from "./utils";
import Footer from "./components/Footer";
//this should be a component?
import ProductDescription from "./components/ProductDescription";
import SubmitName from "./components/SubmitName";

function App() {
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const candidates = candidatesBase;
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Hero />
        <MainContent>
          <ProductDescription />
          <SectionTitle>Votes</SectionTitle>
          <CandidatesContainer>
            {/* Why using forEach doesnt work? */}
            {candidates.map((candidate) => (
              <CandidateCard candidate={candidate} key={candidate.id} />
            ))}
          </CandidatesContainer>
          <SubmitName />
        </MainContent>
        <Footer />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
