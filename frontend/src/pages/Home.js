import { useFormContext } from "../contexts/formContext";
import { Banner } from "../components/Banner";
import { Form } from "../components/Form";
import { CocktailsContainer } from "../components/Cocktails/CocktailsContainer";

export const Home = () => {
  // state for search queries
  const { querySubmitted, setQuerySubmitted, query, setQuery, data, setData } =
    useFormContext();

  return (
    <div className="theme">
      <Banner />
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
