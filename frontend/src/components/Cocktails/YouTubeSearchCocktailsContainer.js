import { CocktailCard } from "./CocktailCard";

export const YouTubeSearchCocktailsContainer = ({ dataYouTube }) => {
  dataYouTube ? console.log(dataYouTube) : console.log("no data");

  return (
    <div className="cocktailsContainerYoutube">
      <h2>Your Video Recipes from YouTube</h2>
      {dataYouTube.map((youTubeVideo) => (
        <CocktailCard key={youTubeVideo.id.videoId} item={youTubeVideo} />
      ))}
    </div>
  );
};
