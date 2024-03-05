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
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${querySubmitted.ingredientQuery}`, // search ingredient in ingredient database
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${querySubmitted.ingredientQuery}`, // search ingredient in name database
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

  // filter the data to remove any undefined, null, or empty data
  let filteredArray = [];

  // check if the data is array
  Array.isArray(data)
    ? // filter falsy data from the array
      (filteredArray = data.filter((item) => {
        return (
          item !== undefined && item !== null && item !== ""
          // check if the recipe is available. If not, it'll not be displayed
          // it can be solved, but on the next stage after MVP
          // && item.hasOwnProperty("strDrinkThumb")
          //  && item.hasOwnProperty("strIngredient1")
          //     "strIngredient2" ||
          //     "strIngredient3" ||
          //     "strIngredient4" ||
          //     "strIngredient5"
          // )
        );
      }))
    : (filteredArray = []);

  // additional request if needed to get the recipe
  // let additionalRequestData = [];

  // Array.isArray(filteredArray) &&
  //   filteredArray.map(async (item) => {
  //     !item.hasOwnProperty("strIngredient1")
  //       ? await axios
  //           .get(
  //             `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${item.strDrink}`,
  //             {
  //               headers: {
  //                 "X-RapidAPI-Key": apiKey,
  //               },
  //             }
  //           )
  //           .then((response) => response.data.drinks)
  //           .then((data) => {
  //             let cleanData = data.flat([[[]]]);
  //             console.log(cleanData);
  //             return additionalRequestData.push(cleanData);
  //           })
  //           .catch((error) => setError(error))
  //       : console.log("No additional request needed");
  //   });

  // console.log(additionalRequestData);

  return (
    <div className="cocktailsContainer">
      {isLoading && <h2>Loading...</h2>}
      {error && (
        <h2>
          It seems something went wrong. Try again with another query please{" "}
          {error}
        </h2>
      )}
      {filteredArray.length === 0 && querySubmitted && (
        <h2>No cocktails found. Try another query</h2>
      )}
      {filteredArray.length === 0 && !querySubmitted && (
        <h2>You have no cocktails yet, let's find something for you!</h2>
      )}
      {!filteredArray ? (
        <h2>You have no cocktails yet, let's find something for you!</h2>
      ) : (
        <div className="cocktailsMiniContainer">
          {filteredArray.map((item) => (
            <CocktailCard key={item + Math.random()} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
