import { memo } from "react";

const ReactMemo = memo(function ReactMemo({ name }) {
    console.log("Rendering");
    return <h1>{name}</h1>;
});

export default ReactMemo;
