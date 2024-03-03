import { useState } from "react";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { CocktailsContainer } from "./components/Cocktails/CocktailsContainer";

export const App = () => {
  // basic state for dark mode and hamburger menu

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  // state for search queries

  const [query, setQuery] = useState({
    nameQuery: "",
    ingredientQuery: "",
    categoryQuery: "",
    alcoholQuery: "",
  });

  //  state for data from API

  const [data, setData] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Form query={query} setQuery={setQuery} />
      <CocktailsContainer
        query={query}
        setQuery={setQuery}
        data={data}
        setData={setData}
      />
    </div>
  );
};
