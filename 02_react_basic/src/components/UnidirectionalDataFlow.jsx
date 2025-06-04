import { useState } from "react";

const Parent = () => {
    const [message, setMessage] = useState("Hello");
    return <Child message={message} updateState={setMessage} />;
};

const Child = ({ message, updateState }) => {
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => updateState("State Is Updating From Child Components")}>Update The State</button>
        </div>
    );
};

export default Parent;
