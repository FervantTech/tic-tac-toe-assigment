import { useContext } from "react";
import Router from "./Router";
import { GlobalStyle } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeContext } from "./contexts/ThemeContext";
import { ModalContextProvider } from "./contexts/ModalContext";

function App() {
  const { theme } = useContext(ThemeContext);

const mode = (theme === "light" ? lightTheme: darkTheme)
  return (
    <ThemeProvider theme={mode}>
      <ModalContextProvider>
      <GlobalStyle />
      <Router />
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
