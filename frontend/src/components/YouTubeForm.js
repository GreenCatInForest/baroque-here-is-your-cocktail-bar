import { useState, useEffect } from "react";
import axios from "axios";

export const YouTubeForm = () => {
  const [dataYouTube, setDataYouTube] = useState([]);
  const [queryYouTube, setQueryYouTube] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

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
