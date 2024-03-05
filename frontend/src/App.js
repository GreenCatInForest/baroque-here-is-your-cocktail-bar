import { useState } from "react";

import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

export const App = () => {
  // basic state for dark mode and hamburger menu

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};
