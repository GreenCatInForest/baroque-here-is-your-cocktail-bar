import { useState, useEffect } from "react";
import axios from "axios";

export const YouTubeForm = () => {
  const [dataYouTube, setDataYouTube] = useState([]);
  const [queryYouTube, setQueryYouTube] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const apiKey = process.env.YOUTUBE_API_KEY;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  const handleChange = (event) => {
    setQueryYouTube(event.target.value);
  };

  console.log(queryYouTube);

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
