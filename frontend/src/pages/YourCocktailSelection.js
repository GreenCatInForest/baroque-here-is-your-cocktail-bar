import { CocktailCard } from "../components/Cocktails/CocktailCard";

export const YourCocktailSelection = () => {
  const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="yourCocktailSelection">
      {existingFavorites.length < 1 ? (
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
      <p>
        Save your selection permanently in Baroque laboratory in your account
      </p>
      <button>Add to Laboratory</button>
    </div>
  );
};
