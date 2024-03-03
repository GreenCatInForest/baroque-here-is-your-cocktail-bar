import { useState } from "react";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { CocktailsContainer } from "./components/Cocktails/CocktailsContainer";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Search Queries

  const query = {
    nameQuery: "",
    ingredientQuery: "",
    categoryQuery: "",
    alcoholQuery: "",
  };

  console.log(query);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Form query={query} />
      <CocktailsContainer />
    </div>
  );
};
