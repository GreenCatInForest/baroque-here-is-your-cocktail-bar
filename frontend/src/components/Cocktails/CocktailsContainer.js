import { useState, useEffect, useCallback } from "react";

import axios from "axios";

import { CocktailCard } from "./CocktailCard";

export const CocktailsContainer = ({
  query,
  setQuery,
  data,
  setData,
  querySubmitted,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [urlFetch, setUrlFetch] = useState("");

  console.log(querySubmitted);

  const fetchCocktails = useCallback(async (querySubmitted) => {
    setIsLoading(true);

    let urlFetch = "";

    if (querySubmitted.nameQuery !== "") {
      urlFetch = `search.php?s=${querySubmitted.nameQuery}`;
    } else if (querySubmitted.nameIngredient !== "") {
      urlFetch = `filter.php?i=${querySubmitted.nameIngredient}`;
    } else if (querySubmitted.Alcoholic !== "") {
      urlFetch = `filter.php?a=${querySubmitted.categoryQuery}`;
    } else if (querySubmitted.categoryQuery !== "") {
      urlFetch = `filter.php?c=${querySubmitted.categoryQuery}`;
    }

    const options = {
      method: "GET",
      url: `https://the-cocktail-db.p.rapidapi.com/${urlFetch}`,

      //   params: {
      //     s: `${query.nameQuery}`,
      //     i: `${query.nameIngredient}`,
      //     a: `${query.categoryQuery}`,
      //     c: `${query.categoryQuery}`,
      //   },
      headers: {
        "X-RapidAPI-Key": process.env.XRapidAPIKey,
        "X-RapidAPI-Host": process.env.XRapidAPIHost,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCocktails(querySubmitted);
  }, [querySubmitted, fetchCocktails]);

  return <div>{data}</div>;
};
