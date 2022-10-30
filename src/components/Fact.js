import React, { useState } from "react";
const Fact = () => {
    const [fact, setFact] = useState("");
    const [loading, setLoading] = useState(false);
    const fetchFromAPI = () => {
        setLoading(true);
        fetch("https://uselessfacts.jsph.pl/random.json?language=en")
        .then((res) => res.json())
        .then((data) => {
            setFact(data.text);
        })
        .catch((err) => {})
        .finally(() => {
            setLoading(false);
        });
    };
    return (
        <div>
            <h1>Here's a random fact that nobody cares about:</h1>
            <p>(PS: Don't take offense, the developer doesn't know what is being shown)</p>
            <button onClick={fetchFromAPI}>Fetch</button>
            {loading ? <h1>Loading...</h1> : <p>{fact}</p>}
        </div>
    );
};
export default Fact;