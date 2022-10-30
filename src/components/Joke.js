import React, { useState } from "react";
const Joke = () => {
    const [joke, setJoke] = useState("");
    const [loading, setLoading] = useState(false);
    const fetchFromAPI = () => {
        setLoading(true);
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then((res) => res.json())
        .then((data) => {
            setJoke(data);
        })
        .catch((err) => {})
        .finally(() => {
            setLoading(false);
        });
    };
    return (
        <div>
        <h6>Ik it's being annoying but......</h6>
        <p>Here's a random joke to ruin your day(Again, idk what is being shown):</p>
        <button onClick={fetchFromAPI}>Fetch</button>
        {loading ? <h1>Loading...</h1> : <p>{JSON.stringify(joke)}</p>}
        </div>
    );
};
export default Joke;