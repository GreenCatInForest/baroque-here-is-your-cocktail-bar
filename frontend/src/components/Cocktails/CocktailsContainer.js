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
      let tempCocktailData = [];

      setIsLoading(true);
      console.log(querySubmitted);

      // search by ingredient
      try {
        const cocktailByIngredient = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${querySubmitted.ingredientQuery}`,
          {
            headers: {
              "X-RapidAPI-Key": apiKey,
            },
          }
        );
        console.log(cocktailByIngredient.data);
        cocktailByIngredient &&
          tempCocktailData.push(cocktailByIngredient.data);
      } catch (error) {
        setError(error);
      }

      // search by category

      try {
        const cocktailByCategory = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${querySubmitted.categoryQuery}`,
          {
            headers: {
              "X-RapidAPI-Key": apiKey,
            },
          }
        );
        console.log(cocktailByCategory.data);
        cocktailByCategory && tempCocktailData.push(cocktailByCategory.data);
      } catch (error) {
        setError(error);
      }

      // search by alcohol

      try {
        console.log(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${querySubmitted.alcoholQuery}`
        );
        const cocktailByAlcohol = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${querySubmitted.alcoholQuery}`,
          {
            headers: {
              "X-RapidAPI-Key": apiKey,
            },
          }
        );
        console.log(cocktailByAlcohol.data);
        cocktailByAlcohol && tempCocktailData.push(cocktailByAlcohol.data);
      } catch (error) {
        setError(error);
      }

      if (
        querySubmitted.nameQuery === "undefined" ||
        querySubmitted.nameQuery === "" ||
        querySubmitted.nameQuery === null
      )
        return "null";
      else {
        try {
          const cocktailByName = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${querySubmitted.nameQuery}`,
            {
              headers: {
                "X-RapidAPI-Key": apiKey,
              },
            }
          );
          console.log(cocktailByName.data);
          tempCocktailData.push(cocktailByName.data);
        } catch (error) {
          setError(error);
        }
      }
      setData(tempCocktailData);
    },
    [setData, apiKey]
  );

  // querySubmitted.nameQuery !== "" &&
  //   (urlFetch = `search.php?s=${querySubmitted.nameQuery}`);
  // querySubmitted.nameIngredient !== "" &&
  //   (urlFetch = `filter.php?i=${querySubmitted.nameIngredient}`);
  // querySubmitted.Alcoholic !== "" &&
  //   (urlFetch = `filter.php?a=${querySubmitted.categoryQuery}`);
  // querySubmitted.categoryQuery !== "" &&
  //   (urlFetch = `filter.php?c=${querySubmitted.categoryQuery}`);

  // const options = {
  //   method: "GET",
  //   url: `https://www.thecocktaildb.com/api/json/v1/1/${urlFetch}`,

  //   headers: {
  //     "X-RapidAPI-Key": process.env.XRapidAPIKey,
  //     // "X-RapidAPI-Host": process.env.Host,
  //   },
  // };

  // try {
  //   const response = await axios.request(options);
  //   console.log(response.data);
  //   setData(response.data);
  //   console.log(data);
  // } catch (error) {
  //   console.error(error);
  // }, []);

  useEffect(() => {
    fetchCocktails(querySubmitted);
  }, [querySubmitted, fetchCocktails]);

  console.log(data);

  return <CocktailCard />;
};
