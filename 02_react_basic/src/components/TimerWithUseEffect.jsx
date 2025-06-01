import { useEffect, useState } from "react";

const TimerWithUseEffect = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log("Component MOUNTS");
        const timer = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("Component will unmount");
        };
    }, []);
    return <h1>Timer: {seconds} Seconds</h1>;
};

export default TimerWithUseEffect;
