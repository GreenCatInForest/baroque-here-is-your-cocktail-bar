import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { YourCocktailSelection } from "./pages/YourCocktailSelection";
import { Form } from "./components/Form";

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
    path: "/explore-the-cocktails",
    element: <Form />,
  },
]);

export default CustomRouter;
