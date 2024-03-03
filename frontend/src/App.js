import { useState } from "react";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { CocktailsContainer } from "./components/Cocktails/CocktailsContainer";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const [query, setQuery] = useState({
    nameQuery: "",
    ingredientQuery: "",
    categoryQuery: "",
    alcoholQuery: "",
  });

  // Search Queries

  console.log(query);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Form query={query} setQuery={setQuery} />
      <CocktailsContainer query={query} />
    </div>
  );
};
