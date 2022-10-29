import React, { useState } from "react";
import Profile from "./Profile";
const Home = () => {
  const [username, setUsername] = useState("");
  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };
  const fetchFromAPI = () => {
    console.log(username);
  };
  return (
    <div>
      <h1>GitHub Profile Fetcher</h1>
      <input
        type="text"
        placeholder="GitHub username"
        onChange={(e) => handleNameChange(e)}
      />
      <button onClick={fetchFromAPI}>Fetch</button>
      <Profile />
    </div>
  );
};

export default Home;
