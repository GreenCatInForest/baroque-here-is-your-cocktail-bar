import { createContext, useState, useContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const applyThemeToElements = (elements, themeClass) => {
      elements.forEach((element) => {
        element.classList.add(themeClass);
        element.classList.remove(
          themeClass === "lightTheme" ? "darkTheme" : "lightTheme"
        );
      });
    };
    const themeElements = document.querySelectorAll(".theme");
    applyThemeToElements(
      themeElements,
      isDarkTheme ? "darkTheme" : "lightTheme"
    );
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
