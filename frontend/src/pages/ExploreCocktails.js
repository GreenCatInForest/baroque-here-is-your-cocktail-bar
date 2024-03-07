import { useState, useEffect } from "react";
import { useFormContext } from "../contexts/formContext";
import { Form } from "../components/Form";
import { YouTubeForm } from "../components/YouTubeForm";
import { CocktailsContainer } from "../components/Cocktails/CocktailsContainer";

export const ExploreCocktails = () => {
  const { querySubmitted, setQuerySubmitted, query, setQuery, data, setData } =
    useFormContext();

  return (
    <div className="theme">
      <div className="explore">
        <article>
          <h2>Explore</h2>
          <YouTubeForm />
          <p>Find Cocktail Recipes</p>
          <Form
            query={query}
            setQuery={setQuery}
            setQuerySubmitted={setQuerySubmitted}
            querySubmitted={querySubmitted}
            templateExplore="formStyleExplore" // apply template style to form
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
