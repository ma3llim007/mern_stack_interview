import { memo, useCallback, useState } from "react";

// Memorized Child Components
const Button = memo(({ handleClick, title }) => {
    console.log(`Button Rendered of ${title}`);
    return (
        <button className="text-white cursor-pointer bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm" onClick={handleClick}>
            {title}
        </button>
    );
});

const ReactMemoWithCallBack = () => {
    const [count, setCount] = useState(0);

    // Memoized function
    const increment = useCallback(() => {
        console.log("Increment");
        setCount((prev) => prev + 1);
    }, []);
    const decrement = useCallback(() => {
        console.log("Decrement");
        setCount((prev) => prev - 1);
    }, []);
    const reset = useCallback(() => {
        console.log("Reset");
        setCount(0);
    }, []);

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <h1 className="text-4xl font-bold mb-7">Count: {count}</h1>
            <div className="space-x-2">
                <Button handleClick={increment} title={"Increment"} />
                <Button handleClick={decrement} title={"Decrement"} />
                <Button handleClick={reset} title={"Reset"} />
            </div>
        </div>
    );
};

export default ReactMemoWithCallBack;
