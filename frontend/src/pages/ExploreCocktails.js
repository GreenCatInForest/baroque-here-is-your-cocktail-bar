import { useState, useEffect } from "react";
import { useFormContext } from "../contexts/formContext";
import { Form } from "../components/Form";
import { CocktailsContainer } from "../components/Cocktails/CocktailsContainer";

export const ExploreCocktails = () => {
  const { querySubmitted, setQuerySubmitted, query, setQuery, data, setData } =
    useFormContext();

  const [expand, setExpand] = useState(false);
  const [className, setClassName] = useState("");

  const expandPage = () => setExpand(!expand);

  useEffect(() => {
    expand
      ? setClassName("md:col-span-2 md:p-24")
      : setClassName("md:col-span-1 md:p-0");
  }, [expand]);

  return (
    <div>
      <div className="exploreCreate">
        <article
          className={`${className} bg-strawberryFreeze`}
          onClick={expandPage}
        >
          <h2>Explore</h2>
          <p>Find YouTube Cocktail Recipe</p>
          <p>Find Best Cocktail Bar Near Me</p>
          <p>Find Cocktail Recipes</p>
          <Form
            query={query}
            setQuery={setQuery}
            setQuerySubmitted={setQuerySubmitted}
            querySubmitted={querySubmitted}
          />
        </article>

        <article className={`${className} bg-desertSand`} onClick={expandPage}>
          <h2>Create</h2>
          <button className="bg-rosewood text-white rounded h-1/2">
            Add Your Cocktail Recipe
          </button>
          <p>I have ingredient. What to add?</p>
          <p>Your Alchemy Laboratory</p>
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
