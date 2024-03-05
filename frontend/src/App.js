import { useState } from "react";

import { ThemeProvider } from "./contexts/themeContext";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { RouterProvider } from "react-router-dom";
import CustomRouter from "./CustomRouter";

export const App = () => {
  // basic state for dark mode and hamburger menu

  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  return (
    <>
      <ThemeProvider>
        <NavBar />
        <RouterProvider router={CustomRouter}></RouterProvider>
        <Footer />
      </ThemeProvider>
    </>
  );
};
