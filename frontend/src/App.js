import { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Route,
  Link,
} from "react-router-dom";

import CustomRouter from "./CustomRouter";
import { ThemeProvider } from "./contexts/themeContext";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

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
