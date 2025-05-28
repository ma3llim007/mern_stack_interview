import { useState } from "react";

const CounterTwo = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter((prevCount) => setCounter(prevCount + 1));
    };
    const decrement = () => {
        setCounter((prevCount) => {
            prevCount > 0 ? setCounter(prevCount - 1) : setCounter(0);
        });
    };
    const reset = () => {
        setCounter(0);
    };
    return (
        <>
            <h1>Count Value: {counter}</h1>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    );
};

export default CounterTwo;
