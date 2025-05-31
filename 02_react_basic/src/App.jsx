import "./App.css";
import Counter from "./components/ClassComponents";
import If from "./components/Conditional/If";
import Logical from "./components/Conditional/Logical";
import SwitchComponent from "./components/Conditional/Switch";
import Ternary from "./components/Conditional/Ternary";
import CounterTwo from "./components/Counter";
import FunctionalComponent from "./components/FunctionalComponent";
import ControllerComponents from "./components/HandlingForm/ControllerComponents";
import FormikForm from "./components/HandlingForm/FormikForm";
import ReactHookForm from "./components/HandlingForm/ReactHookForm";
import UnControllerComponents from "./components/HandlingForm/UnControllerComponents";
import StateAndProps from "./components/StateAndProps";
import UseEffectCom from "./components/useEffectCom";

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
            {/* <SwitchComponent status={"error"}/> */}
            {/* <CounterTwo /> */}
            {/* <UseEffectCom /> */}
            {/* <ControllerComponents /> */}
            {/* <UnControllerComponents /> */}
            {/* <FormikForm /> */}
            <ReactHookForm />
        </div>
    );
}

export default App;
