import { useState } from "react";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
};
