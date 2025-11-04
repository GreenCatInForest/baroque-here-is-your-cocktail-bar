import React, { useState, useEffect } from "react";
import { useFormContext } from "../../contexts/formContext";

export const CocktailCard = ({ item }) => {
  const [newFavorite, setNewFavorite] = useState(null);
  const [removeFavorite, setRemoveFavorite] = useState(null);

    const {
      querySubmitted
    } = useFormContext();

  // Detect type
  const isYouTube = !!item?.snippet;

  // CocktailDB fields (may be undefined for YouTube items)
  const nameCocktail = item?.strDrink;
  const thumbnailCocktail = item?.strDrinkThumb;
  const categoryCocktail = item?.strCategory;
  const alcoholCocktail = item?.strAlcoholic;
  const glassCocktail = item?.strGlass;
  const instructionsCocktail = item?.strInstructions;

  // Build ingredients list safely (1..15 exist in API; show only present)
  const ingredients = Array.from({ length: 15 }, (_, i) => {
    const ing = item?.[`strIngredient${i + 1}`];
    const meas = item?.[`strMeasure${i + 1}`];
    return ing ? `${meas ?? ""} ${ing}`.trim() : null;
  }).filter(Boolean);

  // YouTube fields (only if isYouTube)
  const description = item?.snippet?.description;
  const nameYouTubeCocktail = item?.snippet?.title;
  const channelYouTube = item?.snippet?.channelTitle;
  const videoId = item?.id?.videoId;



  const handleFavourite = () => {
    const key = item?.idDrink ?? videoId ?? crypto.randomUUID();
    setNewFavorite({ key, data: item });
  };

  const handleNoFavourite = () => {
    const key = item?.idDrink ?? videoId;
    if (!key) return;
    setRemoveFavorite({ key, data: item });
  };

  useEffect(() => {
    if (newFavorite) {
      const existing = JSON.parse(localStorage.getItem("favorites")) || [];
      localStorage.setItem("favorites", JSON.stringify([...existing, newFavorite]));
    }
  }, [newFavorite]);

  useEffect(() => {
    if (removeFavorite) {
      const existing = JSON.parse(localStorage.getItem("favorites")) || [];
      const updated = existing.filter((f) => f.key !== removeFavorite.key);
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  }, [removeFavorite]);

  const hasContent =
  !!nameCocktail ||
  !!nameYouTubeCocktail ||
  !!thumbnailCocktail ||
  !!instructionsCocktail ||
  ingredients.length > 0 ||
  (isYouTube && !!videoId);

if (!hasContent) return null;

  return (
    <div className="cocktailCard">
      {/* Names */}
      {nameCocktail && <h1>{nameCocktail}</h1>}
      {nameYouTubeCocktail && <h1>{nameYouTubeCocktail}</h1>}

      {/* Thumbnail */}
      {thumbnailCocktail && (
        <img src={thumbnailCocktail} alt={nameCocktail ?? "cocktail"} className="object-fill"/>
      )}

      {/* Cocktail details */}
      
      {alcoholCocktail && <div className="card-categories"><span>Alcohol free: </span><h3>{alcoholCocktail}</h3></div> }
      {glassCocktail && <div className="card-categories"><span>Glass type: </span><h3>{glassCocktail}</h3></div> }
      {categoryCocktail && <div className="card-categories"><span>Drink category: </span><h3>{categoryCocktail}</h3></div>}
      
      {instructionsCocktail && <div><h3 className="font-bold text-red-600 font-josefinSansUni md:text-xl my-4">Recipe:</h3><h3>{instructionsCocktail}</h3></div>}

      {/* YouTube description */}
      {description && <h3>{description}</h3>}

      {/* Ingredients */}
      {ingredients.length > 0 && (
        <div>
          <h3 className="font-bold text-red-600 font-josefinSansUni md:text-xl my-4">Ingredients:</h3>
          <ul>{ingredients.map((line, i) => <li key={i}>{line}</li>)}</ul>
          </div>
      )}

      {/* YouTube video */}
      {isYouTube && videoId && (
        <>
          {channelYouTube && <h3>channel on YouTube: {channelYouTube}</h3>}
          <iframe
            className="youtubeVideo"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={nameYouTubeCocktail ?? "Cocktail video"}
          />
        </>
      )}

      {/* Buttons */}

      {
      (<div className="buttonSelectionMenu">
        {(!item?.strIngredient1 || item?.strIngredient1 === "") && (
          <button className="searchButton">Try to find more</button>
        )}
        <button className="searchButtonYoutube" onClick={handleFavourite}>
          Add to favourites
        </button>
        <button className="searchButton" onClick={handleNoFavourite}>
          Remove
        </button>
        <button className="searchButton">Share</button>
      </div>)}
    </div>
  );
};
