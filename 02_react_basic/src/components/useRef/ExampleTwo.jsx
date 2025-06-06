import { useEffect, useRef, useState } from "react";

const ExampleTwo = () => {
    const [count, setCount] = useState(0);
    const timerRef = useRef(null);

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
    };

    useEffect(() => {
        return () => clearInterval(timerRef.current); // cleanup components
    }, []);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1>{count}</h1>
            <div className="space-x-4">
                <button onClick={startTimer} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-base cursor-pointer">
                    Start
                </button>
                <button onClick={stopTimer} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-base cursor-pointer">
                    Stop
                </button>
            </div>
        </div>
    );
};

export default ExampleTwo;
