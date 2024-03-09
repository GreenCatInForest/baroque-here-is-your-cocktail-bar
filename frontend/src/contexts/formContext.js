import { createContext, useState, useContext, useEffect } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  // state for search queries

  const [querySubmitted, setQuerySubmitted] = useState("");

  const [query, setQuery] = useState({
    nameQuery: undefined,
    ingredientQuery: undefined,
    categoryQuery: undefined,
    alcoholQuery: undefined,
  });

  // state for YouTube search queries

  const [dataYouTube, setDataYouTube] = useState([]);
  const [queryYouTube, setQueryYouTube] = useState("");

  //  state for data from API

  const [data, setData] = useState("");

  //  state for additional request to API

  const [isIngredients, setIsIngredients] = useState(false);

  useEffect(() => {
    console.log(querySubmitted, query, data);
  }, [querySubmitted, query, data]);

  return (
    <FormContext.Provider
      value={{
        querySubmitted,
        setQuerySubmitted,
        query,
        setQuery,
        data,
        setData,
        isIngredients,
        setIsIngredients,
        dataYouTube,
        setDataYouTube,
        queryYouTube,
        setQueryYouTube,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
