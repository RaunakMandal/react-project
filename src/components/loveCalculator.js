import React,{useState} from "react";
const LoveCalculator = () => {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const fetchFromAPI = () => {
        setLoading(true);
        fetch(`https://loverapi.herokuapp.com/api/v1/calculate?personA=${name1}&personB=${name2}`)
        .then((res) => res.json())
        .then((data) => {
            setResult(data);
        })
        .catch((err) => {})
        .finally(() => {
            setLoading(false);
        });
    };
    return (
        <div>
            <h2>Love Calculator</h2>
            <input type="text" placeholder="Name 1" onChange={(e) => setName1(e.target.value)} />
            <input type="text" placeholder="Name 2" onChange={(e) => setName2(e.target.value)} />
            <button onClick={fetchFromAPI}>Calculate</button>
            {loading ? <h1>Loading...</h1> : <p>{JSON.stringify(result)}</p>}
        </div>
    );
};
export default LoveCalculator;