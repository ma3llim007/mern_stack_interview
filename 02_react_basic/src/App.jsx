import "./App.css";
import Counter from "./components/ClassComponents";
import If from "./components/Conditional/If";
import Logical from "./components/Conditional/Logical";
import SwitchComponent from "./components/Conditional/Switch";
import Ternary from "./components/Conditional/Ternary";
import FunctionalComponent from "./components/FunctionalComponent";
import StateAndProps from "./components/StateAndProps";

function App() {
    return (
        <div className="card">
            {/* <Counter /> */}
            {/* <FunctionalComponent /> */}
            {/* <StateAndProps /> */}
            {/* Conditional Rendering In React */}
            {/* <If isLoggedIn={true} /> */}
            {/* <Ternary isLoggedIn={true} /> */}
            {/* <Logical hasMessage={true}/> */}
            <SwitchComponent status={"error"}/>
        </div>
    );
}

export default App;
