import { useState, useEffect } from "react";
import axios from "axios";
import { useThemeContext } from "../contexts/themeContext";

import YouTubeLogoDark from "../assets/images/yt_logo_rgb_dark.png";
import YouTubeLogoLight from "../assets/images/yt_logo_rgb_light.png";

export const YouTubeForm = ({
  dataYouTube,
  setDataYouTube,
  queryYouTube,
  setQueryYouTube,
}) => {
  const { isDarkTheme } = useThemeContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const apiKey = process.env.REACT_APP_XRapidAPIYOUTUBE_API_KEY;

  console.log(setQueryYouTube);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    fetchCocktailsYouTube(queryYouTube);
  };

  const handleChange = (event) => {
    setQueryYouTube(event.target.value);
  };

  console.log(queryYouTube);

  const fetchCocktailsYouTube = async (queryYouTube) => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5`,
        {
          params: {
            q: `${queryYouTube} cocktail recipe`,
            type: "video",
            videoSyndicated: true,
            key: apiKey,
          },
        }
      );
      setDataYouTube(response.data.items);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  console.log(dataYouTube);

  return (
    <div className="theme youtubeForm">
      <img
        src={isDarkTheme ? YouTubeLogoDark : YouTubeLogoLight}
        alt="YouTube Logo"
        className="w-1/2 md:w-1/6"
      />
      {/* <h1>Find Cocktail Video Recipe and Tutorial</h1> */}
      <form onSubmit={handleSubmit}>
        <input
          id="youtubeQuery"
          type="text"
          placeholder="Find cocktail video recipes and tutorials"
          onChange={handleChange}
        />
        {/* <input
          id="youtubeNumber"
          type="number"
          placeholder="How many videos?"
          onChange={handleChange}
        /> */}
        <button className="searchButtonYoutube" type="submit">
          Search
        </button>
      </form>
      {isLoading && <h2>Loading...</h2>}
      {error && (
        <h2>
          It seems something went wrong. Try again with another query please{" "}
          {error}
        </h2>
      )}
    </div>
  );
};
