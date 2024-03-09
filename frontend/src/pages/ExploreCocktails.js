import { useState, useEffect } from "react";
import { useFormContext } from "../contexts/formContext";

import { Form } from "../components/Form";
import { YouTubeSearchCocktailsContainer } from "../components/Cocktails/YouTubeSearchCocktailsContainer";
import { YouTubeForm } from "../components/YouTubeForm";
import { CocktailsContainer } from "../components/Cocktails/CocktailsContainer";

export const ExploreCocktails = () => {
  const {
    querySubmitted,
    setQuerySubmitted,
    query,
    setQuery,
    data,
    setData,
    dataYouTube,
    setDataYouTube,
    queryYouTube,
    setQueryYouTube,
  } = useFormContext();

  return (
    <div className="theme">
      <div className="exploreSearchContainer">
        <article>
          <h2>Explore</h2>
          <YouTubeForm
            dataYouTube={dataYouTube}
            setDataYouTube={setDataYouTube}
            queryYouTube={queryYouTube}
            setQueryYouTube={setQueryYouTube}
          />

          {dataYouTube.length > 1 && (
            <YouTubeSearchCocktailsContainer
              dataYouTube={dataYouTube}
              setDataYouTube={setDataYouTube}
              queryYouTube={queryYouTube}
              setQueryYouTube={setQueryYouTube}
            />
          )}

          <h2>Find Cocktail Recipes</h2>
          <Form
            query={query}
            setQuery={setQuery}
            setQuerySubmitted={setQuerySubmitted}
            querySubmitted={querySubmitted}
            templateExplore="templateExplore" // pass template style to form
          />
        </article>
      </div>
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
