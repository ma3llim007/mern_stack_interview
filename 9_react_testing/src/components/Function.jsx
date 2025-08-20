import { useState } from "react";

const Function = () => {
    const [data, setData] = useState("");
    
    const handleData = () => {
        setData("Hello");
    };

    const otherFun = () => {
        return "hi";
    };

    return (
        <>
            <h1>Functional Component Method Testing</h1>
            <button data-testid="btn1" onClick={handleData}>
                Update
            </button>
            <button data-testid="btn2" onClick={otherFun}>
                call other fun
            </button>
            {data ? <h2>{data}</h2> : null}
        </>
    );
};

export default Function;
