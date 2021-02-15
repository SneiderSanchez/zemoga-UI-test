import Routes from "./components/Routes";
import { GlobalStyles } from "./components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Toggle } from "./components/Toggle";
import { useDarkMode } from "./hooks/useDarkMode";
import { lightTheme, darkTheme } from "./utils";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import { FooterWrapper } from "./app.styles";

function App() {
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const toastOptions = {
    className: "toast",
    style: {
      color: themeMode.text,
      background: themeMode.body,
    },
  };

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Toaster toastOptions={toastOptions} />
        <Routes />
        <FooterWrapper>
          <Footer />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </FooterWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
