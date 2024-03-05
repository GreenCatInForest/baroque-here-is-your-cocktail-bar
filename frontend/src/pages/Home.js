import { useState } from "react";

import { Banner } from "../components/Banner";
import { Form } from "../components/Form";
import { CocktailsContainer } from "../components/Cocktails/CocktailsContainer";

export const Home = () => {
  // state for search queries

  const [querySubmitted, setQuerySubmitted] = useState("");

  const [query, setQuery] = useState({
    nameQuery: undefined,
    ingredientQuery: undefined,
    categoryQuery: undefined,
    alcoholQuery: undefined,
  });

  //  state for data from API

  const [data, setData] = useState("");

  return (
    <div>
      <Banner />
      <Form
        query={query}
        setQuery={setQuery}
        setQuerySubmitted={setQuerySubmitted}
        querySubmitted={querySubmitted}
      />
      <CocktailsContainer
        query={query}
        setQuery={setQuery}
        data={data}
        setData={setData}
        querySubmitted={querySubmitted}
        setQuerySubmitted={setQuerySubmitted}
      />
    </div>
  );
};
