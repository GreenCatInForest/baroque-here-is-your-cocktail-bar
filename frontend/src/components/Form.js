import React, { useState } from "react";

export const Form = ({
  query,
  setQuery,
  setQuerySubmitted,
  templateExplore,
}) => {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  // Search Queries

  // checkbox for alcoholic drinks
  const handleCheck = (e) => {
    setChecked(!checked);
    checked
      ? setQuery({ ...query, alcoholQuery: e.target.value })
      : setQuery({ ...query, alcoholQuery: e.target.value });
  };

  // select for category of drinks

  const handleSelect = (e) => {
    setSelected(!selected);
    selected
      ? setQuery({ ...query, categoryQuery: e.target.value })
      : setQuery({ ...query, categoryQuery: e.target.value });
    setSelectedOption(e.target.value);
  };

  // input for name and ingredient search

  const handleNameChange = (e) => {
    setQuery({ ...query, nameQuery: e.target.value });
  };

  const handleIngredientChange = (e) => {
    let ingredientCapitalDigitForAPI =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);

    setQuery({ ...query, ingredientQuery: ingredientCapitalDigitForAPI });
  };

  // form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuerySubmitted(query);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={
          templateExplore === "" ? "formCocktailSearch" : templateExplore // apply different styles to form
        }
      >
        <h2>Our Cocktail Recipes</h2>
        <input
          type="text"
          name="nameQuery"
          id="nameQuery"
          placeholder="Enter the name: Margarita or Muai Tai"
          value={query.nameQuery}
          onChange={handleNameChange}
        />
        <input
          type="text"
          name="ingredientQuery"
          id="ingredientQuery"
          placeholder="Enter the ingredient: tekila or rum"
          value={query.ingredientQuery}
          onChange={handleIngredientChange}
        />
        <label htmlFor="categoryQuery">Choose your drink type</label>
        <select
          id="categoryQuery"
          name="categoryQuery"
          value={selectedOption}
          onChange={handleSelect}
        >
          <option value="Cocktail">Cocktail</option>
          <option value="Shot">Shot</option>
          <option value="Ordinary Drink">Ordinary Drink</option>
          <option value="Milk / Float / Shake">Milk / Float / Shake</option>
          <option value="Other/Unknown">Other/Unknown</option>
          <option value="Cocoa">Cocoa</option>
          <option value="Coffee / Tea">Coffee / Tea</option>
          <option value="Homemade Liqueur">Homemade Liqueur</option>
        </select>
        <div className="formCocktailSearchWrapperAlcohol">
          <label htmlFor="Alcoholic">Alcohol</label>
          <input
            type="radio"
            id="Alcoholic"
            name="alcohol"
            value="Alcoholic"
            onChange={handleCheck}
          />
          <label htmlFor="Non_Alcoholic">Non Alcohol</label>
          <input
            type="radio"
            id="Non_Alcoholic"
            name="alcohol"
            value="Non_Alcoholic"
            onChange={handleCheck}
          />
        </div>
        <button className="searchButton flex flex-row justify-center items-center gap-2 text-white" type="submit">
          <span className="text-lg font-bold">𐃯</span> 
          <span>Search</span>
        </button>
      </form>
    </>
  );
};
