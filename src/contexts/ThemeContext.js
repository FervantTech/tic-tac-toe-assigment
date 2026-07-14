import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    console.log("Updated theme:" ,theme === "light"? 'dark' : 'light' )
    setTheme(theme === "light"? 'dark' : 'light')
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}
