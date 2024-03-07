import { useState, useEffect } from "react";
import { useFormContext } from "../contexts/formContext";
import { Form } from "../components/Form";
import { YouTubeForm } from "../components/YouTubeForm";
import { CocktailsContainer } from "../components/Cocktails/CocktailsContainer";

export const ExploreCocktails = () => {
  const { querySubmitted, setQuerySubmitted, query, setQuery, data, setData } =
    useFormContext();

  const [expand, setExpand] = useState(false);
  const [className, setClassName] = useState("");

  const expandPage = () => setExpand(!expand);

  useEffect(() => {
    expand ? setClassName("md:col-span-2") : setClassName("md:col-span-1");
  }, [expand]);

  return (
    <div className="theme">
      <div className="exploreCreate">
        <article className={`${className}`}>
          <h2 onClick={expandPage}>Explore</h2>
          <YouTubeForm />
          <p>Find Best Cocktail Bar Near Me</p>
          <p>Find Cocktail Recipes</p>
          <Form
            query={query}
            setQuery={setQuery}
            setQuerySubmitted={setQuerySubmitted}
            querySubmitted={querySubmitted}
          />
        </article>

        <article className={`${className}`}>
          <h2 onClick={expandPage}>Create</h2>
          <button className="bg-rosewood text-white rounded p-2 hover:bg-arizonaStone">
            Add Your Cocktail Recipe
          </button>
          <p>I have ingredient. What to add?</p>
          <p>Register to Alchemy Laboratory</p>
          <button className="bg-rosewood text-white rounded p-2 hover:bg-arizonaStone"></button>
        </article>
        <article className={`${className}`}>
          <h2 onClick={expandPage}>Enjoy</h2>
          <p>Find Best Cocktail Bar Near Me</p>
          <p>Shop at the Market</p>
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
