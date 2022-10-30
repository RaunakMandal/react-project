import "./App.css";
import Message from "./components/message";
import Home from "./components/Home";
import Fact from "./components/Fact";
import Joke from "./components/Joke";
import LoveCalculator  from "./components/loveCalculator";

function App() {
    return (
        <div className="App">
            <Home />
            {/* <Message /> */}
            <Fact/>
            <Joke/>
            <LoveCalculator/>
        </div>
    );
}

export default App;
