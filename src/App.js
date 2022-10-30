import "./App.css";
import Message from "./components/message";
import Home from "./components/Home";
import Fact from "./components/Fact";

function App() {
    return (
        <div className="App">
            <Home />
            {/* <Message /> */}
            <Fact/>
        </div>
    );
}

export default App;
