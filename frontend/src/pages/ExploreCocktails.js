import { useFormContext } from "../contexts/formContext";
import { Form } from "../components/Form";
import { CocktailsContainer } from "../components/Cocktails/CocktailsContainer";

export const ExploreCocktails = () => {
  const { querySubmitted, setQuerySubmitted, query, setQuery, data, setData } =
    useFormContext();

  return (
    <div>
      <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-2 justify-center text-center">
        <article>
          <h1>Explore. Create. Enjoy.</h1>
          <div>Find cocktail recipe</div>
        </article>

        <article className="col-span-1 bg-strawberryFreeze p-56">
          <h2>Explore</h2>
          <p>Find YouTube Cocktail Recipe</p>
          <p>Find Cocktail Recipes</p>
          <p></p>

          <Form
            query={query}
            setQuery={setQuery}
            setQuerySubmitted={setQuerySubmitted}
            querySubmitted={querySubmitted}
          />
        </article>

        <article className="col-span-1 bg-desertSand p-56 w-full">
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
