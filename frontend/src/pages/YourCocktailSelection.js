import { CocktailCard } from "../components/Cocktails/CocktailCard";

export const YourCocktailSelection = () => {
  const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div>
      {!existingFavorites ? (
        <h2>You have no cocktails yet, let's find something for you!</h2>
      ) : (
        <h1>Your Cocktail Selection</h1>
      )}

      {existingFavorites.length > 0 ? (
        <div className="cocktailsMiniContainer">
          {existingFavorites.map((existingFavorite) => (
            <CocktailCard
              key={existingFavorite.key}
              item={existingFavorite.data}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
