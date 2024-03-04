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
  const apiKey = process.env.XRapidAPIKey;

  console.log(querySubmitted);

  const fetchCocktails = useCallback(
    async (querySubmitted) => {
      setIsLoading(true);
      console.log(querySubmitted);

      const urls = [
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${querySubmitted.ingredientQuery}`,
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${querySubmitted.categoryQuery}`,
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${querySubmitted.alcoholQuery}`,
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${querySubmitted.nameQuery}`,
      ];

      try {
        const data = await Promise.all(
          urls.map((url) =>
            axios
              .get(url, {
                headers: {
                  "X-RapidAPI-Key": apiKey,
                },
              })
              .then((response) => response.data.drinks)
          )
        );

        const tempCocktailData = [].concat(...data);
        setData(tempCocktailData);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    },
    [setData, apiKey]
  );

  useEffect(() => {
    fetchCocktails(querySubmitted);
  }, [querySubmitted, fetchCocktails]);

  console.log(data);

  return <CocktailCard />;
};
