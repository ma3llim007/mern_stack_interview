import { useEffect } from "react";

const UseEffectCom = () => {
    useEffect(() => {
        console.log("Mounted");
    }, []);
    return <div>useEffect Components</div>;
};

export default UseEffectCom;
