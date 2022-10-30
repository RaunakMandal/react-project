import "./App.css";
import Message from "./components/message";
import Home from "./components/Home";
import Fact from "./components/Fact";
import Joke from "./components/Joke";

function App() {
    return (
        <div className="App">
            <Home />
            {/* <Message /> */}
            <Fact/>
            <Joke/>
        </div>
    );
}

export default App;
