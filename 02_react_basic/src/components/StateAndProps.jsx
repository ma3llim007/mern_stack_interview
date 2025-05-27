import { useState } from "react";

const Child = ({ userName }) => {
    return <p>{userName}</p>;
};

const StateAndProps = () => {
    const [username, setUsername] = useState("John");
    return (
        <>
            <Child userName={username} />
        </>
    );
};

export default StateAndProps;
