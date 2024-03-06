import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { YourCocktailSelection } from "./pages/YourCocktailSelection";
import { ExploreCocktails } from "./pages/ExploreCocktails";

const CustomRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/your-cocktail-selection",
    element: <YourCocktailSelection />,
  },
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/explore-cocktails",
    element: <ExploreCocktails />,
  },
]);

export default CustomRouter;
