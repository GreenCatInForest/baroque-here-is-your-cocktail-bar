export const YouTubeSearchCocktailsContainer = ({
  dataYouTube,
  setDataYouTube,
  queryYouTube,
  setQueryYouTube,
}) => {
  dataYouTube ? console.log(dataYouTube) : console.log("no data");

  return (
    <div>
      <h2>Your Video Recipes from YouTube</h2>
      <div>
        {dataYouTube.map((youTubeVideo) => (
          <div key={youTubeVideo.id.videoId}>
            <h3>{youTubeVideo.snippet.title}</h3>
            <p>{youTubeVideo.snippet.description}</p>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${youTubeVideo.id.videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={youTubeVideo.snippet.title}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};
