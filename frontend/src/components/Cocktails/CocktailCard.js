import { useState, useEffect } from "react";
import { useFormContext } from "../../contexts/formContext";

export const CocktailCard = ({ item, isIngredient }) => {
  console.log(item);

  const [newFavorite, setNewFavorite] = useState(null);
  const [removeFavorite, setRemoveFavorite] = useState(null);
  const { dataYouTube, setDataYouTube } = useFormContext();
  console.log(dataYouTube);

  const addFavoriteToLocalStorage = (newFavorite) => {
    const existingFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    existingFavorites.push(newFavorite);
    localStorage.setItem("favorites", JSON.stringify(existingFavorites));
  };

  const handleFavourite = () => {
    const favorite = {
      key: item.idDrink,
      data: item,
    };
    setNewFavorite(favorite);
  };

  useEffect(() => {
    if (newFavorite) {
      addFavoriteToLocalStorage(newFavorite);
    }
  }, [newFavorite]);

  const removeFavoriteFromLocalStorage = (removeFavorite) => {
    const existingFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = existingFavorites.filter(
      (favorite) => favorite.key !== removeFavorite.key
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleNoFavourite = () => {
    const noFavorite = {
      key: item.idDrink,
      data: item,
    };
    setRemoveFavorite(noFavorite);
  };

  useEffect(() => {
    if (removeFavorite) {
      removeFavoriteFromLocalStorage(removeFavorite);
    }
  }, [removeFavorite]);

  // Data for main search from cocktail DataBase API

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

  // data for Youtube search from YouTube API

  const description = item.snippet.description;
  const nameYouTubeCocktail = item.snippet.title;
  const channelYouTube = item.snippet.channelTitle;
  const videoYouTube = (
    <iframe
      className="youtubeVideo"
      // width="560"
      // height="315"
      src={`https://www.youtube.com/embed/${item.id.videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={item.snippet.title}
    ></iframe>
  );

  return (
    <div>
      {nameCocktail && <h1>{nameCocktail}</h1>}
      {nameYouTubeCocktail && <h1>{nameYouTubeCocktail}</h1>}
      <img src={thumbnailCocktail} alt={nameCocktail} />
      <h3>{categoryCocktail}</h3>
      {description && <h3>{description}</h3>}
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
      {channelYouTube && <h3>channel on YouTube: {channelYouTube}</h3>}
      {videoYouTube && videoYouTube}
      <div className="buttonSelectionMenu">
        {item.strIngredient1 === "" || !item.strIngredient1 ? (
          <button className="searchButton">Try to find more</button>
        ) : null}
        <button className="searchButtonYoutube" onClick={handleFavourite}>
          Add to favourites
        </button>
        <button className="searchButton" onClick={handleNoFavourite}>
          Remove
        </button>
        <button className="searchButton">Share</button>
      </div>
    </div>
  );
};
