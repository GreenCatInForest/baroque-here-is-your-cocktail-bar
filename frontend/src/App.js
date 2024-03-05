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
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

export const App = () => {
  // basic state for dark mode and hamburger menu

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  return (
    <>
      <NavBar />
      <RouterProvider router={CustomRouter}></RouterProvider>
      <Footer />
    </>
  );
};

//
//     <div className="App">
//       <NavBar />
//       <Home />
//       <Footer />
//     </div>
//   );
