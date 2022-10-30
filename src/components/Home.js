import React, { useState } from "react";
import Profile from "./Profile";
const Home = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };
  const fetchFromAPI = () => {
    setLoading(true);
    // console.log(username);
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
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
      {loading ? <h1>Loading...</h1> : <p>{JSON.stringify(userData)}</p>}
    </div>
  );
};

export default Home;
