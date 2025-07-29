import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { descrease, increase, reset } from "./store/features/counter.slice";

function App() {
    const { value } = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Counter With Redux</h1>
            <h1>Counter Value is {value}</h1>
            <div className="card" style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <button onClick={() => dispatch(increase())}>Increament</button>
                <button onClick={() => dispatch(descrease())}>Decreament</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </>
    );
}

export default App;
