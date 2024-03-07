import { useState, useEffect } from "react";
import axios from "axios";

export const YouTubeForm = () => {
  const [dataYouTube, setDataYouTube] = useState([]);
  const [queryYouTube, setQueryYouTube] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const apiKey = process.env.REACT_APP_XRapidAPIYOUTUBE_API_KEY;
  console.log(apiKey);

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
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25`,
        {
          params: {
            q: `${queryYouTube} cocktail recipe`,
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
    <div>
      <h1>YouTube Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search YouTube"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
