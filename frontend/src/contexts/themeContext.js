import { createContext, useState, useContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("darkTheme");
      document.body.classList.remove("lightTheme");
    } else {
      document.body.classList.add("lightTheme");
      document.body.classList.remove("darkTheme");
    }
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
