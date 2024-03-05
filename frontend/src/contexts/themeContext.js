import { createContext, useState, useContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    isDarkMode
      ? document.body.classList.add("darkMode") &&
        document.body.classList.remove("lightMode")
      : document.body.classList.remove("darkMode") &&
        document.body.classList.add("lightMode");
  }, [isDarkMode]);

  return (
    <ThemeProvider.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeProvider.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeProvider);
};
