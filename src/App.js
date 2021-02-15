import Router from "./components/Router";
import { GlobalStyles } from "./components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Toggle } from "./components/Toggle";
import { useDarkMode } from "./hooks/useDarkMode";
import { lightTheme, darkTheme } from "./utils";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const toastOptions = {
    style: {
      color: themeMode.text,
      background: themeMode.body,
    },
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Toaster toastOptions={toastOptions} />
      <Router />
      <Footer />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
