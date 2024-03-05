import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { YourCocktailSelection } from "./pages/YourCocktailSelection";

const CustomRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/your-cocktail-selection",
    element: <YourCocktailSelection />,
  },
]);

export default CustomRouter;
