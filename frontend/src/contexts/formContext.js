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

  //  state for data from API

  const [data, setData] = useState("");

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
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
