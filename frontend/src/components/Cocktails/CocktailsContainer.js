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
  const [cocktails, setCocktails] = useState([]);

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

  let filteredArray = [];
  Array.isArray(data)
    ? (filteredArray = data.filter((item) => {
        return item !== undefined && item !== null && item !== "";
      }))
    : (filteredArray = []);
  console.log(filteredArray);

  // const clearData = data.filter((item) => {
  //   return item.value !== null && item.value !== undefined && item.value !== "";
  // });

  // console.log(clearData);

  // {
  //   if (data === undefined || data === null || data === "") {
  //     return "You have no cocktails, let's find something for you!";
  //   } else {
  //     return data.map((item) => (
  //       <CocktailCard key={Math.random() + item + Math.random()} item={item} />
  //     ));
  //   }
  // }

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && (
        <h2>
          It seems something went wrong. Try again with another query please{" "}
          {error}
        </h2>
      )}
      {!filteredArray ? (
        <h2>You have no cocktails, let's find something for you!</h2>
      ) : (
        filteredArray.map((item) => (
          <CocktailCard key={item + Math.random()} item={item} />
        ))
      )}
    </div>
  );
};
