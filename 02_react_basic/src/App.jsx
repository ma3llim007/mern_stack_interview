import "./App.css";
import Counter from "./components/ClassComponents";
import FunctionalComponent from "./components/FunctionalComponent";
import StateAndProps from "./components/StateAndProps";

function App() {
    return (
        <div className="card">
            {/* <Counter /> */}
            {/* <FunctionalComponent /> */}
            <StateAndProps />
        </div>
    );
}

export default App;
