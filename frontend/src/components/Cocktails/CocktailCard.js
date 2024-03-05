import { useState, useEffect } from "react";

export const CocktailCard = ({ item }) => {
  console.log(item);

  const [isSelected, setIsSelected] = useState(false);
  const [mySelection, setMySelection] = useState([]);

  const handleAddToSelection = (event) => {
    event.preventDefault();
    setIsSelected(true);
    setMySelection(localStorage.setItem("item", JSON.stringify(item)));
  };

  // const selectionsFromLS = JSON.parse(localStorage.getItem("selection")) || [];

  // useEffect(() => {
  //   const newSelections = [...selectionsFromLS, selection];
  //   localStorage.setSelection("selection", JSON.stringify(selection));
  // }, [selection]);

  const alcoholCocktail = item.strAlcoholic;
  const categoryCocktail = item.strCategory;
  const nameCocktail = item.strDrink;
  const glassCocktail = item.strGlass;
  const instructionsCocktail = item.strInstructions;
  const thumbnailCocktail = item.strDrinkThumb;
  const strIngredient1Cocktail = item.strIngredient1;
  const strIngredient2Cocktail = item.strIngredient2;
  const strIngredient3Cocktail = item.strIngredient3;
  const strIngredient4Cocktail = item.strIngredient4;
  const strIngredient5Cocktail = item.strIngredient5;
  const strMeasure1Cocktail = item.strMeasure1;
  const strMeasure2Cocktail = item.strMeasure2;
  const strMeasure3Cocktail = item.strMeasure3;
  const strMeasure4Cocktail = item.strMeasure4;
  const strMeasure5Cocktail = item.strMeasure5;

  return (
    <div>
      <h1>{nameCocktail}</h1>
      <img src={thumbnailCocktail} alt={nameCocktail} />
      <h3>{categoryCocktail}</h3>
      <h3>{alcoholCocktail}</h3>
      <h3>{glassCocktail}</h3>
      <p>{instructionsCocktail}</p>
      <h3>Ingredients</h3>
      <ul>
        <li>
          {strMeasure1Cocktail} {strIngredient1Cocktail}
        </li>
        <li>
          {strMeasure2Cocktail} {strIngredient2Cocktail}
        </li>
        <li>
          {strMeasure3Cocktail} {strIngredient3Cocktail}
        </li>
        <li>
          {strMeasure4Cocktail} {strIngredient4Cocktail}
        </li>
        <li>
          {strMeasure5Cocktail} {strIngredient5Cocktail}
        </li>
      </ul>
      <button onClick={handleAddToSelection}>Add to favourites</button>
      <button>Send to the friend</button>
    </div>
  );
};
