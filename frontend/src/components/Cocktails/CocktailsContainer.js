import { useState } from "react";

import { CocktailCard } from "./CocktailCard";

export const CocktailsContainer = ({ query, setQuery, data, setData }) => {
  const [isLoading, setIsLoading] = useState(false);

  return <CocktailCard />;
};
