import { useFormContext } from "../contexts/formContext";
import { Form } from "../components/Form";
import { CocktailsContainer } from "../components/Cocktails/CocktailsContainer";

export const ExploreCocktails = () => {
  const { querySubmitted, setQuerySubmitted, query, setQuery, data, setData } =
    useFormContext();

  return (
    <div>
      <h1>Explore. Create. Enjoy.</h1>
      <Form
        query={query}
        setQuery={setQuery}
        setQuerySubmitted={setQuerySubmitted}
        querySubmitted={querySubmitted}
      />
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
