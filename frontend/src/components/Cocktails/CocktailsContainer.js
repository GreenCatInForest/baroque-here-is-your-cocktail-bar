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
  const apiKey = process.env.REACT_APP_XRapidAPIKey; // ✅ correct prefix

  const fetchCocktails = useCallback(
    async (querySubmitted) => {
      setIsLoading(true);

      const urls = [
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${querySubmitted.ingredientQuery}`,
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${querySubmitted.ingredientQuery}`,
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${querySubmitted.categoryQuery}`,
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${querySubmitted.alcoholQuery}`,
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${querySubmitted.nameQuery}`,
      ];

      try {
        const responses = await Promise.all(
          urls.map((url) =>
            axios
              .get(url, { headers: { "X-RapidAPI-Key": apiKey } })
              .then((r) => r.data.drinks)
              .catch(() => null)
          )
        );

        const arrays = responses.map((a) => (Array.isArray(a) ? a : []));
        const tempCocktailData = arrays
          .flat()
          .filter((item) => item && item.idDrink && item.strDrink);

        setData(tempCocktailData);
      } catch (error) {
        setError(error.message || String(error));
      } finally {
        setIsLoading(false);
      }
    },
    [setData, apiKey]
  );

  useEffect(() => {
    if (querySubmitted) fetchCocktails(querySubmitted);
  }, [querySubmitted, fetchCocktails]);

  const filteredArray = Array.isArray(data)
    ? data.filter((item) => item && item.idDrink && item.strDrink)
    : [];

  return (
    <div className="cocktailsContainer">
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>It seems something went wrong: {error}</h2>}
      {filteredArray.length === 0 && querySubmitted && (
        <h2>No cocktails found. Try another query.</h2>
      )}
      {filteredArray.length === 0 && !querySubmitted && (
        <h2>You have no cocktails yet — let’s find something for you!</h2>
      )}
      {filteredArray.length > 0 && (
          filteredArray.map((item) => (
            <div key={item.idDrink} className="cocktailCardWrapper">
            <CocktailCard item={item} />
            </div>
          ))
 
      )}
    </div>
  );
};
